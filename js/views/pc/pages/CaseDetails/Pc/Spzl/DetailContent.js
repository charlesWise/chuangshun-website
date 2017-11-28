'use strict';
import React from 'react';

export default class DetailContent extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="detail-content">
                <div className="background-intro">
                    <p className="name">商品助理PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">互联网电商平台</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/spzl/spzl_01.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_02.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_03.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_04.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_05.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_06.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_07.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_08.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_09.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_10.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_11.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_12.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_13.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_14.png' />
                    <img src='/images/casedetail/pc/spzl/spzl_15.png' />
                </div>
            </div>
        )
    }
}