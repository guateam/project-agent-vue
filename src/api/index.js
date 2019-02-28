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
        // 用户注册
        register(data) {
            return axios.post(`${base.account}/register`, qs.stringify(data))
        },
        // 根据token获取用户信息
        get_user_by_token(token = store.state.token) {
            return axios.get(`${base.account}/get_user_by_token`, {params: {token: token}})
        },
        // 获取收藏记录
        get_collections(token = store.state.token) {
            return axios.get(`${base.account}/get_collections`, {params: {token: token}})
        },
        // 添加用户行为
        add_user_action(target, target_type, token = store.state.token) {
            return axios.get(`${base.account}/add_user_action`, {
                params: {
                    token: token,
                    target_id: target,
                    action_type: target_type
                }
            })
        },
        // 获取钱包消息
        get_account_balance(token = store.state.token) {
            return axios.post(`${base.account}/get_account_balance`, qs.stringify({token: token}))
        },
        // 获取关注列表
        get_my_follow(token = store.state.token) {
            return axios.get(`${base.account}/get_my_follow`, {params: {token: token}})
        },
        get_history(token = store.state.token) {
            return axios.get(`${base.account}/get_history`, {params: {token: token}})
        }
    },
    message: {
        // 获取聊天列表
        get_message_list(token = store.state.token) {
            return axios.get(`${base.message}/get_message_list`, {params: {token: token}})
        },
        get_friend_list(token=store.state.token){
            return axios.get(`${base.message}/get_friend_list`,{params:{token:token}})
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
        },
        // 获取发布过的问题
        get_my_questions(token = store.state.token) {
            return axios.get(`${base.questions}/get_my_questions`, {params: {token: token}})
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
        get_answer_comment_list(id) {
            return axios.get(`${base.answer}/get_answer_comment_list`, {params: {answer_id: id}})
        },
        // 获取发布过的回答
        get_user_answers(token = store.state.token) {
            return axios.get(`${base.answer}/get_user_answers`, {params: {token: token}})
        },
        // 关注回答
        collect_answer(id, token = store.state.token) {
            return axios.get(`${base.answer}/collect_answer`, {params: {token: token, answer_id: id}})
        },
        un_collect_answer(id, token = store.state.token) {
            return axios.get(`${base.answer}/un_collect_answer`, {params: {token: token, answer_id: id}})
        },
        get_collect_state(id, token = store.state.token) {
            return axios.get(`${base.answer}/get_collect_state`, {params: {token: token, answer_id: id}})
        },
    },
    article: {
        get_user_articles(token = store.state.token) {
            return axios.get(`${base.article}/get_user_articles`, {params: {token: token}})
        },
        get_article_allowed_group(token = store.state.token) {
            return axios.get(`${base.article}/get_article_allowed_group`, {params: {token: token}})
        }
    },
    specialist: {
        get_my_fans(token = store.state.token) {
            return axios.get(`${base.specialist}/get_my_fans`, {params: {token: token}})
        }
    },
    activities: {
        get_activities(type) {
            return axios.get(`${base.activities}/get_activities`, {params: {type: type}})
        }
    }
};

export default index;
