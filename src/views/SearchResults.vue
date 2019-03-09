<template>
    <div>
        <!--<div class="head">-->
        <!--<div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">-->
        <!--<v-icon large color="white" @click="$router.back()">keyboard_arrow_left</v-icon>-->
        <!--</div>-->
        <!--<span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">搜索结果</span>-->
        <!--<div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="line"></div>-->
        <v-toolbar
                color="#ffd633"
                prominent
                tabs
        >
        <v-icon large color="white" style="margin-left:-15px" @click="$router.back()">keyboard_arrow_left</v-icon>
            <v-combobox
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    clearable
                    item-text="content"
                    item-value="content"
                    label="搜索你想要的内容"
                    solo
            >
                <template v-slot:no-data>
                    <v-list-tile>
                        <v-list-tile-title>
                            搜索你想要的
                            <strong>内容</strong>
                        </v-list-tile-title>
                    </v-list-tile>
                </template>
            </v-combobox>
            <v-toolbar-title class="title">
                <v-icon mid color="white" @click="research()">search</v-icon>
            </v-toolbar-title>
        </v-toolbar>
        <div>
            <v-tabs
                    v-model="active"
                    color="#ffd633"
                    dark
                    slider-color="yellow"
            >
                <v-tab :key="1" ripple>话题</v-tab>
                <v-tab :key="2" ripple>文章</v-tab>
                <v-tab :key="3" ripple>用户</v-tab>
                <v-tab-item :key="1">
                    <!--这部分直接把topic的搬过来就好了，我懒的写静态数据了，对接的时候直接换一下吧-->
                    <question-card @click.native="view_detail(question.questionID)" v-for="(question,idx) in questions"
                                   :key="idx" v-bind="question"></question-card>
                    
                    <div :class="busy0 ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll=""
                        infinite-scroll-disabled="busy0" infinite-scroll-distance="0" v-show="busy0">
                        <h3>
                            <v-progress-circular
                                    indeterminate
                                    color="primary"
                            ></v-progress-circular>
                            <span style="margin-left: 1em">加载中</span></h3>
                    </div>
                </v-tab-item>
                <v-tab-item :key="2">
                    <!--这部分直接把school的搬过来就好了，同上，样式我稍微盲改了一下-->
                    <v-container grid-list-md>
                        <v-layout row wrap>
                            <v-flex xs12 v-for="(value,i) in articles" :key="i">
                                <v-hover>
                                    <v-card
                                            slot-scope="{ hover }"
                                            :class="`elevation-${hover ? 12 : 2}`"
                                            class="mx-auto"
                                            @click="jump_article(value.articleID)"
                                    >
                                        <v-img
                                                :aspect-ratio="16/9"
                                                :src="value.cover"
                                        ></v-img>
                                        <v-card-title>
                                            <div>
                                                <span class="inline"><b>{{value.title}}</b></span>
                                                <div>
                                                    <div class="grey--text text--darken-2">
                                                        <span v-for="(tag, index) in value.tags" :key="index">{{ index===0 ? '' : '/' }}{{ tag.text }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-card-title>
                                    </v-card>
                                </v-hover>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <div :class="busy1 ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll=""
                        infinite-scroll-disabled="busy1" infinite-scroll-distance="0" v-show="busy1">
                        <h3>
                            <v-progress-circular
                                    indeterminate
                                    color="primary"
                            ></v-progress-circular>
                            <span style="margin-left: 1em">加载中</span></h3>
                    </div>
                    <div class="bottom"></div>
                </v-tab-item>
                <v-tab-item :key="3">
                    <!--同上，fanlist-->
                    <v-list>
                        <template v-for="(item, index) in users">
                            <v-list-tile
                                    :key="item.nickname"
                                    avatar
                                    ripple
                                    @click="toggle(item.userId)"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.headportrait" alt="">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title><span class="lv">lv.{{item.level}}</span>{{ item.nickname }}
                                        <span :class="{chip:true,chip_red:item.usergroup.value===0,chip_yellow:item.usergroup.value===2||item.usergroup.value===5,chip_green:item.usergroup.value===1,chip_blue:item.usergroup.value===3||item.usergroup.value===6,chip_gray:item.usergroup.value===4}">
                                            {{ item.usergroup.text }}
                                        </span>
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
                                </v-list-tile-content>

                            </v-list-tile>
                        </template>
                    </v-list>
                    <div :class="busy2 ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll=""
                        infinite-scroll-disabled="busy2" infinite-scroll-distance="0" v-show="busy2">
                        <h3>
                            <v-progress-circular
                                    indeterminate
                                    color="primary"
                            ></v-progress-circular>
                            <span style="margin-left: 1em">加载中</span>
                        </h3>
                    </div>
                </v-tab-item>
            </v-tabs>
        </div>
    </div>
</template>

<script>
    import QuestionCard from "../components/QuestionCard";
    var uid = ""
    export default {
        name: "search-results",
        components: {QuestionCard},
        data() {
            return {
                active: null,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.`,
                items:[],
                model:"",
                isLoading:true,
                search:"",

                //存放三个标签的容器
                questions:[],
                articles:[],
                users:[],

                //输入延迟
                counter:2,

                //三个标签的繁忙状态
                busy0:true,
                busy1:true,
                busy2:true,

                info_word:"请输入搜索内容",

                //三个标签目前的页码数
                question_page:1,
                article_page:1,
                user_page:1,

                //根据该值进行流加载搜索
                now_search:"",

                //第一次进入页面的加载
                first_loading:true,
            }
        },
        methods:{
            //重新搜索
            research(){
                var that = this
                this.reset()
                searching = this.search
                this.$api.algorithm.vague_search(searching,3).then(res => {
                    if (res.data.code === 1) {
                        this.questions = res.data.data[0];
                        this.articles = res.data.data[1];
                        this.users = res.data.data[2];
                        this.all_busy_done()
                        this.now_search = searching
                    }
                })
            },
            toggle(id) {
                this.$router.push({name: 'user', query: {id: id}});
            },
            //用于重新搜索时的状态重置
            reset(){
                this.questions = []
                this.articles = []
                this.users = []
                this.all_busy_start()
            },
            //全部繁忙状态开启
            all_busy_start(){
                this.busy_start(0)
                this.busy_start(1)
                this.busy_start(2)
            },
            //全部繁忙状态关闭
            all_busy_done(){
                this.busy_done(0)
                this.busy_done(1)
                this.busy_done(2)
            },
            //idx标签的繁忙状态关闭
            busy_done(idx){
                if(idx == 0)this.busy0 = false
                else if (idx == 1)this.busy1 = false
                else if (idx == 2)this.busy2 = false
            },
            //idx标签的繁忙状态开启
            busy_start(idx){
                if(idx == 0)this.busy0 = true
                else if (idx == 1)this.busy1 = true
                else if (idx == 2)this.busy2 = true
            },
            //获取idx标签的繁忙状态
            check_busy(idx){
                if(idx == 0)return this.busy0
                else if (idx == 1)return this.busy1
                else if (idx == 2)return this.busy2
            },
            //流加载
            loadMore(type){
                var that = this
                //即将加载第几页
                var active_page = 0
                if(this.first_loading)return
                //更新当前流加载的tab的页码数，并赋值给active_page
                if(type == 0){
                    this.question_page ++
                    active_page = this.question_page
                }else if(type == 1){
                    this.article_page ++
                    active_page = this.article_page
                }else if (type == 2){
                    this.user_page ++
                    active_page = this.user_page 
                }
                //当前tab的繁忙状态开启
                that.busy_start(type)
                //流加载查询
                this.$api.algorithm.vague_search(this.now_search,type,active_page).then(res => {
                    if (res.data.code === 1) {
                        //根据tab将数据追加到指定容器中
                        for(var i=0;i<res.data.data.length;i++){
                            if(type == 0){
                                that.questions.push(res.data.data[i])
                            }else if(type == 1){
                                that.articles.push(res.data.data[i])
                            }else if (type == 2){
                                that.users.push(res.data.data[i])
                            }
                        }
                        //当前tab的繁忙状态关闭
                        that.busy_done(type)
                    }
                })
            }
        },
        watch: {
            search(val) 
            {
                var that = this
                if (val == ""){
                    that.info_word = "请输入搜索内容"
                    return
                }
                //如果还没进入加载状态,重置2单位的输入延迟时间，表示用户输入未结束，暂时不进行加载
                if (!that.isLoading)that.counter = 2
                //如果还没进入加载状态，则输入延迟时间开始减少
                if(that.counter > 0 && !that.isLoading && uid == ""){
                    //打开倒计时
                    uid = setInterval(()=>{
                        //每次减少1单位时间
                        that.counter-=1
                        //若倒计时为0，则表示用户输入完毕，可以进行加载
                        if(that.counter ==0){
                            //判断用户输入的内容
                            if(that.search == ""){
                                //为空则不进行加载
                                that.info_word = "请输入搜索内容"
                            }else{
                                that.info_word = "正在加载..."
                            }
                            //清除上次的计时器，并重置计时器id
                            clearInterval(uid);
                            uid = ""
                            //空搜索值则不进行加载
                            if(that.search == "")return
                            //进入加载状态
                            that.isLoading = true
                            //进行加载
                            that.$api.algorithm.auto_complete(that.search).then(res => {
                                if (res.data.code === 1) {
                                    //获取匹配项
                                    that.items= res.data.data;
                                    //加载状态结束
                                    that.isLoading = false;
                                    //重置输入延迟时间
                                    that.counter = 2;
                                    //若无匹配项，更新提示语
                                    if(that.items.length == 0 && that.search != ""){
                                        that.info_word = "无匹配项"
                                    }
                                }
                            })
                        }
                    },300)
                }
            }
        },
        mounted(){
            var that = this
            this.search = this.$route.query.search;
            this.now_search = this.$route.query.search;
            this.model = this.search
            this.isLoading = false
            this.$api.algorithm.vague_search(this.search,3).then(res => {
                if (res.data.code === 1) {
                    this.questions = res.data.data[0];
                    this.articles = res.data.data[1];
                    this.users = res.data.data[2];
                    this.first_loading = false;
                    that.all_busy_done()
                }
            })
        }
    }
</script>

<style scoped>
    .head {
        z-index: 400;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        margin-bottom: 1em;
        background-color: #ffd633;
    }

    .line {
        z-index: 400;
        width: 100%;
        height: 4em;
        background-color: #eee;
    }

</style>
