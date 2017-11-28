'use strict';
import React from 'react';

export default class SummaryService extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">服务概述</p>
                        <p className="en">Summary of service</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe">
                        <p>随着智能手机性能的进一步提高，手机上的移动应用程序得到了长足的发展。特别是随着开发难度的降低和适用人群的增多，企业创建的APP将会大量的进入市场，让手机真正的智能起来。</p>
                        <p>创顺科技的移动应用服务支持客户的360度移动战略，借助移动互联和手机平台的应用开发，帮助客户实现手机应用优化，将应用延伸到涵盖范围日益扩大的移动通信技术领域。创顺科技的创新与实践精神，助力全球客户尽享科技革新所带来的卓越运营，为客户持续创造核心价值。</p>
                    </div>
                    <div className="ie-service-case">
                        <ul>
                            <li>
                                <p className="icon"><span className="icon_service_1"></span></p>
                                <p className="title">移动应用界面设计</p>
                                <p className="brief">创顺科技积累了丰富的金融实践经验,提供了面向多家银行的系统规划和咨询、数据分析以及系统运行的维护等服务。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_service_2"></span></p>
                                <p className="title">跨平台移动应用开发</p>
                                <p className="brief">创顺科技有多年系统开发经验, 积累了丰富的金融行业技术研发经验，在金融类应用服务方面有领先技术优势。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_service_3"></span></p>
                                <p className="title">应用程序移植服务</p>
                                <p className="brief">创顺科技提供针对风险控制与电子商务、企业资源管理等领域的服务和解决方案，降低运营成本。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_service_4"></span></p>
                                <p className="title">企业应用定制化</p>
                                <p className="brief">创顺科技为多家信托行业公司服务,有丰富的信托业服务经验。</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}