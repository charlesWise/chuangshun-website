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
                        <p className="ch">解决方案</p>
                        <p className="en">Solution</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="solution-case">
                        <ul>
                            <li>
                                <p><span className="icon_wireless"></span></p>
                                <p className="title">无线网络测试解决方案</p>
                            </li>
                            <li>
                                <p><span className="icon_mobile_test"></span></p>
                                <p className="title">移动测试解决方案</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}