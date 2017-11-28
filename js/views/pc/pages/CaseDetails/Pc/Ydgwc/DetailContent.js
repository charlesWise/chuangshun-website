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
                    <p className="name">云端购物车PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">全新团购系统</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_01.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_02.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_03.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_04.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_05.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_06.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_07.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_08.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_09.png' />
                    <img src='/images/casedetail/pc/ydgwc/ydgwc_10.png' />
                </div>
            </div>
        )
    }
}