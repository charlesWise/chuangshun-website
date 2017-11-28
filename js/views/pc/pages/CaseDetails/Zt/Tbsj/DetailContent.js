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
                    <p className="name">淘宝商家专题活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">给“礼”大狂欢淘宝商家活动页。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/zt/tbsj/tbsj_01.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_02.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_03.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_04.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_05.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_06.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_07.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_08.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_09.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_10.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_11.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_12.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_13.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_14.png' />
                    <img src='/images/casedetail/zt/tbsj/tbsj_15.png' />
                </div>
            </div>
        )
    }
}