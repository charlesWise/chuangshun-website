import React, { Component } from 'react';

export default class ValidInput extends Component {
    constructor(...props) {
        super(...props);
        this.state = {}
    }

    render() { 
        return (
            <li className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type||'text'} name={this.props.name} placeholder={this.props.placeholder} />
                {
                    this.props.children
                }
                {
                    // 正确的勾勾
                    // <i className="tips-check"></i>
                }
                {
                    //校验的错误消息
                    //<p className="tips-inner"><i className="tips02"></i>8-20个字符，请使用字母加数字的组合密码</p>
                }
            </li>
        )
    }
}
