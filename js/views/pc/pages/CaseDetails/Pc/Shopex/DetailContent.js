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
                    <p className="name">ShopEx微商橱窗PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">ShopEx微商是根据企业在开始自身社会化的不同阶段，提供相应配套服务。帮助您的企业更快的开始社会化商业进程。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/shopex/shopex_01.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_02.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_03.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_04.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_05.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_06.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_07.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_08.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_09.png' />
                    <img src='/images/casedetail/pc/shopex/shopex_10.png' />
                </div>
            </div>
        )
    }
}