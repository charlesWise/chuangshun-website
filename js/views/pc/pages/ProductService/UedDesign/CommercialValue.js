'use strict';
import React from 'react';

export default class CommercialValue extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">商业价值</p>
                        <p className="en">让设计变得简单</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe">
                        <p>创顺科技UED服务专注于互联网视觉设计外包，我们协助企业根据其不同的商业发展目标与需求，定制最佳的视觉项目外包解决方案和人才外包解决方案。让客户在设计领域变得更加专业，让客户专注于自身的核心业务，提升企业核心竞争力，减少人力资源管理成本，稳定核心团队。</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}