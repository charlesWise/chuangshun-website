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
                    <p className="name">联亲科技专题活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">下一个独角兽，诚邀您的加入。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/zt/lqkj/lqkj_01.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_02.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_03.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_04.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_05.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_06.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_07.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_08.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_09.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_10.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_11.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_12.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_13.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_14.png' />
                    <img src='/images/casedetail/zt/lqkj/lqkj_15.png' />
                </div>
            </div>
        )
    }
}