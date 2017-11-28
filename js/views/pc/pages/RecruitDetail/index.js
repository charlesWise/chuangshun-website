'use strict';
import React from 'react';
import Wrapper from '../../widget/Wrapper';
import PositionDetail from './PositionDetail';
import JobData from '../../../../res/jobData';

class Index extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {
            currentJob: {}
        }
    }
    componentDidMount() {
        let type = +this._queryString('type');
        this.setState({currentJob: JobData[type]})
    }
    _queryString(wd) {
        let url=document.location.href,
            regString="[\\?&]"+wd+"=([^&]+)(&|\\b)",
            reg = new RegExp(regString),
            temp = "";
        if (reg.test(url)) {
            temp = decodeURIComponent(RegExp["$1"]);
            return temp;
        } else {
            return undefined;
        }
    }
    render(){
        if(Object.keys(this.state.currentJob).length == 0) return null;
        return <Wrapper index={1} showDefaultHead={true}>
            <PositionDetail currentJob={this.state.currentJob}/>
        </Wrapper>
    }
}

AppRegister.register(<Index />);