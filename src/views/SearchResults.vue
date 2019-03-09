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
                    
                    <div :class="busy ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll="loadMore"
                         infinite-scroll-disabled="busy" infinite-scroll-distance="0" v-show="busy">
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
                    <div :class="busy ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll="loadMore"
                         infinite-scroll-disabled="busy" infinite-scroll-distance="0" v-show="busy">
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
                    <div :class="busy ? 'load-more-normal' : 'load-more-hide'" v-infinite-scroll="loadMore"
                         infinite-scroll-disabled="busy" infinite-scroll-distance="0" v-show="busy">
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
                questions:[],
                articles:[],
                users:[],
                counter:2,
                busy:true,
                info_word:"请输入搜索内容"
            }
        },
        methods:{
            research(){
                var that = this
                this.reset()
                this.$api.algorithm.vague_search(this.search,3).then(res => {
                    if (res.data.code === 1) {
                        this.questions = res.data.data[0];
                        this.articles = res.data.data[1];
                        this.users = res.data.data[2];
                        this.busy = false
                    }
                })
            },
            toggle(id) {
                this.$router.push({name: 'user', query: {id: id}});
            },
            reset(){
                this.questions = []
                this.articles = []
                this.users = []
                this.busy = true
            },
            loadMore(){
                return
            }
        },
        watch: {
            search(val) 
            {
                var that = this
                // Items have already been loaded
                // if (this.items.length > 0) return
                if (val == ""){
                    that.info_word = "请输入搜索内容"
                    return
                }
                if (!that.isLoading)that.counter = 2

                if(that.counter > 0 && !that.isLoading && uid == ""){
                    uid = setInterval(()=>{
                        that.counter-=1
                        if(that.counter ==0){
                            if(that.search == ""){
                                that.info_word = "请输入搜索内容"
                            }else{
                                that.info_word = "正在加载..."
                            }
                            clearInterval(uid);
                            uid = ""
                            if(that.search == "")return
                            that.isLoading = true
                            that.$api.algorithm.auto_complete(that.search).then(res => {
                                if (res.data.code === 1) {
                                    that.items= res.data.data;
                                    that.isLoading = false;
                                    that.counter = 2;
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
            this.model = this.search
            this.isLoading = false
            this.$api.algorithm.vague_search(this.search,3).then(res => {
                if (res.data.code === 1) {
                    this.questions = res.data.data[0];
                    this.articles = res.data.data[1];
                    this.users = res.data.data[2];
                    that.busy = false
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
