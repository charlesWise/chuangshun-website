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
                    <p className="name">来查查PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">来查查是一款查看淘宝店铺销售数据的小应用。用户通过输入店铺名称或旺旺ID，快速了解店铺的基本信息，销售品类，运营情况等情报。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/lcc/lcc_01.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_02.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_03.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_04.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_05.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_06.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_07.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_08.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_09.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_10.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_11.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_12.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_13.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_14.png' />
                    <img src='/images/casedetail/pc/lcc/lcc_15.png' />
                </div>
            </div>
        )
    }
}