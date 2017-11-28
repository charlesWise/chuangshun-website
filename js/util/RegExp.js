export function testPhone(value) {
    if(/1[34578][0-9]{9}$/g.test(value)){
        return true;
    }
    return false;
}

export function testCode(value) {
    if(/[0-9]{6}/g.test(value)){
        return true;
    }
    return false;
}

export function testPassword(value){
    if(/.{6,16}/g.test(value)){
        return true;
    }
    return false;
}

export function testName(value) {
    if(/^([\u4e00-\u9fa5]){2,15}$/g.test(value)){
        return true;
    }
    return false;
}

export function testAddress(value) {
    if(/^([a-zA-Z0-9\u4e00-\u9fa5]){5,60}$/g.test(value)){
        return true;
    }
    return false;
}