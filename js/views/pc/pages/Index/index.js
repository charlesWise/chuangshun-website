'use strict';
import React from 'react';
import Wrapper from '../../widget/Wrapper';
import Banner from './Banner';
import ProjectService from './ProjectService';
import ChooseUs from './ChooseUs';

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
                index={0} 
                onScroll= {e => this._onScroll(e)} 
                showDefaultHead={this.state.showDefaultHead}>
            <Banner />
            <ProjectService />
            <ChooseUs />
        </Wrapper>
    }
}

AppRegister.register(<Index />);