'use strict';
import React from 'react';

export default class FinancialSolution extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="service-overview-container">
                <div className="service-overview-content">
                    <div className="service-title">
                        <p className="ch">金融服务解决方案</p>
                        <p className="en">Financial Services Solutions</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <div className="describe small-width">
                        <p>金融行业正在经历快速增长，而且随着外界环境的改变在持续不断的发生变化和变革，例如监管规范和风险管理的责任增大，业务规模的迅速扩张要求交易数据更大、更稳定，以面临国内外日益激烈的竞争。今天，金融机构需要重新审视当前的战略，重新评价系统和流程中的商业模式，以在后危机时代保持活力和竞争力。</p>
                        <p className="text">多家金融机构通过与创顺科技的合作，借助创顺科技多样化的专业服务，改善与自己客户之间的互动与交流，加强工作流程管理和商务智能，并简化传统应用以支持实时、灵活的业务流程，享受效率、收益和创新。同时，金融机构也受益于创顺科技深厚的金融专业知识，能更好的管理风险，提高产品的性能和快速实现业务转型。</p>
                        <p className="text">创顺科技拥有专业化技术团队，其骨干人员具有10年以上的金融大型关键系统的、咨询、开发与实施经验，金融服务解决方案在全国范围内为多家金融企业及机构，提供专业性技术性解决方案。</p> 
                    </div>
                    <div className="financial-solution"><img src='/images/service/financial_solution.png' /></div>
                    <div className="describe small-width p-bottom">
                        <p>创顺科技金融服务的领域主要有P2P网贷，银行业，保险业，基金证券业和信托业，依托于创顺科技的技术人才服务体系和应用软件测试服务体系，结合创顺科技的专业化人才优势，我们可以根据客户的需求，为资本市场客户提供专业化人员外包服务和银行专业系统的开发、测试和运维服务。</p>
                        <p className="text">在行业实践中，创顺科技注重自主知识产权产品的开发，投入大量资金研发具有核心技术的金融行业应用软件产品。同时创顺科技也非常注重先进理念、技术和产品的引进与吸收，逐步扩大与国内外先进企业的合作，在依靠自身的技术力量为金融客户量身打造解决方案的同时，也可以为客户提供优秀套装软件产品，并提供完善的套装软件实施和运维服务。</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}