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
                    <p className="name">唐小僧专题活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">推荐好友送现金，注册理财奖不停。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/zt/txs/txs_01.png' />
                    <img src='/images/casedetail/zt/txs/txs_02.png' />
                    <img src='/images/casedetail/zt/txs/txs_03.png' />
                    <img src='/images/casedetail/zt/txs/txs_04.png' />
                    <img src='/images/casedetail/zt/txs/txs_05.png' />
                </div>
            </div>
        )
    }
}