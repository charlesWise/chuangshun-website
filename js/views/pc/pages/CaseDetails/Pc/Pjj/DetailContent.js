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
                    <p className="name">普金吉PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">普金吉（www.pujinji.com）是苏州博仕汇网络科技有限公司旗下的、一家按照网贷行业监管要求和发展趋势全新设立的互联网普惠金融服务平台。平台运营总部位于苏州园区，研发基地位于上海，辅以强大的产品及技术支撑团队，创始人及核心管理团队由多位资深互联网专家和多年金融从业经验的高管合力组成，是一家具备深厚互联网和金融双重基因的新型互联网投融资中介和理财增值服务平台！</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/pjj/pjj_01.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_02.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_03.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_04.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_05.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_06.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_07.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_08.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_09.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_10.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_11.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_12.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_13.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_14.png' />
                    <img src='/images/casedetail/pc/pjj/pjj_15.png' />
                </div>
            </div>
        )
    }
}