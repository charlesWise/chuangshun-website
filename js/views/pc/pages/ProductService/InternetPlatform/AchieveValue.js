'use strict';
import React from 'react';

export default class AchieveValue extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">创顺科技助您成就商业价值</p>
                        <p className="en">省钱/省时/省力</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="financial-solution"><img src='/images/service/achieve_value.png' /></div>
                </div>
            </div>
        )
    }
}