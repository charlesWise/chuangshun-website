import React, { Component } from 'react';

export default class ValidImg extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            ts: Date.now()
        }
    }

    _onClick() {
        this.setState({
            ts: Date.now()
        })
    }

    render() {
        return (
            <img onClick={this._onClick.bind(this)} src="yzm.png" className="code-img" />
        );
    }
}