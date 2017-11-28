'use strict';
import React from 'react';

export default class Categories extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">服务分类</p>
                        <p className="en">Service Categories</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="ie-service-case">
                        <ul>
                            <li>
                                <p className="icon"><span className="icon_banking"></span></p>
                                <p className="title">银行业</p>
                                <p className="brief">创顺科技积累了丰富的金融实践经验,提供了面向多家银行的系统规划和咨询、数据分析以及系统运行的维护等服务。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_p2p"></span></p>
                                <p className="title">P2P网贷</p>
                                <p className="brief">创顺科技有多年系统开发经验, 积累了丰富的金融行业技术研发经验，在金融类应用服务方面有领先技术优势。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_insure"></span></p>
                                <p className="title">保险</p>
                                <p className="brief">创顺科技提供针对风险控制与电子商务、企业资源管理等领域的服务和解决方案，降低运营成本。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_industry"></span></p>
                                <p className="title">信托业</p>
                                <p className="brief">创顺科技为多家信托行业公司服务,积累了丰富的信托业服务经验。</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}