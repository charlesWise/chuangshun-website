'use strict';
import React from 'react';

export default class ProjectService extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="project-service">
                <div className="project-content">
                    <div className="project-title">
                        <p className="title">产品与解决方案，顶尖的服务</p>
                        <p className="sub-title">浏览我们的产品与解决方案，并了解创顺能够为您做些什么</p>
                    </div>
                    <div className="service-content">
                        <ul>
                            <li>
                                <a href="solutionPlan.html" className="service-wrap">
                                    <p className="icon"><span className="icon_solution"></span></p>
                                    <p className="title"><span>金融服务</span>解决方案</p>
                                    <p className="brief">创顺拥有专业化技术团队，其骨干人员具有10年以上的金融大型关键系统的咨询，开发与实施经验，金融服务解决方案在全国范围内为多家金融企业及机构，提供专业性技术性解决方案。</p>
                                </a>
                            </li>
                            <li>
                                <a href="internetPlatform.html" className="service-wrap">
                                    <p className="icon"><span className="icon_platform"></span></p>
                                    <p className="title"><span>互联网</span>平台搭建</p>
                                    <p className="brief">创顺将针对不同行业需求，为企业量身打造互联网商业平台，让企业拥有互联网的力量。细分行业，深耕细作互联网+颠覆传统商业未来，帮助企业在每一个用户触点和终端,构筑围绕用户的营销互动能力。</p>
                                </a>
                            </li>
                            <li className="last-li">
                                <a href="uedDesign.html" className="service-wrap">
                                    <p className="icon"><span className="icon_service"></span></p>
                                    <p className="title">UED<span>设计服务</span></p>
                                    <p className="brief">随着互联网技术不断的发展，Web应用变得多样丰富。原来单一的静态网页，特别是移动互联网的大力发展。移动设备，浏览器，连入互联网的方式越来越多，提高用户体验，增加用户粘性变成众多企业关注的核心问题。</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}