'use strict';
import React from 'react';

class SideMeun extends React.Component{
    constructor(...props){
        super(...props);
    }
    componentDidMount() {

    }
    _returnToTop() {
        let speed = 500;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    }
    _onScroll(e){
        let $returnToTop = $('.return-to-top'),
            fadeModel = $.browser.msie && $.browser.version <= '8.0',
            scrollTop = $('body,html').scrollTop(),
            dist = 500;
        if (scrollTop > dist) {
            !fadeModel ? $returnToTop.fadeIn() : $returnToTop.show();
        } else {
            !fadeModel ? $returnToTop.fadeOut() : $returnToTop.hide();
        }
    }
    render(){
        return <div className="side-meun-container">
            <div className="side-meun">
                <ul>
                    <li><img src='/images/sidemeun/sina.png' /></li>
                    <li><img src='/images/sidemeun/qq.png' /></li>
                    <li className="wechat">
                        <img src='/images/sidemeun/wechat.png' />
                        <div className="hover-box">
                            <p className="title"><img src='/images/sidemeun/QR_code.png' /></p>
                            <p className="value">订阅号</p>
                            <span className="triangle"></span>
                        </div>
                    </li>
                    <li className="return-to-top" onClick={() => this._returnToTop()}>
                        <img src='/images/sidemeun/shrink.png' />
                    </li>
                    <li className="e-mail">
                        <img src='/images/sidemeun/e-mail.png' />
                        <div className="hover-box">
                            <p className="title">咨询邮箱：</p>
                            <p className="value">zixun@ichuang<br/>shun.com</p>
                            <span className="triangle"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default SideMeun;