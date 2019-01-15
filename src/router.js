import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    // 重定向到话题
    { path: '/', name: 'index', redirect: {name: 'topic'} },
    // 话题
    { path: '/topic', name: 'topic', component: () => import('./views/Topic.vue') },
    // 登录
    { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
    // 设置
    { path: '/settings', name: 'settings', component: () => import('./views/Settings.vue') },
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
      ],
    },
    // 消息
    {
      path: '/message',
      name: 'message',
      meta: {requireLogin: true},  // 需要登录
      component: () => import('./views/Message.vue')
    },
  ],
});