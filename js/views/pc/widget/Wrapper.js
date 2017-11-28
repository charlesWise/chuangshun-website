'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import SideMeun from './SideMeun';

class Wrapper extends React.Component{
    constructor(...props){
        super(...props);
        this._onScrollHandler = (e)=>{
            this._onScroll(e)
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this._onScrollHandler, false);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScrollHandler, false);
    }
    _onScroll(e){
        this.props.onScroll && this.props.onScroll(e);
        this.sideMeun && this.sideMeun._onScroll && this.sideMeun._onScroll(e);
    }
    render(){
        let {index, showDefaultHead, ...args}= { ...this.props};
        return (
            <div className="wrapper" ref={v => this.wrapper = v}>
                <Header index={index} showDefaultHead={showDefaultHead}/>
                <div className="contentArea" {...args}>
                    {this.props.children}
                    <Footer />
                    <SideMeun ref={v => this.sideMeun = v} />
                </div>
            </div>
        )
    }
}
export default Wrapper;