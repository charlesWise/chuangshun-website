'use strict';
import React from 'react';
import Wrapper from '../../../widget/Wrapper';
import Banner from './Banner';
import Nav from './Nav';
import UserExperienceDesign from './UserExperienceDesign';
import CommercialValue from './CommercialValue';
import PastCases from './PastCases';

class Index extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {
            showDefaultHead: false
        }
    }
    _onScroll(e){
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= 590){
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
            <UserExperienceDesign />
            <CommercialValue />
            <PastCases />
        </Wrapper>
    }
}

AppRegister.register(<Index />);