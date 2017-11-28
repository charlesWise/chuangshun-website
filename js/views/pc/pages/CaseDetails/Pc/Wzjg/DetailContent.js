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
                    <p className="name">温州金改PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">征信服务平台。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/wzjg/wzjg_01.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_02.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_03.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_04.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_05.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_06.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_07.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_08.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_09.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_10.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_11.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_12.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_13.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_14.png' />
                    <img src='/images/casedetail/pc/wzjg/wzjg_15.png' />
                </div>
            </div>
        )
    }
}