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
                    <p className="name">爆款内参PC设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">爆款内参是一款基于数亿商品数据，为淘宝卖家提供多维度爆款指数分析的应用。其运用聚类统计分析的方法，可以从平台、地区、信誉、价格、营销活动、店铺等六大方面统计分析爆款的详细数据情况，帮助客户科学地认知业内爆款多方面的成因，为店铺日常运营做指导。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/bknc/bknc_01.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_02.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_03.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_04.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_05.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_06.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_07.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_08.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_09.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_10.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_11.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_12.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_13.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_14.png' />
                    <img src='/images/casedetail/pc/bknc/bknc_15.png' />
                </div>
            </div>
        )
    }
}