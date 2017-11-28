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
                    <p className="name">唐小僧APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">唐小僧由资邦元达(上海)互联网金融服务有限公司发起成立。与新浪支付进行了合作，资金由新浪支付托管。平台获得中国银行卡检测中心颁发的《第三方机构入网安全技术评估检测证书》、《银联卡账户信息安全合规证书》，通过国际机构VeriSign安全认证。唐小僧秉承“资本兴邦 富而有道” 的核心理念和“务本、 正向、 诚信、 共享” 的价值观。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/txs/txs_01.png' />
                    <img src='/images/casedetail/app/txs/txs_02.png' />
                    <img src='/images/casedetail/app/txs/txs_03.png' />
                    <img src='/images/casedetail/app/txs/txs_04.png' />
                    <img src='/images/casedetail/app/txs/txs_05.png' />
                    <img src='/images/casedetail/app/txs/txs_06.png' />
                    <img src='/images/casedetail/app/txs/txs_07.png' />
                    <img src='/images/casedetail/app/txs/txs_08.png' />
                    <img src='/images/casedetail/app/txs/txs_09.png' />
                    <img src='/images/casedetail/app/txs/txs_10.png' />
                    <img src='/images/casedetail/app/txs/txs_11.png' />
                    <img src='/images/casedetail/app/txs/txs_12.png' />
                    <img src='/images/casedetail/app/txs/txs_13.png' />
                    <img src='/images/casedetail/app/txs/txs_14.png' />
                    <img src='/images/casedetail/app/txs/txs_15.png' />
                </div>
            </div>
        )
    }
}