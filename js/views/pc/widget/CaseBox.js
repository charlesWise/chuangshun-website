'use strict';
import React from 'react';
import LinkData from '../../../res/linkData';

class CaseBox extends React.Component{
    constructor(...props){
        super(...props);
        
    }
    componentDidMount() {
        
    }
    render(){
        let detailBanner = this.props.detailBanner;
        return <div className="case-box-container"
            style={{background: `#f3f3f3 url(${detailBanner}) no-repeat top center`}}
        >
            <div className="case-box-content">
                {this.props.children}
            </div>
            <UpDownPages />
        </div>
    }
}

export default CaseBox;

class UpDownPages extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }
    }
    componentDidMount() {
        
    }
    _prevLink() {
        let curIndex = this._getIndex(),
            linkDataLength = LinkData.length;
        if(curIndex > 0) {
            return LinkData[curIndex-1];
        }else {
            return LinkData[linkDataLength-1];
        }
    }
    _nextLink() {
        let curIndex = this._getIndex(),
            linkDataLength = LinkData.length;
        if(curIndex < linkDataLength-1) {
            return LinkData[curIndex+1];
        }else {
            return LinkData[0];
        }
    }
    _getIndex() {
        let linkName = location.pathname.slice(1);
        return this._indexOf(LinkData, linkName);
    }
    _indexOf(arr, str) {
        if(arr && arr.indexOf){
            return arr.indexOf(str);
        }
        for(let i = 0, len = arr.length; i < len; i++){
            if(arr[i] == str){
                return i;
            }
        }
        return -1;
    }
    render() {
        let prevLink = this._prevLink(), nextLink = this._nextLink();
        if(!prevLink || !nextLink) return null;
        return (
            <div className="up-down-content">
                <ul>
                    <li className="prev"><a href={prevLink}>&lt; 上一案例</a></li>
                    <li className="all" ><a href="case.html">查看全部案例</a></li>
                    <li className="next"><a href={nextLink}>下一案例 &gt;</a></li>
                </ul>
            </div>
        )
    }
}