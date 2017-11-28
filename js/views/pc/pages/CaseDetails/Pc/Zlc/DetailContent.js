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
                    <p className="name">最理财PC端设计</p>
                    <p className="title">项目背景</p>
                    <p className="brief">最理财”隶属于临安力合互联金融科技有限公司，坐落于有“最美乡村”之称的杭州临安市。当地民风淳朴，物产丰富，其中以山核桃、茶叶、竹笋及竹制品等特产享誉全球。在政府的支持下，建成“三农”互联网专业平台。我们立志将普惠金融反哺“三农”。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/pc/zlc/zlc_01.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_02.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_03.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_04.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_05.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_06.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_07.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_08.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_09.png' />
                    <img src='/images/casedetail/pc/zlc/zlc_10.png' />
                </div>
            </div>
        )
    }
}