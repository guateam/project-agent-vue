import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // User's token.
    token: Cookies.get('token'),
    userInfo: {
      id: null, // 用户的唯一标识,用于向后台传参
      head_portrait: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',  // 用户头像
      nickname: null,  // 用户昵称
      level: null,  // 用户等级
      exp: {value: null, percent: null},  // 经验值
      group: {text: '', value: null},  // 用户组
      answer: null,  // 回答
      follow: null,  // 关注
      fans: null,  // 粉丝
      collection: null,  // 收藏
    },
    drawer: false,  // 侧边栏开关
  },
  mutations: {
    // Update user's token with `$store.commit('updateToken', token);`.
    updateToken(state, token) { state.token = token },
    // Remove user's token.
    removeToken(state) { state.token = null },
    // Refresh user's information.
    refreshUserInfo(state, data) {
      state.userInfo = data;
    },
    // Clear user's information.
    clearUserInfo(state) {
      state.userInfo = {
        head_portrait: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      }
    },
    // 开关侧边栏
    drawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {

  }
})
