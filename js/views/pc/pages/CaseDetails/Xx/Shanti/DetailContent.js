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
                    <p className="name">Shanti Yoga</p>
                    <p className="title">项目背景</p>
                    <p className="brief">Shanti Yoga 老法租的独栋小洋房坐落在南京西路和静安寺中间的陕西北路上。安静、祥和、小班制的教学特色，拥有VIP的环境与VIP的教学过程。</p>
                    <p className="brief">创顺科技为Shanti Yoga制定线下营销方案，并帮助Shanti Yoga进行品牌等全方位升级设计，包含LOGO、会员卡、宣传类设计，赢得客户及市场的肯定，成功为客户带来品牌升级价值。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/shanti/shanti_01.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_02.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_03.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_04.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_05.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_06.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_07.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_08.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_09.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_10.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_11.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_12.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_13.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_14.png' />
                    <img src='/images/casedetail/xx/shanti/shanti_15.png' />
                </div>
            </div>
        )
    }
}