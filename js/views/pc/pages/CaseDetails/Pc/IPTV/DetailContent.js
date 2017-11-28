'use strict';
import React from 'react';

export default class DetailContent extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="detail-content">
                <div className="background-intro">
                    <p className="name">IPTV PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">为中国电信IPTV界面以及机顶盒界面进行设计方案，为三屏互动奠定基础，给亿万用户带来良好的使用体验。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/iptv/iptv_01.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_02.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_03.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_04.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_05.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_06.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_07.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_08.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_09.png' />
                    <img src='/images/casedetail/pc/iptv/iptv_10.png' />
                </div>
            </div>
        )
    }
}