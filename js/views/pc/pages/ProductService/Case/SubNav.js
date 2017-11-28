'use strict';
import React from 'react';

export default class SubNav extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            navIndex: 0
        }
    }
    _clickNav(navIndex) {
        this.setState({navIndex});
        this.props.parentCases && this.props.parentCases(navIndex);
        this.props.parentCurrentPage && this.props.parentCurrentPage(1);
    }
    render() {
        return (
            <div className="case-nav-container">
                <div className="case-nav-content">
                    <div className="nav">
                        <ul>
                            <li onClick={() => {this._clickNav(0)}}
                                className={`${this.state.navIndex == 0 && 'active'}`}><a href="javascript:;">全部</a></li>
                            <li onClick={() => {this._clickNav(1)}}
                                className={`${this.state.navIndex == 1 && 'active'}`}><a href="javascript:;">PC平台</a></li>
                            <li onClick={() => {this._clickNav(2)}}
                                className={`${this.state.navIndex == 2 && 'active'}`}><a href="javascript:;">移动APP</a></li>
                            <li onClick={() => {this._clickNav(3)}}
                                className={`${this.state.navIndex == 3 && 'active'}`}><a href="javascript:;">线下活动</a></li>
                            <li onClick={() => {this._clickNav(4)}}
                                className={`${this.state.navIndex == 4 && 'active'}`}><a href="javascript:;">活动专题</a></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}