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
                    <p className="name">长富理财APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">长富理财是由昇融资产管理有限公司运营，公司由香港上市公司投融长富（00850.HK）和国资背景的杭州光大资产管理有限公司共同出资建立。雄厚的资产实力和强大的股东背景为公司提供了强有力的支持。公司结合专业金融团队和互联网技术，将资产配置、投资管理、风险控制、投资回报结合到一起，用智能投资数字模型替代以往的投资顾问，帮助客户更高效的管理资产和财富。相信科技金融，相信光大长富。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/cflc/cflc_01.png' />
                    <img src='/images/casedetail/app/cflc/cflc_02.png' />
                    <img src='/images/casedetail/app/cflc/cflc_03.png' />
                    <img src='/images/casedetail/app/cflc/cflc_04.png' />
                    <img src='/images/casedetail/app/cflc/cflc_05.png' />
                    <img src='/images/casedetail/app/cflc/cflc_06.png' />
                    <img src='/images/casedetail/app/cflc/cflc_07.png' />
                    <img src='/images/casedetail/app/cflc/cflc_08.png' />
                    <img src='/images/casedetail/app/cflc/cflc_09.png' />
                    <img src='/images/casedetail/app/cflc/cflc_10.png' />
                    <img src='/images/casedetail/app/cflc/cflc_11.png' />
                    <img src='/images/casedetail/app/cflc/cflc_12.png' />
                    <img src='/images/casedetail/app/cflc/cflc_13.png' />
                    <img src='/images/casedetail/app/cflc/cflc_14.png' />
                    <img src='/images/casedetail/app/cflc/cflc_15.png' />
                </div>
            </div>
        )
    }
}