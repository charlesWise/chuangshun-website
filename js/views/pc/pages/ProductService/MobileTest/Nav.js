'use strict';
import React from 'react';

export default class Nav extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="nav-container">
                <div className="nav-content">
                    <ul>
                        <li onClick={()=>this.props.onNavClick('summary')}>
                            <p><span className="icon_summary"></span></p>
                            <p className="title active">服务概述</p>
                        </li>
                        <li onClick={()=>this.props.onNavClick('business')}>
                            <p><span className="icon_business"></span></p>
                            <p className="title">商业价值</p>
                        </li>
                        <li onClick={()=>this.props.onNavClick('solution')}>
                            <p><span className="icon_solution_plan"></span></p>
                            <p className="title">解决方案</p>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}