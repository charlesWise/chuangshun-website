'use strict';
import React from 'react';

export default class Nav extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="inter-nav-container">
                <div className="inter-nav-content">
                    <ul>
                        <li onClick={()=>this.props.onNavClick('summary')}>
                            <p><span className="icon_ie_summary"></span></p>
                            <p className="title active">服务概述</p>
                        </li>
                        <li onClick={()=>this.props.onNavClick('business')}>
                            <p><span className="icon_ie_business"></span></p>
                            <p className="title">商业价值</p>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}