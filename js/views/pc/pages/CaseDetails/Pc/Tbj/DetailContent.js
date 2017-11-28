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
                    <p className="name">投保家PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">投保家（www.toubaojia.com）是国内领先的综合型互联网保险平台，为用户提供保险需求分析、在线产品咨询与销售、全程理赔跟踪服务等全方位的优质服务。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/tbj/tbj_01.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_02.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_03.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_04.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_05.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_06.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_07.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_08.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_09.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_10.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_11.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_12.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_13.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_14.png' />
                    <img src='/images/casedetail/pc/tbj/tbj_15.png' />
                </div>
            </div>
        )
    }
}