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
                    <p className="name">阿胡子产品VI设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">阿胡子宣传册子等VI设计。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/ahz/ahz_01.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_02.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_03.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_04.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_05.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_06.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_07.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_08.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_09.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_10.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_11.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_12.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_13.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_14.png' />
                    <img src='/images/casedetail/xx/ahz/ahz_15.png' />
                </div>
            </div>
        )
    }
}