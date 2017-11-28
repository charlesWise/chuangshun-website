'use strict';
import React from 'react';

export default class PositionDetail extends React.Component {
    constructor(...props){
        super(...props);
    }
    componentDidMount() {

    }
    render() {
        let currentJob = this.props.currentJob || {};
        return (
            <div className="position-detail-container">
                <div className="position-detail-content">
                    <div className="detail">
                        <div className="post-name"><p>{currentJob.name}</p></div>
                        <div className="duty">
                            <p className="title">岗位职责</p>
                            {
                                currentJob.duty && currentJob.duty.length &&  currentJob.duty.map((item, i) => {
                                    return (
                                        <p key = {i} className="text">{item}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="duty">
                            <p className="title">任职要求</p>
                            {
                                currentJob.job_require && currentJob.job_require.length &&  currentJob.job_require.map((item, i) => {
                                    return (
                                        <p key = {i} className="text">{item}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="notes"><p>{currentJob.tips}</p></div>
                    </div>
                    <div className="related-post">
                        <div className="title"><p>相关职位</p></div>
                        <div className="related-list">
                            <ul>
                                {
                                    currentJob.related && currentJob.related.length &&  currentJob.related.map((item, i) => {
                                        return (
                                            <li key = {i}>
                                                <p className="name">{item.name}</p>
                                                <p className="require">{item.require}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}