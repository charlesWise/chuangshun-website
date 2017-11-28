'use strict';
import React from 'react';

export default class CustomerDemand extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">强强联合 快速准确响应客户需求</p>
                        <p className="en">服务行业类型</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe p-width">
                        <p>创顺科技能够持续提升技术水平，不断创新研发成果，离不开合作伙伴的鼎立支持。自创顺成立以来，我们与众多行业领先的技术提供商、科研机构建立了密切往来、互联互通的伙伴关系，从科研项目到市场开拓，深入合作、优势互补、强强联合。这使我们不仅能够更加快速、准确地响应客户需求，为客户制定个性化的解决方案，而且大大提升了科研效率和活力，成为公司不断创新、持续发展的重要保障。</p>
                    </div>
                    <div className="demand-case">
                        <ul>
                            <li>
                                <p className="icon"><span className="icon_ds"></span></p>
                                <p>电商</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_dc"></span></p>
                                <p>地产</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_mt"></span></p>
                                <p>媒体</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_ly"></span></p>
                                <p>旅游</p>
                            </li>

                            <li>
                                <p className="icon"><span className="icon_zc"></span></p>
                                <p>制造</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_ls"></span></p>
                                <p>零售</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_yl"></span></p>
                                <p>医疗</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_ny"></span></p>
                                <p>能源</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}