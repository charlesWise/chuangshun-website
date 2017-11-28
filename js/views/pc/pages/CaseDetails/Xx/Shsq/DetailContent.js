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
                    <p className="name">上海孙桥快乐丰收节</p>
                    <p className="title">项目背景</p>
                    <p className="brief">策划并设计了2008、2009年两届孙桥快乐丰收节开幕，参加领导有上海市委常委，浦东新区区委书记徐麟。活动以移动LED车现场转播，外籍人士腰鼓表演，卡通吉祥物设计等特色。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/shsq/shsq_01.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_02.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_03.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_04.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_05.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_06.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_07.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_08.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_09.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_10.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_11.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_12.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_13.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_14.png' />
                    <img src='/images/casedetail/xx/shsq/shsq_15.png' />
                </div>
            </div>
        )
    }
}