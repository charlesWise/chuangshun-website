'use strict';
import React from 'react';
import Wrapper from '../../../../widget/Wrapper';
import CaseBox from '../../../../widget/CaseBox';
import DetailContent from './DetailContent';

const detailBanner = '../../../images/casedetail/app/banner/appTxs_banner.png';
class Index extends React.Component{
    constructor(...props){
        super(...props);
    }
    componentDidMount() {

    }
    render(){
        return <Wrapper index={2} showDefaultHead={true}>
            <CaseBox detailBanner={detailBanner}>
                <DetailContent />
            </CaseBox>
        </Wrapper>
    }
}

AppRegister.register(<Index />);