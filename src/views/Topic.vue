<template>
    <div class="topic">

        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>

            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>话题</span>
            </v-toolbar-title>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-tabs light slot="extension" v-model="tabs" color="primary" centered slider-color="secondary">
                <v-tab :key="0">推荐</v-tab>
                <v-tab v-for="data in category" :key="data.id">{{ data.name }}</v-tab>
            </v-tabs>
        </v-toolbar>

        <v-card id="card">
            <v-tabs-items v-model="tabs">
                <v-tab-item :key="0">
                    <question-card @click.native="view_detail(question.questionID)" v-for="(question,n) in questionList"
                                   :key="n" v-bind="question"></question-card>
                </v-tab-item>

                <v-tab-item v-for="data in category" :key="data.id">
                    <question-card @click.native="view_detail(question.questionID)" v-for="question in questionList"
                                   :key="question.questionID" v-bind="question"></question-card>
                </v-tab-item>
                <div class="bottom-nav"></div>
            </v-tabs-items>
        </v-card>
        <div :class="busy ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll="loadMore"
             infinite-scroll-disabled="busy" infinite-scroll-distance="0">
            <h3>
                <v-progress-circular
                        indeterminate
                        color="primary"
                ></v-progress-circular>
                <span style="margin-left: 1em">加载中</span></h3>
        </div>
        <div style="height: 1.5em"></div>
        <v-snackbar
                v-model="snackbar"
                vertical="vertical"
        >
            {{ text }}
            <v-btn
                    dark
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
        <v-footer app v-if="$route.path !== '/login' && $route.path !== '/register'">
            <bottomNav></bottomNav>
        </v-footer>
    </div>
</template>

<script>
    import QuestionCard from "../components/QuestionCard";
    import bottomNav from '../components/bottomNav';

    export default {
        name: 'Topic',

        components: {
            QuestionCard,
            bottomNav
        },

        data() {
            return {
                tabs: 0,
                category: [],
                questionList: [],
                bottomNav: 0,
                page: 0,
                busy: false,
                timeout:0,
                snackbar:false,
                text:''
            }
        },

        methods: {
            // 查看问题详情
            view_detail(id) {
                this.$router.push({name: 'question', query: {id: id}});  // 跳转到话题详情页
            },
            // 获取推荐内容
            get_recommend() {
                this.$api.homepage.get_recommend(this.page).then(res => {
                    if (res.data.code === 1) {
                        // 处理推荐内容
                        if (this.page === 0) {
                            this.questionList = [];
                        }
                        res.data.data.forEach(item => {
                            let flag = true;
                            for (let value in this.questionList) {
                                if (value['questionID'] === item['questionID'])
                                    flag = false;
                            }
                            if(item['type']===0){
                                if(item['image'].length>=1){
                                    item['img']=item['image'][0].split('src="')[1].split('"')[0];
                                }
                            }

                            if (item.type === 0 && flag) {
                                this.questionList.push(item);
                            }
                        });
                        this.page++;
                        this.busy = false;
                        this.timeout=0;
                    }else{
                        if(this.timeout<3){
                            this.get_recommend();
                            this.timeout++;
                        }else{
                            this.snackbar=true;
                            this.text='连接超时，请检查网络'
                        }
                    }
                })
            },
            // 获取分类标签
            get_category() {
                this.$api.homepage.get_category().then(res => {
                    if (res.data.code === 1) {
                        this.category = res.data.data;
                    }
                })
            },
            loadMore() {
                this.busy = true;
                this.get_recommend();
            }
        },

        mounted() {
            this.get_category();
            // setTimeout(this.get_recommend(), 5000);
        }
    }
</script>

<style scoped>
    #card {
        background: #E4E4E4;
    }

    .bottom-nav {
        margin-bottom: 10%;
    }

    .load-more-normal {
        text-align: center;
        height: 60px;
        line-height: 60px;
    }

    .load-more-hide {
        height: 0;
    }
</style>
