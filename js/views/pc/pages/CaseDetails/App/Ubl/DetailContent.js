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
                    <p className="name">U部落APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">中新力合股份有限公司(英文Uni-Power Group，简称UPG)系一家集金融、信息与网络为一体的综合化金融服务机构。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/ubl/ubl_01.png' />
                    <img src='/images/casedetail/app/ubl/ubl_02.png' />
                    <img src='/images/casedetail/app/ubl/ubl_03.png' />
                    <img src='/images/casedetail/app/ubl/ubl_04.png' />
                    <img src='/images/casedetail/app/ubl/ubl_05.png' />
                    <img src='/images/casedetail/app/ubl/ubl_06.png' />
                    <img src='/images/casedetail/app/ubl/ubl_07.png' />
                    <img src='/images/casedetail/app/ubl/ubl_08.png' />
                    <img src='/images/casedetail/app/ubl/ubl_09.png' />
                    <img src='/images/casedetail/app/ubl/ubl_10.png' />
                    <img src='/images/casedetail/app/ubl/ubl_11.png' />
                    <img src='/images/casedetail/app/ubl/ubl_12.png' />
                    <img src='/images/casedetail/app/ubl/ubl_13.png' />
                    <img src='/images/casedetail/app/ubl/ubl_14.png' />
                    <img src='/images/casedetail/app/ubl/ubl_15.png' />
                </div>
            </div>
        )
    }
}