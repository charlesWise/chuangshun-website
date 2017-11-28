'use strict';
import React from 'react';

export default class PastCases extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">过往案例</p>
                        <p className="en">Past case</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="cases-list">
                        <ul>
                            <li>
                                <a href="xhh.html">
                                    <p className="photo"><img src='/images/service/cases/xhh.png' /></p>
                                    <p className="title">鑫合汇</p>
                                    <p className="name">互联网金融理财</p>
                                </a>
                            </li>
                            <li>
                                <a href="pjj.html">
                                    <p className="photo"><img src='/images/service/cases/pjj.png' /></p>
                                    <p className="title">普金吉</p>
                                    <p className="name">互联网金融服务平台</p>
                                </a>
                            </li>
                            <li className="last-li">
                                <a href="spzl.html">
                                    <p className="photo"><img src='/images/service/cases/zxlh.png' /></p>
                                    <p className="title">商品助理</p>
                                    <p className="name">互联网电商平台</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="see-more">
                        <a href="case.html"><span className="icon_s_down_arrow"></span> 点击加载更多</a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}