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
                    <p className="name">端众PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">无线解决方案及系统提供商。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/dz/dz_01.png' />
                    <img src='/images/casedetail/pc/dz/dz_02.png' />
                    <img src='/images/casedetail/pc/dz/dz_03.png' />
                    <img src='/images/casedetail/pc/dz/dz_04.png' />
                    <img src='/images/casedetail/pc/dz/dz_05.png' />
                    <img src='/images/casedetail/pc/dz/dz_06.png' />
                    <img src='/images/casedetail/pc/dz/dz_07.png' />
                    <img src='/images/casedetail/pc/dz/dz_08.png' />
                    <img src='/images/casedetail/pc/dz/dz_09.png' />
                    <img src='/images/casedetail/pc/dz/dz_10.png' />
                    <img src='/images/casedetail/pc/dz/dz_11.png' />
                    <img src='/images/casedetail/pc/dz/dz_12.png' />
                    <img src='/images/casedetail/pc/dz/dz_13.png' />
                    <img src='/images/casedetail/pc/dz/dz_14.png' />
                    <img src='/images/casedetail/pc/dz/dz_15.png' />
                </div>
            </div>
        )
    }
}