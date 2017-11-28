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
                        <li onClick={()=>this.props.onNavClick('category')}>
                            <p><span className="icon_category"></span></p>
                            <p className="title active">服务分类</p>
                        </li>
                        <li onClick={()=>this.props.onNavClick('range')}>
                            <p><span className="icon_range"></span></p>
                            <p className="title">服务范围</p>
                        </li>
                        <li onClick={()=>this.props.onNavClick('case')}>
                            <p><span className="icon_case"></span></p>
                            <p className="title">案例</p>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}