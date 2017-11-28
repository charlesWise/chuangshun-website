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
                    <p className="name">UBSP APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">UPG业务处理服务平台</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/ubsp/ubsp_01.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_02.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_03.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_04.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_05.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_06.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_07.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_08.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_09.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_10.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_11.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_12.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_13.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_14.png' />
                    <img src='/images/casedetail/app/ubsp/ubsp_15.png' />
                </div>
            </div>
        )
    }
}