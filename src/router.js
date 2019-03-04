import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        // 重定向到话题
        {path: '/', name: 'index', redirect: {name: 'topic'}},
        // 话题
        {path: '/topic', name: 'topic', component: () => import('./views/Topic.vue')},
        // 登录
        {path: '/login', name: 'login', component: () => import('./views/Login.vue')},
        // 注册
        {path: '/register', name: 'register', component: () => import('./views/Register.vue')},
        // 设置
        {path: '/settings', name: 'settings', component: () => import('./views/Settings.vue')},
        {path: '/school', name: 'school', component: () => import('./views/School.vue')},
        // 用户个人页
        {
            path: '/account',
            name: 'account',
            redirect: {name: 'user-info'},
            meta: {requireLogin: true},  // 需要登录
            component: () => import('./views/Account.vue'),
            children: [
                // 用户信息
                {
                    path: 'user-info',
                    name: 'user-info',
                    meta: {requireLogin: true},
                    component: () => import('./views/UserInfo.vue')
                },
                // 用户基本详情
                {
                    path: 'user-detail',
                    name: 'user-detail',
                    meta: {requireLogin: true},
                    component: () => import('./views/UserDetail.vue'),
                    children: [
                        // 实名认证
                        {
                            path: 'verified',
                            name: 'verified',
                            meta: {requireLogin: true},
                            component: () => import('./views/Verified.vue')
                        },
                    ]
                },
                // 积分详情
                {
                    path: 'exp-detail',
                    name: 'exp-detail',
                    meta: {requireLogin: true},
                    component: () => import('./views/ExpDetail.vue')
                },
                // 历史发布
                {
                    path: 'historical-post',
                    name: 'historical-post',
                    meta: {requireLogin: true},
                    component: () => import('./views/HistoricalPost.vue')
                },
                // 粉丝列表
                {
                    path: 'fan-list',
                    name: 'fan-list',
                    meta: {requireLogin: true},
                    component: () => import('./views/FanList.vue')
                },
                // 我的钱包
                {
                    path: 'wallet',
                    name: 'wallet',
                    meta: {requireLogin: true},
                    component: () => import('./views/Wallet.vue')
                },
                {
                    path: '/history',
                    name: 'history',
                    meta: {requireLogin: true},
                    component: () => import('./views/History.vue')
                },
                {
                    path: '/browser',
                    name: 'browser',
                    component: () => import('./views/Browser.vue')
                },
                {
                    path: '/qr-code',
                    name: 'qr-code',
                    component: () => import('./views/QRCode.vue')
                }
            ],
        },
        // 消息
        {
            path: '/message',
            name: 'message',
            meta: {requireLogin: true},  // 需要登录
            component: () => import('./views/Message.vue'),
            children:[
                {
                    path: 'chat',
                    name: 'Chat',
                    component: () => import('./views/Chat.vue'),
                    children: [
                        {
                            path: 'chat-setting',
                            name: 'chat-setting',
                            component: () => import('./views/ChatSetting.vue')
                        },
                    ]
                },
            ]
        },
        // 收藏
        {
            path: '/collection',
            name: 'collection',
            meta: {requireLogin: true},
            component: () => import('./views/Collection.vue')
        },
        // 问题页
        {
            path: '/question',
            name: 'question',
            component: () => import('./views/Question.vue')
        },
        // 回答页
        {
            path: '/answer',
            name: 'answer',
            component: () => import('./views/Answer.vue')
        },
        // 问题发布页
        {
            path: '/question-publish',
            name: 'question-publish',
            meta: {requireLogin: true},
            component: () => import('./views/QuestionPublish.vue')
        },
        // 回答发布页
        {
            path: '/answer-publish',
            name: 'answer-publish',
            meta: {requireLogin: true},
            component: () => import('./views/AnswerPublish.vue')
        },
        // 文章发布页
        {
            path: '/article-publish',
            name: 'article-publish',
            meta: {requireLogin: true},
            component: () => import('./views/ArticlePublish.vue')
        },
        // 创作中心
        {
            path: '/creation-manager',
            name: 'creation-manager',
            meta: {requireLogin: true},
            component: () => import('./views/CreationManager.vue')
        },
    ],
});
