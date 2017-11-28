'use strict';
import React from 'react';

export default class ServiceArea extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">服务范围</p>
                        <p className="en">Service Area</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="service-area">
                        <div className="scope-left"><img src='/images/service/socpe.png' /></div>
                        <div className="scope-right">
                            <ul>
                                <li><p><span className="icon_programme_1"></span>金融测试解决方案</p></li>
                                <li><p><span className="icon_programme_2"></span>金融商业智能解决方案</p></li>
                                <li><p><span className="icon_programme_3"></span>金融服务解决方案</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}