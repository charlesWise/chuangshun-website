module.exports = function (env) {
    var reactjsPaths = [
        'node_modules/react/dist/react.js',
        'node_modules/react-dom/dist/react-dom.js',
        'js/libs/jquery.js'
    ];
    var reactminjsPaths = [
        'node_modules/react/dist/react.min.js',
        'node_modules/react-dom/dist/react-dom.min.js',
        'js/libs/jquery.min.js'
    ];

    function jsPath(path) {
        return 'js/' + path;
    }

    var shimjsPaths = [
        jsPath('polyfills/es5-shim.js'),
        jsPath('polyfills/es5-sham.js'),
        jsPath('polyfills/es6-shim.js'),
        jsPath('polyfills/es6-sham.js')
    ];
    return {
        commonJS: {
            react: env == 'dev' ? reactjsPaths : reactminjsPaths,
            polyfill: shimjsPaths
        },
        webpackEntry: {
            index: './js/views/pc/pages/Index',
            aboutUs: './js/views/pc/pages/AboutUs',
            contactUs: './js/views/pc/pages/ContactUs',
            mobileTest: './js/views/pc/pages/ProductService/MobileTest',
            mobileInternet: './js/views/pc/pages/ProductService/MobileInternet',
            case: './js/views/pc/pages/ProductService/Case',
            financial: './js/views/pc/pages/ProductService/Financial',
            uedDesign: './js/views/pc/pages/ProductService/UedDesign',
            solutionPlan: './js/views/pc/pages/ProductService/SolutionPlan',
            internetPlatform: './js/views/pc/pages/ProductService/InternetPlatform',
            legalStatement: './js/views/pc/pages/LegalStatement',
            recruitDetail: './js/views/pc/pages/RecruitDetail',
            //案例详情-pc
            shopex: './js/views/pc/pages/CaseDetails/Pc/Shopex',
            iptv: './js/views/pc/pages/CaseDetails/Pc/IPTV',
            zlc: './js/views/pc/pages/CaseDetails/Pc/Zlc',
            cfy: './js/views/pc/pages/CaseDetails/Pc/Cfy',
            cflc: './js/views/pc/pages/CaseDetails/Pc/Cflc',
            ydgwc: './js/views/pc/pages/CaseDetails/Pc/Ydgwc',
            xhh: './js/views/pc/pages/CaseDetails/Pc/Xhh',
            wzjg: './js/views/pc/pages/CaseDetails/Pc/Wzjg',
            wsy: './js/views/pc/pages/CaseDetails/Pc/Wsy',
            wbyy: './js/views/pc/pages/CaseDetails/Pc/Wbyy',
            wbccht: './js/views/pc/pages/CaseDetails/Pc/Wbccht',
            trj: './js/views/pc/pages/CaseDetails/Pc/Trj',
            tbj: './js/views/pc/pages/CaseDetails/Pc/Tbj',
            tbs: './js/views/pc/pages/CaseDetails/Pc/Tbs',
            spzl: './js/views/pc/pages/CaseDetails/Pc/Spzl',
            rzy: './js/views/pc/pages/CaseDetails/Pc/Rzy',
            pjj: './js/views/pc/pages/CaseDetails/Pc/Pjj',
            lmcc: './js/views/pc/pages/CaseDetails/Pc/Lmcc',
            lcc: './js/views/pc/pages/CaseDetails/Pc/Lcc',
            jy: './js/views/pc/pages/CaseDetails/Pc/Jy',
            dz: './js/views/pc/pages/CaseDetails/Pc/Dz',
            blgds: './js/views/pc/pages/CaseDetails/Pc/Blgds',
            bknc: './js/views/pc/pages/CaseDetails/Pc/Bknc',
            // 案例-APP
            ubsp: './js/views/pc/pages/CaseDetails/App/Ubsp',
            ubl: './js/views/pc/pages/CaseDetails/App/Ubl',
            appZlc: './js/views/pc/pages/CaseDetails/App/Zlc',
            appCfy: './js/views/pc/pages/CaseDetails/App/Cfy',
            appCflc: './js/views/pc/pages/CaseDetails/App/Cflc',
            appXhh: './js/views/pc/pages/CaseDetails/App/Xhh',
            appTrj: './js/views/pc/pages/CaseDetails/App/Trj',
            appTbj: './js/views/pc/pages/CaseDetails/App/Tbj',
            appThg: './js/views/pc/pages/CaseDetails/App/Thg',
            appTxs: './js/views/pc/pages/CaseDetails/App/Txs',
            appSphd: './js/views/pc/pages/CaseDetails/App/Sphd',
            appRzy: './js/views/pc/pages/CaseDetails/App/Rzy',
            appPjj: './js/views/pc/pages/CaseDetails/App/Pjj',
            appLcsd: './js/views/pc/pages/CaseDetails/App/Lcsd',
            // 案例-专题活动
            ztZlc: './js/views/pc/pages/CaseDetails/Zt/Zlc',
            ztXhhfl: './js/views/pc/pages/CaseDetails/Zt/Xhhfl',
            ztXhh: './js/views/pc/pages/CaseDetails/Zt/Xhh',
            ztTbsj: './js/views/pc/pages/CaseDetails/Zt/Tbsj',
            ztTxs: './js/views/pc/pages/CaseDetails/Zt/Txs',
            ztPjj: './js/views/pc/pages/CaseDetails/Zt/Pjj',
            ztLqkj: './js/views/pc/pages/CaseDetails/Zt/Lqkj',
            // 案例-线下活动
            xxShantiZn: './js/views/pc/pages/CaseDetails/Xx/ShantiZn',
            xxShanti: './js/views/pc/pages/CaseDetails/Xx/Shanti',
            xxZjsh: './js/views/pc/pages/CaseDetails/Xx/Zjsh',
            xxZjyg: './js/views/pc/pages/CaseDetails/Xx/Zjyg',
            xxXhh: './js/views/pc/pages/CaseDetails/Xx/Xhh',
            xxSqbw: './js/views/pc/pages/CaseDetails/Xx/Sqbw',
            xxSzhq: './js/views/pc/pages/CaseDetails/Xx/Szhq',
            xxShsq: './js/views/pc/pages/CaseDetails/Xx/Shsq',
            xxQgmp: './js/views/pc/pages/CaseDetails/Xx/Qgmp',
            xxMbkp: './js/views/pc/pages/CaseDetails/Xx/Mbkp',
            xxGjsd: './js/views/pc/pages/CaseDetails/Xx/Gjsd',
            xxAhz: './js/views/pc/pages/CaseDetails/Xx/Ahz'
        },
        pages: [{
                title: '创顺首页',
                template: 'pc.html',
                output: 'index.html',
                js: ['polyfill.js', 'react.js', 'index.js'],
                css: ['global.css', 'home.css'],
                prerender: true
            },
            {
                title: '关于创顺',
                template: 'pc.html',
                output: 'aboutUs.html',
                js: ['polyfill.js', 'react.js', 'aboutUs.js'],
                css: ['global.css', 'aboutUs.css'],
                prerender: true
            },
            //产品服务start
            {
                title: '金融服务分类',
                template: 'pc.html',
                output: 'financial.html',
                js: ['polyfill.js', 'react.js', 'financial.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            {
                title: '移动测试',
                template: 'pc.html',
                output: 'mobileTest.html',
                js: ['polyfill.js', 'react.js', 'mobileTest.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            {
                title: '移动互联网定制开发',
                template: 'pc.html',
                output: 'mobileInternet.html',
                js: ['polyfill.js', 'react.js', 'mobileInternet.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            {
                title: '案例',
                template: 'pc.html',
                output: 'case.html',
                js: ['polyfill.js', 'react.js', 'case.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            {
                title: 'UED设计服务',
                template: 'pc.html',
                output: 'uedDesign.html',
                js: ['polyfill.js', 'react.js', 'uedDesign.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            {
                title: '金融服务解决方案',
                template: 'pc.html',
                output: 'solutionPlan.html',
                js: ['polyfill.js', 'react.js', 'solutionPlan.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            {
                title: '互联网平台搭建',
                template: 'pc.html',
                output: 'internetPlatform.html',
                js: ['polyfill.js', 'react.js', 'internetPlatform.js'],
                css: ['global.css', 'productService.css'],
                prerender: true
            },
            //产品服务end
            {
                title: '联系我们',
                template: 'pc.html',
                output: 'contactUs.html',
                js: ['polyfill.js', 'react.js', 'contactUs.js'],
                css: ['global.css', 'contactUs.css'],
                prerender: true
            },
            {
                title: '法律声明',
                template: 'pc.html',
                output: 'legalStatement.html',
                js: ['polyfill.js', 'react.js', 'legalStatement.js'],
                css: ['global.css', 'legalStatement.css'],
                prerender: true
            },
            {
                title: '招聘内页',
                template: 'pc.html',
                output: 'recruitDetail.html',
                js: ['polyfill.js', 'react.js', 'recruitDetail.js'],
                css: ['global.css', 'recruitDetail.css'],
                prerender: true
            },
            //案例详情-pc
            {
                title: '案例-pc-shopex微商橱窗',
                template: 'pc.html',
                output: 'shopex.html',
                js: ['polyfill.js', 'react.js', 'shopex.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-IPTV',
                template: 'pc.html',
                output: 'iptv.html',
                js: ['polyfill.js', 'react.js', 'iptv.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-最理财',
                template: 'pc.html',
                output: 'zlc.html',
                js: ['polyfill.js', 'react.js', 'zlc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-长富云',
                template: 'pc.html',
                output: 'cfy.html',
                js: ['polyfill.js', 'react.js', 'cfy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-长富理财',
                template: 'pc.html',
                output: 'cflc.html',
                js: ['polyfill.js', 'react.js', 'cflc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-云端购物车',
                template: 'pc.html',
                output: 'ydgwc.html',
                js: ['polyfill.js', 'react.js', 'ydgwc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-鑫合汇',
                template: 'pc.html',
                output: 'xhh.html',
                js: ['polyfill.js', 'react.js', 'xhh.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-温州金改',
                template: 'pc.html',
                output: 'wzjg.html',
                js: ['polyfill.js', 'react.js', 'wzjg.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-微商业',
                template: 'pc.html',
                output: 'wsy.html',
                js: ['polyfill.js', 'react.js', 'wsy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-微博应用',
                template: 'pc.html',
                output: 'wbyy.html',
                js: ['polyfill.js', 'react.js', 'wbyy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-微博橱窗后台',
                template: 'pc.html',
                output: 'wbccht.html',
                js: ['polyfill.js', 'react.js', 'wbccht.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-投融家',
                template: 'pc.html',
                output: 'trj.html',
                js: ['polyfill.js', 'react.js', 'trj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-投保家',
                template: 'pc.html',
                output: 'tbj.html',
                js: ['polyfill.js', 'react.js', 'tbj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-淘布斯',
                template: 'pc.html',
                output: 'tbs.html',
                js: ['polyfill.js', 'react.js', 'tbs.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-商品助理',
                template: 'pc.html',
                output: 'spzl.html',
                js: ['polyfill.js', 'react.js', 'spzl.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-融资云',
                template: 'pc.html',
                output: 'rzy.html',
                js: ['polyfill.js', 'react.js', 'rzy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-普金吉',
                template: 'pc.html',
                output: 'pjj.html',
                js: ['polyfill.js', 'react.js', 'pjj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-蓝媒橱窗',
                template: 'pc.html',
                output: 'lmcc.html',
                js: ['polyfill.js', 'react.js', 'lmcc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-聚友电商',
                template: 'pc.html',
                output: 'jy.html',
                js: ['polyfill.js', 'react.js', 'jy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-来查查',
                template: 'pc.html',
                output: 'lcc.html',
                js: ['polyfill.js', 'react.js', 'lcc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-端众',
                template: 'pc.html',
                output: 'dz.html',
                js: ['polyfill.js', 'react.js', 'dz.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-电商网页',
                template: 'pc.html',
                output: 'blgds.html',
                js: ['polyfill.js', 'react.js', 'blgds.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-pc-爆款内参',
                template: 'pc.html',
                output: 'bknc.html',
                js: ['polyfill.js', 'react.js', 'bknc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            // 案例-APP
            {
                title: '案例-app-UBSP',
                template: 'pc.html',
                output: 'ubsp.html',
                js: ['polyfill.js', 'react.js', 'ubsp.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-U部落',
                template: 'pc.html',
                output: 'ubl.html',
                js: ['polyfill.js', 'react.js', 'ubl.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-最理财',
                template: 'pc.html',
                output: 'appZlc.html',
                js: ['polyfill.js', 'react.js', 'appZlc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-长富云',
                template: 'pc.html',
                output: 'appCfy.html',
                js: ['polyfill.js', 'react.js', 'appCfy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-长富理财',
                template: 'pc.html',
                output: 'appCflc.html',
                js: ['polyfill.js', 'react.js', 'appCflc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-鑫合汇',
                template: 'pc.html',
                output: 'appXhh.html',
                js: ['polyfill.js', 'react.js', 'appXhh.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-投融家',
                template: 'pc.html',
                output: 'appTrj.html',
                js: ['polyfill.js', 'react.js', 'appTrj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-投保家',
                template: 'pc.html',
                output: 'appTbj.html',
                js: ['polyfill.js', 'react.js', 'appTbj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-淘团购',
                template: 'pc.html',
                output: 'appThg.html',
                js: ['polyfill.js', 'react.js', 'appThg.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-唐小僧',
                template: 'pc.html',
                output: 'appTxs.html',
                js: ['polyfill.js', 'react.js', 'appTxs.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-三屏互动',
                template: 'pc.html',
                output: 'appSphd.html',
                js: ['polyfill.js', 'react.js', 'appSphd.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-融资云',
                template: 'pc.html',
                output: 'appRzy.html',
                js: ['polyfill.js', 'react.js', 'appRzy.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-普金吉',
                template: 'pc.html',
                output: 'appPjj.html',
                js: ['polyfill.js', 'react.js', 'appPjj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-app-理财时代',
                template: 'pc.html',
                output: 'appLcsd.html',
                js: ['polyfill.js', 'react.js', 'appLcsd.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            // 案例-专题活动
            {
                title: '案例-专题活动-最理财',
                template: 'pc.html',
                output: 'ztZlc.html',
                js: ['polyfill.js', 'react.js', 'ztZlc.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-专题活动-鑫合汇福利大放送',
                template: 'pc.html',
                output: 'ztXhhfl.html',
                js: ['polyfill.js', 'react.js', 'ztXhhfl.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-专题活动-鑫合汇',
                template: 'pc.html',
                output: 'ztXhh.html',
                js: ['polyfill.js', 'react.js', 'ztXhh.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-专题活动-淘宝商家',
                template: 'pc.html',
                output: 'ztTbsj.html',
                js: ['polyfill.js', 'react.js', 'ztTbsj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-专题活动-唐小僧',
                template: 'pc.html',
                output: 'ztTxs.html',
                js: ['polyfill.js', 'react.js', 'ztTxs.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-专题活动-普金吉',
                template: 'pc.html',
                output: 'ztPjj.html',
                js: ['polyfill.js', 'react.js', 'ztPjj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-专题活动-联亲科技',
                template: 'pc.html',
                output: 'ztLqkj.html',
                js: ['polyfill.js', 'react.js', 'ztLqkj.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            // 案例-线下活动
            {
                title: '案例-线下活动-Shanti Yoga周年活动',
                template: 'pc.html',
                output: 'xxShantiZn.html',
                js: ['polyfill.js', 'react.js', 'xxShantiZn.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-Shanti Yoga',
                template: 'pc.html',
                output: 'xxShanti.html',
                js: ['polyfill.js', 'react.js', 'xxShanti.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-浙江商会',
                template: 'pc.html',
                output: 'xxZjsh.html',
                js: ['polyfill.js', 'react.js', 'xxZjsh.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-张江药谷',
                template: 'pc.html',
                output: 'xxZjyg.html',
                js: ['polyfill.js', 'react.js', 'xxZjyg.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-鑫合汇',
                template: 'pc.html',
                output: 'xxXhh.html',
                js: ['polyfill.js', 'react.js', 'xxXhh.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-孙桥百万大学生活动',
                template: 'pc.html',
                output: 'xxSqbw.html',
                js: ['polyfill.js', 'react.js', 'xxSqbw.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-苏州环球庆典活动',
                template: 'pc.html',
                output: 'xxSzhq.html',
                js: ['polyfill.js', 'react.js', 'xxSzhq.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-上海孙桥快乐丰收节',
                template: 'pc.html',
                output: 'xxShsq.html',
                js: ['polyfill.js', 'react.js', 'xxShsq.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-上海轻工名品展示展销会',
                template: 'pc.html',
                output: 'xxQgmp.html',
                js: ['polyfill.js', 'react.js', 'xxQgmp.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-上海民办科普',
                template: 'pc.html',
                output: 'xxMbkp.html',
                js: ['polyfill.js', 'react.js', 'xxMbkp.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-聚焦长宁共铸商道',
                template: 'pc.html',
                output: 'xxGjsd.html',
                js: ['polyfill.js', 'react.js', 'xxGjsd.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            },
            {
                title: '案例-线下活动-阿胡子烹蟹产品包装',
                template: 'pc.html',
                output: 'xxAhz.html',
                js: ['polyfill.js', 'react.js', 'xxAhz.js'],
                css: ['global.css', 'caseDetail.css'],
                prerender: true
            }
        ]
    }
}