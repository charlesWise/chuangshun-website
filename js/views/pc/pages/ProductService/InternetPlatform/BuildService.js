'use strict';
import React from 'react';

export default class BuildService extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">平台搭建服务能力</p>
                        <p className="en">Platform to build service capabilities</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe p-width">
                        <p>创顺科技将针对不同行业需求，为企业量身打造互联网商业平台，让企业拥有互联网的力量。细分行业，深耕细作，互联网+，颠覆传统商业未来 。我们将帮助企业在每一个用户触点和终端，构筑围绕用户的营销互动能力。</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}