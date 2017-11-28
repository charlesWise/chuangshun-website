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
                    <p className="name">Shanti Yoga周年活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">Shanti Yoga 老法租的独栋小洋房坐落在南京西路和静安寺中间的陕西北路上。安静、祥和、小班制的教学特色，拥有VIP的环境与VIP的教学过程。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_01.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_02.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_03.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_04.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_05.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_06.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_07.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_08.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_09.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_10.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_11.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_12.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_13.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_14.png' />
                    <img src='/images/casedetail/xx/shantiZn/shantiZn_15.png' />
                </div>
            </div>
        )
    }
}