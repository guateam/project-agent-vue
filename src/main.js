import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import api from './api'
import store from './store'
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false;
// 把封装好的api挂载到 Vue.$api
Vue.prototype.$api = api;
Vue.use(Vuelidate);

// 配置全局守卫 登录验证
router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) {  // 判断该路由是否需要登录权限
        if (store.state.token && store.state.login) {  // 判断是否在登录状态
            next()
        } else {
            next({
                name: 'login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
