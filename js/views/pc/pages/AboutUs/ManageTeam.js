'use strict';
import React from 'react';

export default class ManageTeam extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="manage-team-container">
                <div className="manage-team-content">
                    <div className="manage-title">
                        <p className="ch">管理团队</p>
                        <p className="en">Management team</p>
                    </div>
                    <div className="staff">
                        <dl>
                            <dt>
                                <p className="name">刘俊</p>
                                <p className="professional">CEO</p>
                                <p className="intro">毕业于西南大学，是国内知名P2B平台(全国前五)初创团队核心成员，投融家技术总监，长富云CTO，拥有多年的互联网从业经验以及团队管理经验。先后从事过社交、分类信息、电商类、互联网金融等多个领域的互联网行业的工作，特别在技术开发，技术管理，战略布局上经验丰富，能力突出。在交易类系统的稳定性、高并发上有自身独特的见解。负责过上千亿交易P2B平台整体技术架构。</p>
                                <p className="intro">2017年初创办创顺科技并担任首席执行官，主要负责公司整体的运营，战略决策，品宣，研发创新，项目孵化。</p>
                            </dt>
                            <dd><img src='/images/aboutus/ceo.png' /></dd>
                        </dl>
                    </div>
                    <div className="clearfix"></div>
                    <div className="staff">
                        <dl>
                            <dd className="c-left"><img src='/images/aboutus/cmo.png' /></dd>
                            <dt>
                                <p className="name xyc">徐啸春</p>
                                <p className="professional">副总裁兼CMO</p>
                                <p className="intro">毕业于华东理工大学，拥有近10年互联网从业管理经验，具有敏锐的商业嗅觉和突出的战略策略掌控能力，是国内知名P2B平台鑫合汇(全国最大)核心创始成员，曾任职于中国电信、Wind资讯、ShopEx等知名互联网企业，历任中新力合UPG用户体验中心负责人、资邦集团-首席体验官、高级战略研究员、中民国资控股副总裁、侬享时代CEO、联亲科技董事长兼CEO。</p>
                                <p className="intro">拥有多年的用户体验经验及团队协作管理经验，负责过淘宝无线端第三方APP、新浪微博应用、中国天翼视讯APP、wind资讯等金融软件与多个千万级应用项目，及市政、上市公司等项目。</p>
                                <p className="intro">2017年联合创办创顺科技并担任副总裁兼CMO，主要负责公司整体产品战略规划及定位、外部业务拓展及品牌公关。</p>
                            </dt>
                        </dl>
                    </div>
                    <div className="clearfix"></div>
                    <div className="staff last-staff">
                        <dl>
                            <dt>
                                <p className="name">曾祥瑚</p>
                                <p className="professional">副总裁兼COO</p>
                                <p className="intro">毕业江西师范大学软件工程专业，先后服务于大型电商、互联网金融及垂直社交行业，在互联网行业有7年以上的从业经验，长期担任技术主管、项目经理等重要角色，实战于技术研发、团队管理、项目管理等领域，拥有丰富的大型项目管理经验，对互联网关键技术、团队管理、项目管理及行为模式有自己的独到见解。</p>
                                <p className="intro">2016年联合创办联亲科技，担任副总裁，主要负责技术团队管理，主持整体技术研发、技术体系建设及项目把控等工作。</p>
                            </dt>
                            <dd><img src='/images/aboutus/coo.png' /></dd>
                        </dl>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}