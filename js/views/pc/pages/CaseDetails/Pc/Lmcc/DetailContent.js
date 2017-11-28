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
                    <p className="name">蓝媒橱窗PC端设计</p>
                    {/* <p className="title">项目背景</p> */}
                    {/* <p className="brief">互联网电商平台</p> */}
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/lmcc/lmcc_01.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_02.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_03.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_04.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_05.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_06.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_07.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_08.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_09.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_10.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_11.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_12.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_13.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_14.png' />
                    <img src='/images/casedetail/pc/lmcc/lmcc_15.png' />
                </div>
            </div>
        )
    }
}