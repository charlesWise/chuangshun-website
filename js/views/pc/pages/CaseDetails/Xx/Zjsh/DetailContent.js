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
                    <p className="name">上海市浙江商会年会</p>
                    <p className="title">项目背景</p>
                    <p className="brief">参与了2010上海市浙江商会年会暨“后危机时代”中国经济发展趋势与民营企业应对策略高峰论坛及晚宴，该活动由浙江省驻沪办、上海市浙江商会主办，上海市委常委、统战部部长杨晓渡,浦东新区党委书记徐麟,浙江省人民政府副秘书长、省驻沪办主任潘忠弟以及马云、郭广昌、郑永刚、周成建、等企业家参加了该活动，活动亮点是邀请著名主持人叶蓉、陈辰；邀请知名艺人黄奕作为晚宴慈善拍卖嘉宾；水墨动画打造晚宴主视觉。</p>
                </div>
                <div className="map">
                    <img src='/images/casedetail/xx/zjsh/zjsh_01.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_02.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_03.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_04.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_05.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_06.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_07.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_08.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_09.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_10.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_11.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_12.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_13.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_14.png' />
                    <img src='/images/casedetail/xx/zjsh/zjsh_15.png' />
                </div>
            </div>
        )
    }
}