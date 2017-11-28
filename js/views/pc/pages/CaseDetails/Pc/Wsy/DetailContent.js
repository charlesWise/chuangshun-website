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
                    <p className="name">微商业PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">新浪微博电商合作平台。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/wsy/wsy_01.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_02.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_03.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_04.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_05.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_06.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_07.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_08.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_09.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_10.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_11.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_12.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_13.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_14.png' />
                    <img src='/images/casedetail/pc/wsy/wsy_15.png' />
                </div>
            </div>
        )
    }
}