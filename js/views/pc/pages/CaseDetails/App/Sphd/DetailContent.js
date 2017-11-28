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
                    <p className="name">三屏互动APP设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">中国电信视讯运营中心“天翼视讯”客户端产品也同时向中国电信全国用户提供服务。这标志着中国电信基于电视屏、电脑屏、手机屏的三屏内容共享和互动的融合视频产品正式亮相。</p>
                    <p className="brief">“三屏互动”是融合化的产物，是三网融合发展的外在体现，它的出现将为运营商创造更加广阔的市场空间，成为运营商竞先角逐的下一个蓝海。</p>
                    <p className="brief">“三屏互动”改变了什么</p>
                    <p className="brief">“三屏互动”的意义并不仅限于手机屏、电脑屏、电视屏三个屏幕之间内容的互联互通，更重要的是它将颠覆传统，给用户体验、产业链发展乃至信息社会的进步带来巨大的冲击。</p>
                    <p className="brief">一是改变了用户体验。“三屏互动”是3G和有线宽带的融合产物，通过电视、电脑、手机就可实现三屏同看、精彩推荐、视频分享、三屏监控、三屏通信等强大的三屏互动功能，用户可以随时随地不间断享受宽频通信带来的超酷体验互动阅读实现了电视屏和手机屏的共享互动，用户只要在iTV上订购了阅读产品，即可通过手机进行阅读，极大地改善了用户体验。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/sphd/sphd_01.png' />
                    <img src='/images/casedetail/app/sphd/sphd_02.png' />
                    <img src='/images/casedetail/app/sphd/sphd_03.png' />
                    <img src='/images/casedetail/app/sphd/sphd_04.png' />
                    <img src='/images/casedetail/app/sphd/sphd_05.png' />
                    <img src='/images/casedetail/app/sphd/sphd_06.png' />
                    <img src='/images/casedetail/app/sphd/sphd_07.png' />
                    <img src='/images/casedetail/app/sphd/sphd_08.png' />
                    <img src='/images/casedetail/app/sphd/sphd_09.png' />
                    <img src='/images/casedetail/app/sphd/sphd_10.png' />
                    <img src='/images/casedetail/app/sphd/sphd_11.png' />
                    <img src='/images/casedetail/app/sphd/sphd_12.png' />
                    <img src='/images/casedetail/app/sphd/sphd_13.png' />
                    <img src='/images/casedetail/app/sphd/sphd_14.png' />
                    <img src='/images/casedetail/app/sphd/sphd_15.png' />
                </div>
            </div>
        )
    }
}