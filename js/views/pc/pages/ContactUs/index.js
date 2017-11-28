'use strict';
import React from 'react';
import Wrapper from '../../widget/Wrapper';
import Banner from './Banner';
import AddressInfo from  './AddressInfo';
import Recruitment from './Recruitment';

class Index extends React.Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <Wrapper index={3} showDefaultHead={true}>
            <Banner />            
            <AddressInfo />
            <Recruitment />
        </Wrapper>
    }
}

AppRegister.register(<Index />);