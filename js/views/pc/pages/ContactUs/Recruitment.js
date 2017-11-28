'use strict';
import React from 'react';

export default class Recruitment extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="recruitment-container">
                <div className="recruitment-content">
                    <div className="recruit-title">
                        <p className="ch">招贤纳士</p>
                        <p className="en">Recruitment</p>
                    </div>
                    <div className="environment">
                        <ul>
                            <li className="photo"><img src='/images/contactus/environment.png' /></li>
                            <li className="work">
                                <p className="title">WORKING</p>
                                <p className="text">欢迎加入创顺科技,在创顺,我们推崇“简单、高效”的工作方式，在快乐、激情的工作环境中分享和成长，在创顺不只是在工作，更是和一群志趣相投的人一起生活。</p>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                    <div className="job">
                        <ul>
                            <li>
                                <p className="post"><span className="icon_job_1"></span>研发部</p>
                                <p className="post-case"><a className="first">配音员</a><a>测试</a></p>
                                <p className="post-case"><a>前端开发</a></p>
                            </li>
                            <li>
                                <p className="post"><span className="icon_job_2"></span>运维部</p>
                                <p className="post-case"><a className="first">服务</a><a>数据</a></p>
                                <p className="post-case"><a>安全</a></p>
                            </li>
                            <li>
                                <p className="post"><span className="icon_job_3"></span>体验中心</p>
                                <p className="post-case"><a>产品</a></p>
                                <p className="post-case"><a href="recruitDetail.html?type=0">UED</a></p>
                            </li>
                            <li className="last-li">
                                <p className="post"><span className="icon_job_4"></span>技术架构</p>
                                <p className="post-case"><a>架构</a></p>
                                <p className="post-case"><a>新技术研究</a></p>
                            </li>
                            <li>
                                <p className="post"><span className="icon_job_5"></span>商务部</p>
                                <p className="post-case"><a className="first">业务组</a><a>评审组</a></p>
                                <p className="post-case"><a>品牌公关</a></p>
                            </li>
                            <li>
                                <p className="post"><span className="icon_job_6"></span>综管部</p>
                                <p className="post-case"><a className="first">人力资源</a><a>行政</a></p>
                                <p className="post-case"><a>法务</a></p>
                            </li>
                            <li>
                                <p className="post"><span className="icon_job_7"></span>财务部</p>
                                <p className="post-case"><a>财务</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}