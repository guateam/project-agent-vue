import base from './base'
import qs from 'qs'
import axios from './http'
import store from '../store'


const index = {
    homepage: {
        // 根据用户推荐首页内容
        get_recommend(token = store.state.token) {
            return axios.get(`${base.homepage}/get_recommend`, {params: {token: token}})
        },
        // 获取分类
        get_category() {
            return axios.get(`${base.homepage}/get_category`)
        },
    },
    account: {
        // 用户登录
        login(data) {
            return axios.post(`${base.account}/login`, qs.stringify(data))
        },
        // 根据token获取用户信息
        get_user_by_token(token = store.state.token) {
            return axios.get(`${base.account}/get_user_by_token`, {params: {token: token}})
        },
        // 获取收藏记录
        get_collections(token = store.state.token) {
            return axios.get(`${base.account}/get_collections`, {params: {token: token}})
        },
    },
    message: {
        // 获取聊天列表
        get_message_list(token = store.state.token) {
            return axios.get(`${base.message}/get_message_list`, {params: {token: token}})
        }
    },
    questions: {
        // 获取问题的回答列表
        get_answer_list(id) {
            return axios.get(`${base.questions}/get_answer_list`, {params: {question_id: id}})
        },
        // 获取问题详情
        get_question(id) {
            return axios.get(`${base.questions}/get_question`, {params: {question_id: id}})
        },
        // 关注问题
        follow_question(id, token = store.state.token) {
            return axios.get(`${base.questions}/follow_question`, {params: {question_id: id, token: token}})
        },
        // 判断是否已关注
        get_follow(id, token = store.state.token) {
            return axios.get(`${base.questions}/get_follow`, {params: {question_id: id, token: token}})
        }
    },
    school: {
        // 获取学院文章
        get_recommend_article(token = store.state.token) {
            return axios.get(`${base.school}/get_recommend_article`, {params: {token: token}})
        }
    },
    answer: {
        // 获取回答详情
        get_answer(id) {
            return axios.get(`${base.answer}/get_answer`, {params: {answer_id: id}})
        },
        // 获取回答的评论
        get_answer_comment_list(id){
            return axios.get(`${base.answer}/get_answer_comment_list`, {params: {answer_id: id}})
        }
    }
};

export default index;
