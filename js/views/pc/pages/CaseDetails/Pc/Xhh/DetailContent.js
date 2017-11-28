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
                    <p className="name">鑫合汇PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">鑫合汇（xinhehui.com）是目前国内知名的专业短期理财平台。依托母公司中新力合集团10年企业金融服务经验.全流程风控系统“鑫盾”全面护航，人保财险承保，为广大投资人提供短期、透明、灵活的理财产品；2016年当选为杭州市互联网金融协会首届执行会长单位!</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/xhh/xhh_01.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_02.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_03.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_04.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_05.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_06.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_07.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_08.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_09.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_10.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_11.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_12.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_13.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_14.png' />
                    <img src='/images/casedetail/pc/xhh/xhh_15.png' />
                </div>
            </div>
        )
    }
}