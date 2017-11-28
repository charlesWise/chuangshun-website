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
                    <p className="name">理财时代APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">上海帛华金融信息服务有限公司（以下简称“理财时代”）是一家严格遵守网贷行业监管要求、全新设立的互联网金融信息服务平台，由大型央企-国家电力公司下属多级子公司北京安星联供应链管理有限公司战略入股（持股比例30%），国家电力公司是中国最大的电力企业，注册资本1600亿人民币。</p>
                    <p className="brief">作为一家立志于服务大众、以践行普惠金融为目标的互金平台，“理财时代”从创办伊始便汇聚了行业的顶尖力量，包括创始人在内的核心人员，都具备了极高的行业素养和丰富经验。平台将专注于三农金融、消费金融、小微信贷、供应链金融等领域的小额分散优质资产挖掘，围绕产品、风控、服务、行业自律四大体系，依托大数据风控、智能筛查等高科技手段，从源头保障资产的安全性。</p>
                    <p className="brief">在科技金融日新月异的今天，“理财时代”将不忘金融服务实体、金融普惠大众的初衷，通过互联网技术，在拓宽投资者的投资途径的同时，提高社会投资和融资双方的撮合效率，为小微企业和个人打造更为高效、低成本的融资渠道，真正为普惠金融贡献力量！</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/lcsd/lcsd_01.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_02.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_03.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_04.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_05.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_06.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_07.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_08.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_09.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_10.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_11.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_12.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_13.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_14.png' />
                    <img src='/images/casedetail/app/lcsd/lcsd_15.png' />
                </div>
            </div>
        )
    }
}