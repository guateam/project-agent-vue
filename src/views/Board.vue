<template>
    <div>
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>
            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>告示板</span>
            </v-toolbar-title>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-tabs light slot="extension" v-model="tabs" color="primary" centered slider-color="secondary">
                <v-tab :key="0">推荐</v-tab>
                <v-tab :key="1">分类</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tabs">
            <v-tab-item :key="0">
                <v-container grid-list-md text-xs-center>
                    <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                        <v-flex xs4 style="height: 100%">
                            <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                                 style="width: 100%;height: 100%;object-fit: cover">
                        </v-flex>
                        <v-flex xs8
                                style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                            <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>发布单位：<span
                                    style="color: blue;">scgirl电竞联盟</span></h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                <span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                        </v-flex>
                    </v-layout>


                    <!--测试滚动的无意义复制 STAR-->

                    <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                        <v-flex xs4 style="height: 100%">
                            <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                                 style="width: 100%;height: 100%;object-fit: cover">
                        </v-flex>
                        <v-flex xs8
                                style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                            <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>发布单位：<span
                                    style="color: blue;">scgirl电竞联盟</span></h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                <span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                        <v-flex xs4 style="height: 100%">
                            <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                                 style="width: 100%;height: 100%;object-fit: cover">
                        </v-flex>
                        <v-flex xs8
                                style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                            <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>发布单位：<span
                                    style="color: blue;">scgirl电竞联盟</span></h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                <span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                        <v-flex xs4 style="height: 100%">
                            <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                                 style="width: 100%;height: 100%;object-fit: cover">
                        </v-flex>
                        <v-flex xs8
                                style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                            <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>发布单位：<span
                                    style="color: blue;">scgirl电竞联盟</span></h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                <span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                        <v-flex xs4 style="height: 100%">
                            <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                                 style="width: 100%;height: 100%;object-fit: cover">
                        </v-flex>
                        <v-flex xs8
                                style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                            <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>发布单位：<span
                                    style="color: blue;">scgirl电竞联盟</span></h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                <span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                        <v-flex xs4 style="height: 100%">
                            <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                                 style="width: 100%;height: 100%;object-fit: cover">
                        </v-flex>
                        <v-flex xs8
                                style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                            <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>发布单位：<span
                                    style="color: blue;">scgirl电竞联盟</span></h4></div>
                            <div style="height: 25%;display: flex;align-items: center;"><h4>
                                <span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                        </v-flex>
                    </v-layout>


                    <!--测试滚动的无意义复制 END-->


                </v-container>
            </v-tab-item>
            <v-tab-item :key="1">
                <Row>

                    <!--尝试修复菜单栏滚动，失败了-->

                    <Col span="10" style="background-color: white;position: fixed;left: 0;overflow: scroll;height: 82%">

                        <Col span="24">
                            <Menu Menu theme="light" width="auto" accordion @on-open-change="menu_change">
                                <Submenu :name="item.id" v-for="item in menu">
                                    <template slot="title">
                                        {{item.name}}
                                    </template>
                                    <MenuItem :name="value.id" @click.native="change(value.id)"
                                              v-for="value in item.children">{{value.name}}
                                    </MenuItem>
                                </Submenu>
                            </Menu>
                        </Col>

                    </Col>
                    <Col span="14" offset="10">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-card>
                                    <v-list two-line>

                                        <!--<v-list-tile-->
                                        <!--:key="item.articleID"-->
                                        <!--avatar-->
                                        <!--ripple-->
                                        <!--@click="toggle(index)"-->
                                        <!--&gt;-->
                                        <!--<div style="width: 4em;height: 65px;background-color: red;margin-right: 1em">-->
                                        <!--<img :src="item.cover"-->
                                        <!--style="width: 100%;height: 100%; object-fit: cover;"/>-->
                                        <!--</div>-->
                                        <!--<v-list-tile-content>-->
                                        <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
                                        <!--<v-list-tile-sub-title>作者: {{ item.nickname }}-->
                                        <!--</v-list-tile-sub-title>-->
                                        <!--</v-list-tile-content>-->


                                        <!--</v-list-tile>-->
                                        <v-hover v-for="value in articles" style="margin-bottom: 0.5em">
                                            <v-card
                                                    slot-scope="{ hover }"
                                                    :class="`elevation-${hover ? 12 : 2}`"
                                                    class="mx-auto"
                                                    @click="jump_article(value.articleID)"
                                            >
                                                <v-img
                                                        :aspect-ratio="16/9"
                                                        :src="value.cover"
                                                        style="height: 5em"
                                                ></v-img>
                                                <v-card-title>
                                                    <div>
                                                        <span><b>{{value.title}}</b></span>
                                                        <div>
                                                            <div class="grey--text text--darken-2">
                                                                作者：{{value.nickname}}
                                                                <span class="right green--text"
                                                                      style="margin-left: 10em" v-if="value.free!==1">
                                                                        ￥{{value.price}}
                                                                    </span>
                                                                <span class="right red--text" style="margin-left: 10em"
                                                                      v-if="value.free===1">免费
                                                                    </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </v-card-title>
                                            </v-card>
                                        </v-hover>
                                        <div v-if="articles.length===0" class="nothing">
                                            <h3>暂无内容</h3>
                                        </div>
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </Col>
                </Row>
            </v-tab-item>
        </v-tabs-items>

        <v-footer app v-if="$route.path !== '/login' && $route.path !== '/register'">
            <bottomNav :bottom-nav="'board'"></bottomNav>
        </v-footer>
    </div>
</template>

<script>
    import bottomNav from '../components/bottomNav';

    export default {
        name: "board",
        components: {bottomNav},
        data() {
            return {
                tabs: 0,
                articles: [],
                cityList: [
                    {
                        value: '人工智能',
                        label: '人工智能'
                    },
                    {
                        value: '射频技术',
                        label: '射频技术'
                    },
                    {
                        value: '绿色能源',
                        label: '绿色能源'
                    },
                    {
                        value: '水处理技术',
                        label: '水处理技术'
                    },
                    {
                        value: '还有啥忘了',
                        label: '还有啥忘了'
                    },
                    {
                        value: '再凑一个',
                        label: '再凑一个'
                    }
                ],
                model11: '',
                model12: [],
                menu: [],
            }
        },
        methods: {
            get_tag_tree() {
                this.$api.tags.get_tag_tree().then(res => {
                    if (res.data.code === 1) {
                        this.menu = res.data.data;
                        this.change(this.menu[0].id);
                    }
                })
            }
        }
        ,
        mounted() {
            this.get_tag_tree();
        }
    }
</script>

<style scoped>
    .nothing {
        text-align: center;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
</style>
