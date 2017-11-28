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
                    <p className="name">投融家APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">投融家（www.tourongjia.com）是杭州投融谱华互联网金融服务有限公司运营、基于互联网技术为用户提供多样化资产配置的综合互联网理财服务平台，核心团队拥有传统金融机构、传媒、互联网等领域专业背景，具有先进的资产开发、风险控制、互联网技术及运营能力，以依法合规、安全透明为原则，秉持金融创新、普惠大众的理念，打造全新先进的综合理财模式，迅速崛起成为国内领先的专业互联网金融服务平台。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/trj/trj_01.png' />
                    <img src='/images/casedetail/app/trj/trj_02.png' />
                    <img src='/images/casedetail/app/trj/trj_03.png' />
                    <img src='/images/casedetail/app/trj/trj_04.png' />
                    <img src='/images/casedetail/app/trj/trj_05.png' />
                    <img src='/images/casedetail/app/trj/trj_06.png' />
                    <img src='/images/casedetail/app/trj/trj_07.png' />
                    <img src='/images/casedetail/app/trj/trj_08.png' />
                    <img src='/images/casedetail/app/trj/trj_09.png' />
                    <img src='/images/casedetail/app/trj/trj_10.png' />
                    <img src='/images/casedetail/app/trj/trj_11.png' />
                    <img src='/images/casedetail/app/trj/trj_12.png' />
                    <img src='/images/casedetail/app/trj/trj_13.png' />
                    <img src='/images/casedetail/app/trj/trj_14.png' />
                    <img src='/images/casedetail/app/trj/trj_15.png' />
                </div>
            </div>
        )
    }
}