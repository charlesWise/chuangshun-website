'use strict';
import React from 'react';

export default class Pages extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            currentCases: this.props.currentCases || [],
            currentPage: this.props.currentPage || 1
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps){
		if(nextProps.currentCases != this.props.currentCases){
			this.state.currentCases = nextProps.currentCases;
        }
        if(nextProps.currentPage != this.props.currentPage){
			this.state.currentPage = nextProps.currentPage;
        }
	}
    _getPages() {
        let pagesNum = 9;
        if(this.state.currentCases && this.state.currentCases.length) {
          return Math.ceil(this.state.currentCases.length/pagesNum);
        }
    }
    _skipPage(currentPage) {
        if(currentPage > this._getPages()) return;
        this.setState({currentPage});
        this.props.parentCurrentPage && this.props.parentCurrentPage(currentPage);
    }
    _renderPages() {
        let htmlTemp = [], len = this._getPages();
        for(let i = 0; i < len; i++) {
            htmlTemp.push(<a href="javascript:;" 
                key={i}
                onClick={() => this._skipPage(i+1)}
                className={`${this.state.currentPage == i+1 && 'active'}`}>{i+1}</a>)
        }
        return htmlTemp;
    }
    render() {
        return (
            <div className="pages-container">
                <div className="pages-content">
                    <div className="pages-list">
                        {this._renderPages()}
                        <a  href="javascript:;"
                            onClick={() => this._skipPage(this.state.currentPage+1)}
                        >></a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}