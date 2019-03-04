<template>
    <div class="bigbox">
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.push({name:'topic'})">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">创作中心</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
            </div>
        </div>
        <div class="line"></div>
        <Scroll :data="topimgs" style="z-index: 200">
            <v-flex xs12>
                <v-carousel hide-delimiters height="200px">
                    <v-carousel-item
                            v-for="(item,i) in topimgs"
                            :key="i"
                            :src="item.src"
                    >
                        <span class="banner">{{item.title}}</span>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs3 style="align-items: center;justify-content: space-between;flex-direction: column">
                        <div>
                            <v-icon large color="#99FF00">event_note</v-icon>
                        </div>
                        <div style="margin-top: 5px">回答管理</div>
                    </v-flex>
                    <v-flex xs3 style="align-items: center;justify-content: space-between;flex-direction: column">
                        <div>
                            <v-icon large color="#99FFFF">library_books</v-icon>
                        </div>
                        <div style="margin-top: 5px">文章管理</div>
                    </v-flex>
                    <v-flex xs3 style="align-items: center;justify-content: space-between;flex-direction: column">
                        <div>
                            <v-icon large color="#FF3300">people</v-icon>
                        </div>
                        <div style="margin-top: 5px">粉丝管理</div>
                    </v-flex>
                    <v-flex xs3 style="align-items: center;justify-content: space-between;flex-direction: column">
                        <div>
                            <v-icon large color="#CC66CC">question_answer</v-icon>
                        </div>
                        <div style="margin-top: 5px">互动管理</div>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs3 style="align-items: center;justify-content: space-between;flex-direction: column">
                        <div>
                            <v-icon large color="#FFFF33">access_time</v-icon>
                        </div>
                        <div style="margin-top: 5px">预约管理</div>
                    </v-flex>
                    <v-flex xs3 style="align-items: center;justify-content: space-between;flex-direction: column">
                        <div>
                            <v-icon large color="#6699FF">
                                account_balance_wallet
                            </v-icon>
                        </div>
                        <div style="margin-top: 5px">创作收益</div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-divider></v-divider>
            <v-layout row wrap style="line-height: 1.5;height: 40px;align-items: center;justify-content: center;">
                <v-flex xs2 style="text-align: center">
                    <v-icon color="#FF0066">volume_up</v-icon>
                </v-flex>
                <v-flex xs9>
                    <h3>你有一份新的收益周报待查看</h3>
                </v-flex>
                <v-flex xs1>
                    <v-icon color="black">chevron_right</v-icon>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap style="line-height: 1.5;height: 40px;align-items: center;justify-content: center;">
                <v-flex xs11>
                    <h3>数据中心</h3>
                </v-flex>
                <v-flex xs1>
                    <v-icon color="black">chevron_right</v-icon>
                </v-flex>
            </v-layout>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs4 style="align-items: center;flex-direction: column;border-right: 1px solid #eee">
                        <div style="margin-top: 5px">粉丝</div>
                        <div style="margin-top: 5px">24369</div>
                        <div style="margin-top: 5px;color: #FF0033">
                            <v-icon large color="#FF0033" small>
                                keyboard_arrow_up
                            </v-icon>
                            366
                        </div>
                    </v-flex>
                    <v-flex xs4 style="align-items: center;flex-direction: column;border-right: 1px solid #eee">
                        <div style="margin-top: 5px">回答浏览</div>
                        <div style="margin-top: 5px">5465465</div>
                        <div style="margin-top: 5px;color: #99FF00">
                            <v-icon large color="#99FF00" small>
                                keyboard_arrow_down
                            </v-icon>
                            366
                        </div>
                    </v-flex>
                    <v-flex xs4 style="align-items: center;flex-direction: column">
                        <div style="margin-top: 5px">文章阅读</div>
                        <div style="margin-top: 5px">54655</div>
                        <div style="margin-top: 5px;color: #99FF00">
                            <v-icon large color="#99FF00" small>
                                keyboard_arrow_down
                            </v-icon>
                            5566
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs4 style="align-items: center;flex-direction: column;border-right: 1px solid #eee">
                        <div style="margin-top: 5px">点赞</div>
                        <div style="margin-top: 5px">24369</div>
                        <div style="margin-top: 5px;color: #FF0033">
                            <v-icon large color="#FF0033" small>
                                keyboard_arrow_up
                            </v-icon>
                            366
                        </div>
                    </v-flex>
                    <v-flex xs4 style="align-items: center;flex-direction: column;border-right: 1px solid #eee">
                        <div style="margin-top: 5px">收藏</div>
                        <div style="margin-top: 5px">5465465</div>
                        <div style="margin-top: 5px;color: #99FF00">
                            <v-icon large color="#99FF00" small>
                                keyboard_arrow_down
                            </v-icon>
                            366
                        </div>
                    </v-flex>
                    <v-flex xs4 style="align-items: center;flex-direction: column">
                        <div style="margin-top: 5px">收入</div>
                        <div style="margin-top: 5px">54655</div>
                        <div style="margin-top: 5px;color: #99FF00">
                            <v-icon large color="#99FF00" small>
                                keyboard_arrow_down
                            </v-icon>
                            5566
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </Scroll>
    </div>
</template>

<script>
    import Scroll from '../components/Scroll'

    export default {
        name: "creation-manager",
        components: {
            Scroll
        },
        data() {
            return {
                bottomNav: 0,
                topimgs: [
                    {
                        src: 'https://www.asgardusk.com/images/portfolio/3.png',
                        title: '创作新秀激励奖第二期启动'
                    },
                    {
                        src: 'https://www.asgardusk.com/images/portfolio/4.png',
                        title: '我的废柴发明'
                    },
                    {
                        src: 'https://www.asgardusk.com/images/portfolio/6.png',
                        title: '专+星研会'
                    },
                    {
                        src: 'https://www.asgardusk.com/images/portfolio/7.png',
                        title: '我心中的镇站之宝'
                    }
                ]
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>

    .bigbox {
        z-index: 200;
    }

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

    .banner {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 1.3em;
        color: rgba(255, 255, 255, 0.9);
    }
</style>
