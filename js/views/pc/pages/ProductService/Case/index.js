'use strict';
import React from 'react';
import Wrapper from '../../../widget/Wrapper';
import SubNav from './SubNav';
import CaseShow from './CaseShow';
import Pages from './Pages';
import CaseData from '../../../../../res/caseData';

class Index extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {
            currentCases: [].concat(CaseData.PC).concat(CaseData.APP).concat(CaseData.XX).concat(CaseData.ZT),
            currentPage: 1
        }
    }
    _parentCases(navIndex) {
        // 0 全部 1 PC 2 APP 3 线下 4 专题活动
        switch(navIndex){
            case 0:
                this.setState({
                    currentCases: [].concat(CaseData.PC).concat(CaseData.APP).concat(CaseData.XX).concat(CaseData.ZT)
                })
            break;
            case 1:
                this.setState({
                    currentCases: CaseData.PC
                })
            break;
            case 2:
                this.setState({
                    currentCases: CaseData.APP
                })
            break;
            case 3:
                this.setState({
                    currentCases: CaseData.XX
                })
            break;
            case 4:
                this.setState({
                    currentCases: CaseData.ZT
                })
            break;
        }
    }
    _parentCurrentPage(currentPage) {
        this.setState({currentPage})
    }
    render(){
        return <Wrapper index={2} showDefaultHead={true}>
            <SubNav 
                parentCases = {(navIndex) => this._parentCases(navIndex)}
                parentCurrentPage = {(currentPage) => this._parentCurrentPage(currentPage)}
                />
            <CaseShow 
                currentCases={this.state.currentCases} 
                currentPage={this.state.currentPage}/>
            <Pages 
                currentCases={this.state.currentCases}
                currentPage={this.state.currentPage}
                parentCurrentPage = {(currentPage) => this._parentCurrentPage(currentPage)}
                />
        </Wrapper>
    }
}

AppRegister.register(<Index />);