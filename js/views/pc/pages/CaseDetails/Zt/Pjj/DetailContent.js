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
                    <p className="name">普金吉专题活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">推荐好友送现金，注册理财奖不停。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/zt/pjj/pjj_01.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_02.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_03.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_04.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_05.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_06.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_07.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_08.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_09.png' />
                    <img src='/images/casedetail/zt/pjj/pjj_10.png' />
                </div>
            </div>
        )
    }
}