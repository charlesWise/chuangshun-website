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
                    <p className="name">最理财金秋十月专题活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">推荐好友送现金，注册理财奖不停。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/zt/zlc/zlc_01.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_02.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_03.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_04.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_05.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_06.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_07.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_08.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_09.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_10.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_11.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_12.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_13.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_14.png' />
                    <img src='/images/casedetail/zt/zlc/zlc_15.png' />
                </div>
            </div>
        )
    }
}