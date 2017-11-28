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
                    <p className="name">柏林阁电商PC设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">联亲为各类B2C电商平台、及电商独立站点平台提供设计及技术研发服务。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/blgds/blgds_01.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_02.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_03.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_04.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_05.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_06.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_07.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_08.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_09.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_10.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_11.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_12.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_13.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_14.png' />
                    <img src='/images/casedetail/pc/blgds/blgds_15.png' />
                </div>
            </div>
        )
    }
}