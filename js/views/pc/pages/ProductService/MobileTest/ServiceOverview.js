'use strict';
import React from 'react';

export default class ServiceOverview extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">服务概述</p>
                        <p className="en">Service overview</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe">
                        <p>着智能手机市场的不断发展和成熟，企业在移动市场竞争中遇到在多样化的移动平台下开发、迅猛增加的移动设备和不断变化的本地和区域网络环境等诸多挑战，如何在瞬息万变的市场竞争中保证移动产品的质量、赢得不败之地成为企业关注的重点话题。</p>
                        <p>创顺科技在测试领域拥有多年的服务经验，在移动设备测试领域拥有强大的技术团队和测试方法论联亲科技的移动测试解决方案能够帮助企业运筹帷幄，智慧决策，应对挑战。</p>
                    </div>
                    <div className="cloud-science">
                        <dl>
                            <dt>
                                <ul>
                                    <li>
                                        <div className="icon"><span className="icon_consult"></span></div>
                                        <div className="desc">
                                            <p className="title">测试咨询</p>
                                            <p className="brief">专业测试经验积累，为企业提供专业化的移动测试咨询服务。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><span className="icon_cloud"></span></div>
                                        <div className="desc">
                                            <p className="title">移动云平台测试</p>
                                            <p className="brief">创顺科技具有行业领先的过程、方法和工具，这些保证了所提供的业务转型解决方案从计划到交付的顺利实施。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><span className="icon_automatic"></span></div>
                                        <div className="desc">
                                            <p className="title">移动自动化测试</p>
                                            <p className="brief">自主研发自动化测试平台和工具，提高测试工作效率，提高企业移动设备质量。</p>
                                        </div>
                                    </li>
                                </ul>
                            </dt>
                            <dd><img src='/images/service/science.png' /></dd>
                        </dl>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}