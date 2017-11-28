'use strict';
import React from 'react';

export default class FullService extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">提供您所需要的完整服务</p>
                    </div>
                    <div className="full-service">
                        <ul>
                            <li>
                                <p className="icon"><span className="icon_prototype"></span></p>
                                <p className="title">需求梳理&原型设计</p>
                                <p className="brief">专业产品经理帮助您梳理项目需求，编写需求文档并制作产品原型。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_ui_design"></span></p>
                                <p className="title">UI设计</p>
                                <p className="brief">不同风格，不同专长的UI设计师为您设计产品界面，多套风格供您选择。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_develop"></span></p>
                                <p className="title">程序开发</p>
                                <p className="brief">专业认证的开发者为您提供各种平台开发服务，专业项目监理管控研发流程，保障交付。</p>
                            </li>
                            <li>
                                <p className="icon"><span className="icon_testing"></span></p>
                                <p className="title">产品测试</p>
                                <p className="brief">专业测试工具，专属测试经理以及众包测试服务，给您的项目全面体检并出具专业报告。</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}