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
                    <p className="name">聚友电商PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">聚友是一款嵌入IE式的购物沟通应用，在用户在各大平台或独立B站进行购物的过程中，满足用户的日常炫耀及沟通需求，通过聚友晒单可活动不同平台的优惠折扣及返利。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/jy/jy_01.png' />
                    <img src='/images/casedetail/pc/jy/jy_02.png' />
                    <img src='/images/casedetail/pc/jy/jy_03.png' />
                    <img src='/images/casedetail/pc/jy/jy_04.png' />
                    <img src='/images/casedetail/pc/jy/jy_05.png' />
                    <img src='/images/casedetail/pc/jy/jy_06.png' />
                    <img src='/images/casedetail/pc/jy/jy_07.png' />
                    <img src='/images/casedetail/pc/jy/jy_08.png' />
                    <img src='/images/casedetail/pc/jy/jy_09.png' />
                    <img src='/images/casedetail/pc/jy/jy_10.png' />
                    <img src='/images/casedetail/pc/jy/jy_11.png' />
                    <img src='/images/casedetail/pc/jy/jy_12.png' />
                    <img src='/images/casedetail/pc/jy/jy_13.png' />
                    <img src='/images/casedetail/pc/jy/jy_14.png' />
                    <img src='/images/casedetail/pc/jy/jy_15.png' />
                </div>
            </div>
        )
    }
}