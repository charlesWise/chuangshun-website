'use strict';
import React from 'react';

export default class ChooseUs extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="choose-us-content">
                <div className="choose-us">
                    <div className="choose-title">
                        <p className="title"><span>WHO</span> CHOOSE US</p>
                        <p className="sub-title">谁选择了我们</p>
                        <p className="decorate"><span></span><i></i><span></span></p>
                    </div>
                    <SlideCase />
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}

const slideImgs = [
    {imgUrl: '/images/home/case/case_1.png'},
    {imgUrl: '/images/home/case/case_2.png'},
    {imgUrl: '/images/home/case/case_3.png'},
    {imgUrl: '/images/home/case/case_4.png'},
    {imgUrl: '/images/home/case/case_5.png'},
    {imgUrl: '/images/home/case/case_6.png'},
    {imgUrl: '/images/home/case/case_7.png'},
    {imgUrl: '/images/home/case/case_8.png'}
];

class SlideCase extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            slideStep:0
        }
    }

    onButtonClick(type){
        if(type == "prev"){
            this.setState({slideStep:0});
        } else if(type == "next"){
            this.setState({slideStep:4});
        }
    }

    render() {
        return (
            <div className="slide-case">
                <ul>
                    {
                        slideImgs.map((item, i) => {
                            if(i >= this.state.slideStep){
                                return (
                                    <li key={i}><img src={item.imgUrl} /></li>
                                )
                            }
                        })
                    }
                </ul>
                <div className="control">
                    <span className={this.state.slideStep == 0?"icon_prev":"icon_prev_act"} onClick={()=>this.onButtonClick('prev')}></span>
                    <span className={this.state.slideStep == 4?"icon_next":"icon_next_act"} onClick={()=>this.onButtonClick('next')}></span>
                </div>
            </div>
        )
    }
}