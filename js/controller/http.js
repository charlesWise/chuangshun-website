'use strict'
import { HTTP, Device } from 'util';
import Mlux from 'mlux';
import Pipe from 'pipexjs';

function emptyHandler(source, next, abort) {
    next();
}
function errorHanlder(source, next, abort) {
    APPContext.toast(source.message);
    next();
}
function permissionErrorHandler(source, next, abort) {
    //登录成功再请求一次接口 失败不做处理
    next();
}
function failHandler(source, next, abort) {
    next();
}

function post(url, params) {
    return HTTP.post(url, params)
}
function get(url, params) {
    return HTTP.get(url, params);
}
function httpRequest(url, params, method) {
    if(method=='get'){
        return get(url, params, method)
    }else{
        return post(url, params, method);
    }
}


class HttpResult {
    constructor(url, params, method) {
        this.url = url;
        this.params = params;
        this.method = method;
        this._errorPipe = new Pipe(emptyHandler, errorHanlder);
        this._permissionErrorPipe = new Pipe(emptyHandler, permissionErrorHandler);
        this._failPipe = new Pipe(emptyHandler, failHandler);
        this._successPipe = new Pipe();
    }
    error(pipeCallback, isBefore) {
        if (isBefore) {
            this._errorPipe.unshift(pipeCallback);
        } else {
            this._errorPipe.append(pipeCallback);
        }
        return this;
    }
    permissionError(pipeCallback, isBefore) {
        if (isBefore) {
            this._permissionErrorPipe.unshift(pipeCallback);
        } else {
            this._permissionErrorPipe.append(pipeCallback);
        }
        return this;
    }
    fail(pipeCallback, isBefore) {
        if (isBefore) {
            this._failPipe.unshift(pipeCallback);
        } else {
            this._failPipe.append(pipeCallback);
        }
        return this;
    }
    success(pipeCallback, isBefore) {
        if (isBefore) {
            this._successPipe.unshift(pipeCallback);
        } else {
            this._successPipe.append(pipeCallback);
        }
        return this;
    }
    send(params, method) {
        this.params = params || this.params;
        this.method = method || this.method;
        httpRequest(this.url, this.params, this.method).then((content) => {
            // this._successPipe.source(content);
            console.log('==========>reponse:' + this.url, content);
            if (content.code == '5000') {
                content.httpResult = this;
                return this._permissionErrorPipe.source(content);
            } else if (content.code != '200') {
                this._errorPipe.source(content);
            } else {
                this._successPipe.source(content);
            }
        }, (args) => {
            console.log('==========>reponse err:' + this.url, args)
            this._failPipe.source(args);
        });
    }
}

function sendRequest(url, params, method) {
    if (!params) {
        method = 'get';
    }
    method = method || 'get';
    var httpResult = new HttpResult(url, params, method);
    httpResult.send();
    return httpResult;
}
function createAPI(list) {
    var apis = {}
    Object.keys(list).forEach(function (l) {
        apis[l] = function (params, method) {
            return sendRequest(list[l], params, method);
        }
    });
    return apis;
}


export default {
    createAPI
}