'use strict';
import React from 'react';

export default class DevelopHistory extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="develop-history-container">
                <div className="develop-history-content">
                    <div className="history-title">
                        <p className="ch">发展历程</p>
                        <p className="en">Development history</p>
                    </div>
                    <div className="time-axis">
                        <div className="virtual-point-line"></div>
                        <ul>
                            <li className="circle-dot"><p><span className="yellow big"></span></p></li>
                            <li className="year"><p className="yellow big">2017</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="yellow"></span></p></li>
                            <li className="time"><p>2017.10.18</p></li>
                            <li className="explain"><p>正式更名“创顺科技”</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="yellow"></span></p></li>
                            <li className="time"><p>2017.09.17</p></li>
                            <li className="explain"><p>旗下产品“马贷来了”上线</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="yellow"></span></p></li>
                            <li className="time"><p>2017.06.27</p></li>
                            <li className="explain"><p>旗下产品“长富贷”上线</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="blue big"></span></p></li>
                            <li className="year"><p className="blue big">2016</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="blue"></span></p></li>
                            <li className="time"><p>2016.11.04</p></li>
                            <li className="explain"><p>旗下产品“长富云”上线</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="blue"></span></p></li>
                            <li className="time"><p>2016.10.28</p></li>
                            <li className="explain"><p>旗下产品“投保家”上线</p></li>
                        </ul>
                        <ul>
                            <li className="circle-dot"><p><span className="blue"></span></p></li>
                            <li className="time"><p>2016.01.08</p></li>
                            <li className="explain"><p>旗下产品“投融家”上线</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}