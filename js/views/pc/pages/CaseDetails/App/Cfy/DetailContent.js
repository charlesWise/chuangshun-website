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
                    <p className="name">长富云APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">长富云是投融长富金服集团旗下的互联网理财师平台，拥有香港主板上市公司（00850.HK）背景，由杭州长富网络科技有限公司运营。长富云运用“互联网+理财师”模式，打造专业领先的互联网理财师服务平台，培养并提升理财师服务高净值客户能力，助力中国广大理财师实现真正独立创业。长富云以无数优秀理财师实现独立创业提供极致体验的服务平台为使命，通过多元化理财产品，满足高净值人群多样化、个性化的资产配置需求，提高国内整体的资产配置水平。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/cfy/cfy_01.png' />
                    <img src='/images/casedetail/app/cfy/cfy_02.png' />
                    <img src='/images/casedetail/app/cfy/cfy_03.png' />
                    <img src='/images/casedetail/app/cfy/cfy_04.png' />
                    <img src='/images/casedetail/app/cfy/cfy_05.png' />
                    <img src='/images/casedetail/app/cfy/cfy_06.png' />
                    <img src='/images/casedetail/app/cfy/cfy_07.png' />
                    <img src='/images/casedetail/app/cfy/cfy_08.png' />
                    <img src='/images/casedetail/app/cfy/cfy_09.png' />
                    <img src='/images/casedetail/app/cfy/cfy_10.png' />
                    <img src='/images/casedetail/app/cfy/cfy_11.png' />
                    <img src='/images/casedetail/app/cfy/cfy_12.png' />
                    <img src='/images/casedetail/app/cfy/cfy_13.png' />
                    <img src='/images/casedetail/app/cfy/cfy_14.png' />
                    <img src='/images/casedetail/app/cfy/cfy_15.png' />
                </div>
            </div>
        )
    }
}