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
                        <p className="ch">商业价值</p>
                        <p className="en">commercial value</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe">
                        <p>创顺科技拥有优化的、可靠的、灵活的最佳移动解决方案，为客户量身定制移动咨询服务，确保满足每位客户的具体需求。与创顺科技合作，可以让您的业务运行更加智能和灵活，以应对各种挑战并最大限度的降低风险。</p>
                    </div>
                </div>
            </div>
        )
    }
}