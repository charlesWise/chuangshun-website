'use strict';
import React from 'react';

class Header extends React.Component{
    constructor(...props){
        super(...props);
    }
    componentDidMount() {

    }
    _renderHeader () {
        return <div className="header-container" className={`header-container ${!this.props.showDefaultHead && 'custom-header-container'}`}>
            <div className="header-content">
                <dl className="header">
                    <dt><span className={`${this.props.showDefaultHead ? 'icon_logo_one' : 'icon_logo_two'}`}></span></dt>
                    <dd>
                        <Nav index={this.props.index} />
                    </dd>
                </dl>
            </div>
            <div className="clearfix"></div>
        </div>
    }
    render(){
        return <div className="common-header-container">
            {this._renderHeader()}
        </div>
    }
}

export default Header;

class Nav extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            isShowSub: false,
            activeSub: 0,
            removeLine: 0
        }
    }
    _onMouseOver() {
        if(this.state.isShowSub) return;
        this.setState({isShowSub: true})
    }
    _onMouseOut() {
        if(!this.state.isShowSub) return;
        this.setState({isShowSub: false})
    }
    _onMouseEnterSub(activeSub) {
        this.setState({activeSub})
        if(activeSub == 2 || activeSub == 3 || activeSub == 4) {
            this.setState({removeLine: activeSub-1})
        }else {
            this.setState({removeLine: activeSub-1})
        }
    }
    render() {
        return (
            <ul>
                <li className={`${this.props.index == 0 && 'active'}`}>
                    <a href="index.html">首页</a>
                </li>
                <li className={`${this.props.index == 1 && 'active'}`}>
                    <a href="aboutUs.html">关于创顺</a>
                </li>
                <li className={`${this.props.index == 2 && 'active'}`}
                    onMouseOver={() => this._onMouseOver()}
                    onMouseOut={() => this._onMouseOut()}
                >
                    <a href="javscript:;">产品服务</a>
                    <ul className={`drop-down ${!this.state.isShowSub && 'dn'}`}>
                        <li className={`${this.state.activeSub == 1 && 'active-sub'}`}
                            onMouseEnter={() => this._onMouseEnterSub(1)}
                        ><a href="financial.html" className={`${this.state.removeLine == 1 && 'remove-b-line'}`}>金融服务分类</a></li>
                        <li className={`${this.state.activeSub == 2 && 'active-sub'}`}
                            onMouseEnter={() => this._onMouseEnterSub(2)}
                        ><a href="mobileInternet.html" className={`${this.state.removeLine == 2 && 'remove-b-line'}`}>移动互联网定制开发</a></li>
                        <li className={`${this.state.activeSub == 3 && 'active-sub'}`}
                            onMouseEnter={() => this._onMouseEnterSub(3)}
                        ><a href="mobileTest.html" className={`${this.state.removeLine == 3 && 'remove-b-line'}`}>移动测试</a></li>
                        <li className={`last-li ${this.state.activeSub == 4 && 'active-sub'}`}
                            onMouseEnter={() => this._onMouseEnterSub(4)}
                        ><a href="case.html">案例</a></li>
                    </ul>
                </li>
                <li className={`${this.props.index == 3 && 'active'}`}>
                    <a href="contactUs.html">联系我们</a>
                </li>
            </ul>
        )
    }
}