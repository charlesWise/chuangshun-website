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
                    <p className="name">上海轻工名品展示展销会</p>
                    <p className="title">项目背景</p>
                    <p className="brief">参与了上海轻工新品名品展示展销会，该活动由上海市经济团体联合会/上海市轻工业协会/上海市浙江商会联合主办，上海市副市长艾宝俊,原上海市人大常委主任陈铁迪参加了该活动，活动亮点是展览会务片、设计搭建展台。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/qgmp/qgmp_01.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_02.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_03.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_04.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_05.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_06.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_07.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_08.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_09.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_10.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_11.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_12.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_13.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_14.png' />
                    <img src='/images/casedetail/xx/qgmp/qgmp_15.png' />
                </div>
            </div>
        )
    }
}