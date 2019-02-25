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
                // 积分详情
                {
                    path: 'exp-detail',
                    name: 'exp-detail',
                    meta: {requireLogin: true},
                    component: () => import('./views/ExpDetail.vue')
                },
                // 历史发布
                {
                    path:'historical-post',
                    name:'historical-post',
                    meta:{requireLogin:true},
                    component:()=>import('./views/HistoricalPost.vue')
                }
            ],
        },
        // 消息
        {
            path: '/message',
            name: 'message',
            meta: {requireLogin: true},  // 需要登录
            component: () => import('./views/Message.vue')
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
        {
            path: '/answer',
            name: 'answer',
            component: () => import('./views/Answer.vue')
        }
    ],
});
