'use strict';
import React from 'react';
import Wrapper from '../../widget/Wrapper';
import CompanyIntro from './CompanyIntro';
import ManageTeam from './ManageTeam';
import DevelopHistory from './DevelopHistory';
import NewsCenter from './NewsCenter';

class Index extends React.Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <Wrapper index={1} showDefaultHead={true}>
            <CompanyIntro />
            <ManageTeam />
            <DevelopHistory />
            <NewsCenter />
        </Wrapper>
    }
}

AppRegister.register(<Index />);