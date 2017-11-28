'use strict';
import React from 'react';

export default class CaseShow extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            currentCases: this.props.currentCases || [],
            currentPage: this.props.currentPage || 1,
            stepPage: 9
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
    _renderItem(item, i) {
        return (
            <li key = {i} className={`${(i+1)%3 == 0 && 'last-li'}`}>
                <a href={item.detailHref}>
                    <p className="photo"><img src={item.imgUrl} /></p>
                    <p className="title">{item.name}</p>
                    <p className="name">{item.brief}</p>
                </a>
            </li>
        )
    }
    render() {
        if(this.state.currentCases.length == 0) return null;
        return (
            <div className="case-show-container">
                <div className="case-show-content">
                    <div className="cases-list">
                        <ul>
                            {
                                this.state.currentCases.slice((this.state.currentPage-1)*this.state.stepPage, this.state.currentPage*this.state.stepPage).map((item, i) => {
                                    return this._renderItem(item, i);
                                })
                            }
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}