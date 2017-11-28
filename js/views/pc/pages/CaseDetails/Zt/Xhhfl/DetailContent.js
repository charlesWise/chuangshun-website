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
                    <p className="name">鑫合汇会员福利大放送专题活动</p>
                    <p className="title">项目背景</p>
                    <p className="brief">会员福利大放送，百万红包等你拿。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_01.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_02.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_03.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_04.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_05.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_06.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_07.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_08.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_09.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_10.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_11.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_12.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_13.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_14.png' />
                    <img src='/images/casedetail/zt/xhhfl/xhhfl_15.png' />
                </div>
            </div>
        )
    }
}