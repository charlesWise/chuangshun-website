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
                    <p className="name">百万大学生看科技浦东</p>
                    <p className="title">项目背景</p>
                    <p className="brief">浦东新区科委“科技世博，你我同行——万名大学生看科技浦东”活动，由上海市浦东新区科学技术协会、上海市浦东新区科学技术普及志愿者协会以及上海市浦东新区科普教育 基地联合会联合主办，浦东新区副区长张恩迪参与活动。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/sqbw/sqbw_01.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_02.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_03.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_04.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_05.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_06.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_07.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_08.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_09.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_10.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_11.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_12.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_13.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_14.png' />
                    <img src='/images/casedetail/xx/sqbw/sqbw_15.png' />
                </div>
            </div>
        )
    }
}