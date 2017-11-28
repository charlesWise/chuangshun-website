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
                    <p className="name">微博应用PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">创顺科技UED团队由众多的资深视觉设计师和前端开发工程师组成，拥有近十年的UED设计经验，积累了优秀的设计作品页达36000余幅。主要的服务过的产品客户包括新浪微博、资邦集团 、Wind、Shopex、UPG、天猫、淘宝网、中国电信、京东商城等电子商务龙头企业，我们的服务质量和人才素质得到了客户充分的认可，在行业内有良好的口碑和知名度。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/wbyy/wbyy_01.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_02.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_03.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_04.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_05.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_06.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_07.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_08.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_09.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_10.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_11.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_12.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_13.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_14.png' />
                    <img src='/images/casedetail/pc/wbyy/wbyy_15.png' />
                </div>
            </div>
        )
    }
}