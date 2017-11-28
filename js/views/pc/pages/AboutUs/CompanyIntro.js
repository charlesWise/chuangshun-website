'use strict';
import React from 'react';

export default class CompanyIntro extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="company-intro-container">
                <div className="company-intro-content">
                    <div className="company-title">
                        <p className="ch">公司介绍</p>
                        <p className="en">Company Introduction</p>
                    </div>
                    <div className="company-brief">
                        <p>上海创顺网络科技有限公司（简称“创顺科技”）是一家面向全国的IT咨询、解决方案与服务提供商。公司成立于2016年，注册资金1000万元，总部位于中国上海，创顺科技依托自身强大的研发与创新能力，云计算和移动互联等新兴技术，为客户提供丰富的解决方案及产品。</p>
                        <p>创顺科技遵循严格的质量和安全标准，实施严密的安全措施，拥有成熟可靠的管理和开发流程，并获得合作伙伴的认可。公司凭借多年的行业积累、深厚的行业专长和成熟的行业实践、国际化的精英团队和完善的人才管理、完备的全球化交付与服务网络、以及无处不在的创新精神与实践，助力全球客户尽享科技革新所带来的卓越运营，为客户持续创造关键价值。</p>
                    </div>
                    <div className="intro-case">
                        <ul>
                            <li className="one-li">
                                <p className="icon"><span className="icon_desire"></span></p>
                                <p className="title">愿景</p>
                                <p className="brief">公司的核心团队均来自国内知名互联网及世界500强企业。我们始终坚持以用户体验和技术服务为核心的理念，以打造国内顶尖的一站式技术服务公司为目标。</p>
                                <p className="brief">不断提升，不断创新，致力于让每一位成员因公司而骄傲，让每一位客户因服务而满意。</p>
                            </li>
                            <li className="two-li">
                                <p className="icon"><span className="icon_mission"></span></p>
                                <p className="title">使命</p>
                                <p className="brief">为企业提供互联网行业综合性解决方案服务商，产品战略规划、产品交互设计、产品视觉设计、技术前端实现及各行各业为其实现互联网+技术解决方案的领先者。</p>
                            </li>
                            <li className="three-li">
                                <p className="icon"><span className="icon_worth"></span></p>
                                <p className="title">愿景</p>
                                <p className="brief">诚实守信，客户为本，创新开拓，团队合作，追求卓越。</p>
                                <p className="brief">以这些核心价值观为标准，力求为客户带来最优质的、新颖的解决方案和最舒适的合作体验，让用户和我们在合作中达到共赢和成长。</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}