'use strict';
import React from 'react';

const newsInfo = [
    {
        "outLink": "https://mp.weixin.qq.com/s?__biz=MzU2NzI5NjM3NA==&mid=2247483659&idx=1&sn=1788810179519ceed29766eee5977ff2&chksm=fc9e2912cbe9a00462b69fb97a75365a4cfc2309e338204e4e7269fd5f7edfe3616544467cb1&mpshare=1&scene=1&srcid=1123w7adGfmD0gfbgeKt4bOH&key=619b89eda043bf6d84ea717b291c9c0947d69dadf43c2807d8cbbdad1fbdeff48e16becc19b55c1ef349fcbfe06a7aa8a1c23fb589aee0a905e5d07e3adf46d4fabaa6218ecf7a6266a20ace5a6213d1&ascene=0&uin=Njc3MjYwNzIx&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.11.6+build(15G1108)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=kdP70jbjxPom%2FZ9kXQ0Ic7LUxzv0yYgfRm0fRuXjXFGEJQYvZGVPlopD1wc%2FPwFe",
        "thump": "/images/aboutus/new_1.png",
        "title": "聚焦|创顺科技CEO刘俊率队拜访中新力合集团",
        "time": "2017-11-02",
        "brief": "此次会面，双方就科技金融领域做出了深入探讨。"
    },
    {
        "outLink": "https://mp.weixin.qq.com/s?__biz=MzU2NzI5NjM3NA==&mid=2247483691&idx=1&sn=247c0b8052fa97fcdbedce2fcd3b554d&chksm=fc9e2932cbe9a024ba803337f3f932cd1105722632fcc75f538fee07575ab3bb76d2ecbdf0c7&mpshare=1&scene=1&srcid=11238I90Cg1e76fUadu3NVod&key=f200422291b6fd90763731683c7a1f90c685dc23fcc521a8a956e4241a952772bd840a77d9145f1265f44caa822a90c72b9c4d2190aeb83887792bb6ff738b17ec9b76d5f0e0599cd19a0d392ffe67f4&ascene=0&uin=Njc3MjYwNzIx&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.11.6+build(15G1108)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=kdP70jbjxPom%2FZ9kXQ0Ic7LUxzv0yYgfRm0fRuXjXFGEJQYvZGVPlopD1wc%2FPwFe",
        "thump": "/images/aboutus/new_2.png",
        "title": "让梦想触手可及——创顺科技全员大会顺利召开",
        "time": "2017-11-03",
        "brief": "祝贺创顺科技全员大会顺利召开！"
    },
    {
        "outLink": "https://mp.weixin.qq.com/s?__biz=MzU2NzI5NjM3NA==&mid=2247483695&idx=1&sn=35ea442466ce67a9dad2f0d7a046a336&chksm=fc9e2936cbe9a020149731be53b4ef19b6a769558187f1e4a24f0e157d952fcbdf3b79eaab6d&mpshare=1&scene=1&srcid=11237pxpjw0y98FwRkEzXfxh&key=5dba587a8b06ccca088629fe7f9e94d0d3c98e3c656510f2af594b9f60d246123e5fafa33ba2cb320bb5c476398bb20a3c9cf62108dbb4255e48943a341e5e86039e17dedddc606aa3bf24041b31f35c&ascene=0&uin=Njc3MjYwNzIx&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.11.6+build(15G1108)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=kdP70jbjxPom%2FZ9kXQ0Ic7LUxzv0yYgfRm0fRuXjXFGEJQYvZGVPlopD1wc%2FPwFe",
        "thump": "/images/aboutus/new_3.png",
        "title": "签约|创顺科技与投融家签署战略合作协议",
        "time": "2017-11-08",
        "brief": "对于投融家和创顺科技而言，此次合作可谓双赢。"
    },
    {
        "outLink": "https://mp.weixin.qq.com/s?__biz=MzU2NzI5NjM3NA==&mid=2247483701&idx=1&sn=da24d810c534f227df400362a9dc6d86&chksm=fc9e292ccbe9a03ab2d96b13f26b4cff5064ee54dfeb4609e11db731afbc83af2fbdc6f88a09&mpshare=1&scene=1&srcid=11238YgyUEfVtAIAiNxraJoE&key=960cf11a664bfb279bb0cd42ece41fbb175847f76302ceb77d6a9decb83f367a54bfb0e58bad9b9a7b99761a585d77969fb2cf868398c68f7b1e4c10351dd9dd72cf1f691b8f1f83121b1620c1315ce0&ascene=0&uin=Njc3MjYwNzIx&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.11.6+build(15G1108)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=kdP70jbjxPom%2FZ9kXQ0Ic7LUxzv0yYgfRm0fRuXjXFGEJQYvZGVPlopD1wc%2FPwFe",
        "thump": "/images/aboutus/new_4.png",
        "title": "签约|创顺科技与长富云签署战略合作协议",
        "time": "2017-11-09",
        "brief": "长富云将由创顺科技全权提供全方位的技术服务。"
    },
    {
        "outLink": "https://mp.weixin.qq.com/s?__biz=MzU2NzI5NjM3NA==&mid=2247483710&idx=1&sn=5b4465e7248e43c37cd576c956435b01&chksm=fc9e2927cbe9a031ad411293a7c4cd701c59db3a772ed8642ce714cb6ee79447f6536e16885b&mpshare=1&scene=1&srcid=1123bAUsw2H0HpTXMTkSt0qO&key=4d1e6cb0fc2ed6b208b02dadb26dfabe957139d37ef4d409ee0a8bd624b64dfdc604053c10ef2c61d48455ea4c57483e4065f315d20fee31c71112283afa28be931333fe7ba2748ea37dd0768328b96b&ascene=0&uin=Njc3MjYwNzIx&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.11.6+build(15G1108)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=kdP70jbjxPom%2FZ9kXQ0Ic7LUxzv0yYgfRm0fRuXjXFGEJQYvZGVPlopD1wc%2FPwFe",
        "thump": "/images/aboutus/new_5.png",
        "title": "签约|创顺科技与长富贷马贷来了签署战略合作协议",
        "time": "2017-11-10",
        "brief": "创顺科技深厚的互联网金融实战背景，将给长富贷和和马贷来了均为投融长富集团旗下互联网金融平台。"
    },
    {
        "outLink": "https://mp.weixin.qq.com/s?__biz=MzU2NzI5NjM3NA==&mid=2247483738&idx=1&sn=b50d530699e70bd323882d0d4c3955f5&chksm=fc9e2943cbe9a055a498d8ddf46374c68f512f94475abbfa118ff23dda698b0c5cb390c7a458&mpshare=1&scene=1&srcid=1123SPsg1jcP126kBCxNIaLT&key=4d1e6cb0fc2ed6b2ab231aa9ee339b4a7cc22e0f8e3f616e1f42c989290e9036a7566203557b3d22621e0bdcc727434bd30f98545ce6457d41d9427158c0927433b4b5813577946f308f913eab5a579e&ascene=0&uin=Njc3MjYwNzIx&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.11.6+build(15G1108)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=kdP70jbjxPom%2FZ9kXQ0Ic7LUxzv0yYgfRm0fRuXjXFGEJQYvZGVPlopD1wc%2FPwFe",
        "thump": "/images/aboutus/new_6.png",
        "title": "团建聚人心 创顺科技“让梦想触手可及”",
        "time": "2017-11-21",
        "brief": "“我和你”变成了“我们”就是真正团队的意义！"
    }
];
export default class NewsCenter extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            splitIndex: 3
        }
    }
    _setSplitIndex() {
        this.setState({
            splitIndex: newsInfo.length
        })
    }
    render() {
        return (
            <div className="news-center-container">
                <div className="news-center-content">
                    <div className="news-title">
                        <p className="ch">新闻中心</p>
                        <p className="en">News Center</p>
                    </div>
                    <div className="news-list">
                        <ul>
                            {
                                newsInfo.slice(0, this.state.splitIndex).map((item, i) => {
                                    return (
                                        <li key={i} className={`${(i+1)%3 == 0 && 'last-li'}`}>
                                            <a target="_blank" href={item.outLink}>
                                                <p className="photo"><img src={item.thump} /></p>
                                                <p className="title">{item.title}</p>
                                                <p className="time">{item.time}</p>
                                                <p className="brief">{item.brief}</p>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                    <div className="see-more">
                        <a href="javascript:;" onClick={() => this._setSplitIndex()}>查看更多</a>
                    </div>
                </div>
            </div>
        )
    }
}