'use strict';
import React from 'react';
import Wrapper from '../../widget/Wrapper';
import Statement from './Statement';

class Index extends React.Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <Wrapper index={1} showDefaultHead={true}>
            <Statement />
        </Wrapper>
    }
}

AppRegister.register(<Index />);