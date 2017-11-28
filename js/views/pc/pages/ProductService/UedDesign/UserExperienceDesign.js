'use strict';
import React from 'react';

export default class UserExperienceDesign extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">UED设计</p>
                        <p className="en">User Experience Design</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe">
                        <p>随着互联网技术不断的发展，Web站点或者Web应用越来越复杂。原来单一的静态网页，变得多样而丰富，特别是移动互联网的大力发展，移动设备，各种浏览器，连入互联网的方式越来越多，如何提高Web页面的用户体验，增加用户的粘性变成众多企业关注的核心问题。</p>
                        <p className="text">创顺科技UED团队由众多的资深视觉设计师和前端开发工程师组成，拥有近十年的UED设计经验，积累了优秀的设计作品页达36000余幅。主要的服务过的产品客户包括新浪微博、资邦集团 、Wind、Shopex、天猫、淘宝网、中国电信、京东商城等电子商务龙头企业，我们的服务质量和人才素质得到了客户充分的认可，在行业内有良好的口碑和知名度。</p>
                    </div>
                    <div className="experience-design"><img src='/images/service/experience_design.png' /></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}