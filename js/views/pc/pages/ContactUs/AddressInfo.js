'use strict';
import React from 'react';

export default class AddressInfo extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="address-info-container">
                <div className="address-info-content">
                    <div className="info">
                        <div className="address-tel">
                            <p className="title">公司地址及电话</p>
                            <p className="addr">地址：上海市徐汇区桂平路555号桂平园46号栋206-207室</p>
                            <p className="tel">电话：021-51688048</p>
                            <p className="contact">联系人：俞小姐</p>
                            <p className="email">邮箱：<span>yuxiaowen@lianqin360.com</span></p>
                        </div>
                        <div className="c-line"></div>
                        <div className="link">
                            <p className="title">与我们链接</p>
                            <p className="photo"><img src='/images/contactus/cs_QR_code.png' /></p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="map"><img src='/images/contactus/map.png' /></div>
                </div>
            </div>
        )
    }
}