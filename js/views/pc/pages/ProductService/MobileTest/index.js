'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import Wrapper from '../../../widget/Wrapper';
import Banner from './Banner';
import Nav from './Nav';
import ServiceOverview from './ServiceOverview';
import Commercial from './Commercial';
import SolutionPlan from './SolutionPlan';

class Index extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {
            showDefaultHead: false
        }
    }
    _onScroll(e){
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= 588){
            if(this.state.showDefaultHead) return;
            this.setState({showDefaultHead: true})
        }else {
            if(!this.state.showDefaultHead) return;
            this.setState({showDefaultHead: false})
        }
    }

    //锚点跳转
    onNavClick(type){
        window.scrollTo(0,ReactDom.findDOMNode(this.refs[type]).offsetTop-80);
    }

    render(){
        return <Wrapper 
                index={2} 
                onScroll= {e => this._onScroll(e)} 
                showDefaultHead={this.state.showDefaultHead}>
            <Banner />
            <Nav onNavClick={(type)=>this.onNavClick(type)}/>
            <ServiceOverview ref="summary"/>
            <Commercial ref="business"/>
            <SolutionPlan ref="solution"/>
        </Wrapper>
    }
}

AppRegister.register(<Index />);