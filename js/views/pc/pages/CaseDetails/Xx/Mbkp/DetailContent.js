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
                    <p className="name">上海民防办科普教育馆</p>
                    <p className="title">项目背景</p>
                    <p className="brief">参与了设计上海市“防灾减灾日”主题宣传活动暨民防科普教育馆开馆仪式，该活动由上海市民防办主办，上海市副市长沈骏参加了该活动，活动亮点是上海民防科普教育馆馆标创意设计。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/mbkp/mbkp_01.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_02.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_03.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_04.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_05.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_06.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_07.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_08.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_09.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_10.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_11.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_12.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_13.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_14.png' />
                    <img src='/images/casedetail/xx/mbkp/mbkp_15.png' />
                </div>
            </div>
        )
    }
}