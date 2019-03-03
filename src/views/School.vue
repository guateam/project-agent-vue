<template>
    <div class="school">
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>

            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>学院</span>
            </v-toolbar-title>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-tabs light slot="extension" v-model="tabs" color="primary" centered slider-color="secondary">
                <v-tab :key="0">推荐</v-tab>
                <v-tab :key="1">分类</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-card>
            <v-tabs-items v-model="tabs">
                <v-tab-item :key="0">
                    <v-flex xs12>
                        <v-carousel height="200" hide-delimiters class="banner-father">
                            <v-carousel-item
                                    v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                                    @click="jump_url(item.url)"
                            ><span class="banner">{{item.title}}</span></v-carousel-item>
                        </v-carousel>
                    </v-flex>
                    <v-container grid-list-md>
                        <v-layout row wrap>

                            <v-flex xs6 v-for="(value,i) in recommends" :key="i">
                                <v-hover>
                                    <v-card
                                            slot-scope="{ hover }"
                                            :class="`elevation-${hover ? 12 : 2}`"
                                            class="mx-auto"
                                            width="200"
                                            @click="jump_article(value.id)"
                                    >
                                        <v-img
                                                :aspect-ratio="16/9"
                                                :src="value.img"
                                        ></v-img>
                                        <v-card-title>
                                            <div>
                                                <span><b>{{value.title}}</b></span>
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
                         infinite-scroll-disabled="busy" infinite-scroll-distance="0">
                        <h3>
                            <v-progress-circular
                                    indeterminate
                                    color="primary"
                            ></v-progress-circular>
                            <span style="margin-left: 1em">加载中</span></h3>
                    </div>
                    <div class="bottom"></div>
                </v-tab-item>
                <v-tab-item :key="1"></v-tab-item>
            </v-tabs-items>
        </v-card>

    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                category: 0,
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    }
                ],
                tabs: 0,
                bottomNav: 1,
                page:0,
                busy:false,
                recommends: [
                    {
                        title: '如何在FPS游戏中不TK',
                        tags: ['Fps', '技巧'],
                        id: '1',
                        img: ''
                    }, {
                        title: '如何在反恐战争中拯救人质',
                        tags: ['Fps', '彩虹六号'],
                        id: '1',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548771944982&di=72e1d87081483158fb57455a3fef5129&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8e081d086577cb5ba842096c662ac494208464b1.jpg'
                    },
                    {
                        title: '外婆曾经说过',
                        tags: ['Fps', '拆迁'],
                        id: '1',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548771986088&di=761da3b54ab86da44d4c16cc8cd89225&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F09%2F03%2F147288408009059060.PNG'
                    },
                    {
                        title: '奶奶曾经说过',
                        tags: ['逼逼', '技巧'],
                        id: '1',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548772012652&di=66a52b894185f336f672a4eae706788d&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2F5_g7UgeCWDPXVATNUbz0_A%3D%3D%2F6608490393933711006.jpg'
                    },
                    {
                        title: '鸡兔同笼',
                        tags: ['唯心主义', '理论'],
                        id: '1',
                        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548772037655&di=f6d8051371b44d81eb8b20e70e7237f6&imgtype=0&src=http%3A%2F%2Fwanjuimg.5054399.com%2Fallimg%2F180104%2F33_180104104149_1.jpg'
                    },
                    {
                        title: '救人',
                        tags: ['Fps', '辅助'],
                        id: '1',
                        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3222402995,1292973749&fm=11&gp=0.jpg'
                    }
                ]
            }
        },
        methods: {
            get_recommend_article() {
                this.$api.school.get_recommend_article(this.page).then(res => {
                    if (res.data.code === 1) {
                        if(this.page===0){
                            this.recommends=[]
                        }
                        res.data.data.forEach(value => {
                            this.recommends.push({
                                title: value['title'],
                                tags: value['tags'],
                                img: value['cover'],
                                id: value['articleID']
                            })
                        });
                        this.page++;
                        this.busy=false;
                    }
                })
            },
            get_activities() {
                this.$api.activities.get_activities(2).then(res => {
                    if (res.data.code === 1) {
                        let data = [];
                        res.data.data.forEach(value => {
                            data.push({
                                title: value['title'],
                                src: value['cover'],
                                url: value['url']
                            })
                        });
                        this.items = data;
                    }
                })
            },
            jump_url(url) {
                this.$router.push({name: 'browser', query: {url: url}});
            },
            jump_article(id) {
                this.$router.push({name: 'article', query: {id: id}})
            },
            loadMore(){
                this.busy=true;
                this.get_recommend_article()
            }
        },
        mounted() {
            this.get_recommend_article();
            this.get_activities();
        }
    }
</script>

<style scoped>
    .bottom {
        margin-bottom: 1.7em;
    }

    .banner {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 1.3em;
        color: rgba(255, 255, 255, 0.9);
    }

    .banner-father {
        position: relative;
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
