'use strict';
import React from 'react';

class Footer extends React.Component{
    constructor(...props){
        super(...props);
    }
    componentDidMount() {

    }
    render(){
        return <div className="common-footer-container">
            <div className="footer-content">
                <div className="left">
                    <ul>
                        <li><a href="index.html">首页</a></li>
                        <li><a href="aboutUs.html">关于创顺</a></li>
                        <li><a href="case.html">产品案例</a></li>
                        <li><a href="contactUs.html">联系我们</a></li>
                        <li className="last-li"><a href="legalStatement.html">法律声明</a></li>
                    </ul>
                    <div className="record">
                        <p>软件企业编号：沪R-2016-8888 高新技术企业编号：GR201600001668</p>
                        <p>增值电信业务经营许可证：沪B2-20160057 沪ICP备：05008888号</p>
                        <p>© 2016-2026 LianQin,Inc.All rights reserved</p>
                    </div>
                </div>
                <div className="center">
                    <p className="service"><span className="icon_c_service"></span></p>
                    <p className="time">( 9:00-21:00 )</p>
                    <p className="tel">021-51688048</p>
                </div>
                <div className="right">
                    <p><span className="icon_QR_code"></span></p>
                    <p className="about">关于公众号</p>
                </div>
            </div>
        </div>
    }
}

export default Footer;