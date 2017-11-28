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
                    <p className="name">淘团购APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">淘团购电商致力于手机电商服务平台。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/thg/thg_01.png' />
                    <img src='/images/casedetail/app/thg/thg_02.png' />
                    <img src='/images/casedetail/app/thg/thg_03.png' />
                    <img src='/images/casedetail/app/thg/thg_04.png' />
                    <img src='/images/casedetail/app/thg/thg_05.png' />
                    <img src='/images/casedetail/app/thg/thg_06.png' />
                    <img src='/images/casedetail/app/thg/thg_07.png' />
                    <img src='/images/casedetail/app/thg/thg_08.png' />
                    <img src='/images/casedetail/app/thg/thg_09.png' />
                    <img src='/images/casedetail/app/thg/thg_10.png' />
                    <img src='/images/casedetail/app/thg/thg_11.png' />
                    <img src='/images/casedetail/app/thg/thg_12.png' />
                    <img src='/images/casedetail/app/thg/thg_13.png' />
                    <img src='/images/casedetail/app/thg/thg_14.png' />
                    <img src='/images/casedetail/app/thg/thg_15.png' />
                </div>
            </div>
        )
    }
}