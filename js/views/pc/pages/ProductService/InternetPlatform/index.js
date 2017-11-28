'use strict';
import React from 'react';
import Wrapper from '../../../widget/Wrapper';
import Banner from './Banner';
import Nav from './Nav';
import BuildService from './BuildService';
import CustomerDemand from './CustomerDemand';
import AchieveValue from './AchieveValue';
import FullService from './FullService';

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
    render(){
        return <Wrapper 
                index={2} 
                onScroll= {e => this._onScroll(e)} 
                showDefaultHead={this.state.showDefaultHead}>
            <Banner />
            <Nav />
            <BuildService />
            <CustomerDemand />
            <AchieveValue />
            <FullService />
        </Wrapper>
    }
}

AppRegister.register(<Index />);