import base from './base'
import qs from 'qs'
import axios from './http'
import store from '../store'


const index = {
  homepage: {
    // 根据用户推荐首页内容
    get_recommend(token=store.state.token) { return axios.get(`${base.homepage}/get_recommend`, {params: {token: token}}) },
    // 获取分类
    get_category() { return axios.get(`${base.homepage}/get_category`) },
  },
  account: {
    // 用户登录
    login(data) { return axios.post(`${base.account}/login`, qs.stringify(data)) },
    // 根据token获取用户信息
    get_user_by_token(token=store.state.token) { return axios.get(`${base.account}/get_user_by_token`, {params: {token: token}}) },
  },
  message: {
    // 获取聊天列表
    get_message_list(token=store.state.token) { return axios.get(`${base.message}/get_message_list`, {params: {token: token}}) }
  },
};

export default index;
