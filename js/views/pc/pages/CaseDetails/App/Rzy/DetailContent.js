'use strict';
import React from 'react';

export default class DetailContent extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="detail-content">
                <div className="background-intro">
                    <p className="name">云融资APP设计</p>
                    {/* <p className="title">项目背景</p> */}
                    {/* <p className="brief"></p> */}
                </div>
                <div className="map">
                    <img src='/images/casedetail/app/rzy/rzy_01.png' />
                    <img src='/images/casedetail/app/rzy/rzy_02.png' />
                    <img src='/images/casedetail/app/rzy/rzy_03.png' />
                    <img src='/images/casedetail/app/rzy/rzy_04.png' />
                    <img src='/images/casedetail/app/rzy/rzy_05.png' />
                    <img src='/images/casedetail/app/rzy/rzy_06.png' />
                    <img src='/images/casedetail/app/rzy/rzy_07.png' />
                    <img src='/images/casedetail/app/rzy/rzy_08.png' />
                    <img src='/images/casedetail/app/rzy/rzy_09.png' />
                    <img src='/images/casedetail/app/rzy/rzy_10.png' />
                    <img src='/images/casedetail/app/rzy/rzy_11.png' />
                    <img src='/images/casedetail/app/rzy/rzy_12.png' />
                    <img src='/images/casedetail/app/rzy/rzy_13.png' />
                    <img src='/images/casedetail/app/rzy/rzy_14.png' />
                    <img src='/images/casedetail/app/rzy/rzy_15.png' />
                </div>
            </div>
        )
    }
}