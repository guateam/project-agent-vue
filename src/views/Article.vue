<template>
    <div>
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.back()">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">文章详情</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
            </div>
        </div>
        <div class="line"></div>
        <v-container grid-list-md text-xs-center>
            <v-layout row>
                <v-flex xs4 style="padding: 0;">
                    <div style="width: 100%;height: 100%">
                        <img src="https://www.asgardusk.com/images/portfolio/1.png" alt=""
                             style="width: 90%;height: 150px;object-fit: cover">
                    </div>
                </v-flex>
                <v-flex xs8 style="height: 150px;text-align: left;justify-content: center;line-height: 1.5;">
                    <div class="title_box_item" style="width: 100%;height: 25%;">
                        <h2>5G柔性材料天线探讨</h2>
                    </div>
                    <div class="title_box_item" style="width: 100%;height: 25%;">
                        <h3>大漠孤烟</h3>
                        <div style="margin-left: 5px;color:#66ccff; border: #66ccff 2px solid;padding: 1px 6px;border-radius: 25%">
                            专家lv.4
                        </div>
                    </div>
                    <div class="title_box_item" style="width: 100%;height: 25%;padding: 0 !important;">
                        <v-rating v-model="rating" style="padding: 0 !important;" readonly></v-rating>
                        <h3>{{rating}}分</h3>
                    </div>
                    <div class="title_box_item" style="width: 100%;height: 25%;">
                        <p>射频技术</p>/<p>人工智能</p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs3
                    style="align-items: center;justify-content: space-between;flex-direction: column;text-align: center;padding-top: 10px;padding-bottom: 10px;border-right: 1px solid #eee;">
                <div>收藏</div>
                <div style="margin-top: 5px">5757</div>
            </v-flex>
            <v-flex xs3
                    style="align-items: center;justify-content: space-between;flex-direction: column;text-align: center;padding-top: 10px;padding-bottom: 10px;border-right: 1px solid #eee;">
                <div>阅读人数</div>
                <div style="margin-top: 5px">4755</div>
            </v-flex>
            <v-flex xs3
                    style="align-items: center;justify-content: space-between;flex-direction: column;text-align: center;padding-top: 10px;padding-bottom: 10px;border-right: 1px solid #eee;">
                <div>综合评价</div>
                <div style="margin-top: 5px">3分</div>
            </v-flex>
            <v-flex xs3
                    style="align-items: center;justify-content: space-between;flex-direction: column;text-align: center;padding-top: 10px;padding-bottom: 10px">
                <div>还有个啥</div>
                <div style="margin-top: 5px">354</div>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <div style="padding: 1em;line-height: 1.5;">
            <h3 style="margin-bottom: 1.1em;font-size: 1.2em">文章简介</h3>
            <p class="topicdetail">
                <span v-if="!showAll_one">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.length > 80 ? content.substring(0, 80) + '...' : content }} </span>
                <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content }} </span>
                <button id="show-all-button" v-if="content.length > 80" @click="showAll_one = !showAll_one">
                    <span v-if="!showAll_one" style="color: blue">显示全部</span>
                    <span v-else style="color: blue">收起</span>
                </button>
            </p>
        </div>
        <v-divider></v-divider>
        <div style="padding: 1em;line-height: 1.5;">
            <h3 style="margin-bottom: 1.1em;font-size: 1.2em">作者简介</h3>
            <v-layout row wrap>
                <v-flex xs3>
                    <div style="width: 65px;height: 65px;overflow:hidden;border-radius: 50%">
                        <img src="https://www.asgardusk.com/images/none.png" alt="" style="width: 100%;
height: 100%;border-radius: 50%">
                    </div>
                </v-flex>
                <v-flex xs9>
                    <p class="topicdetail">
                        <span v-if="!showAll_two">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.length > 100 ? content.substring(0, 100) + '...' : content }} </span>
                        <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content }} </span>
                        <button id="show-all-button" v-if="content.length > 80" @click="showAll_two = !showAll_two">
                            <span v-if="!showAll_two" style="color: blue">显示全部</span>
                            <span v-else style="color: blue">收起</span>
                        </button>
                    </p>
                </v-flex>
            </v-layout>
        </div>
        <v-divider></v-divider>
        <div style="padding: 1em;line-height: 1.5;">
            <h3 style="margin-bottom: 1.1em;font-size: 1.2em">文章评价</h3>
            <v-layout row wrap style="padding-bottom: 10px;margin-top: 10px">
                <v-flex xs3>
                    <div style="width: 55px;height: 55px;overflow:hidden;border-radius: 50%">
                        <img src="https://www.asgardusk.com/images/none.png" alt="" style="width: 100%;
height: 100%;border-radius: 50%">
                    </div>
                </v-flex>
                <v-flex xs9>
                    <h4>这是一个用户名</h4>
                    <p class="topicdetail">
                        <span v-if="!showAll_three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.length > 30 ? content.substring(0, 30) + '...' : content }} </span>
                        <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content }} </span>
                        <button id="show-all-button" v-if="content.length > 30" @click="showAll_three = !showAll_three">
                            <span v-if="!showAll_three" style="color: blue">显示全部</span>
                            <span v-else style="color: blue">收起</span>
                        </button>
                    </p>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap style="padding-bottom: 10px;margin-top: 10px">
                <v-flex xs3>
                    <div style="width: 55px;height: 55px;overflow:hidden;border-radius: 50%">
                        <img src="https://www.asgardusk.com/images/none.png" alt="" style="width: 100%;
height: 100%;border-radius: 50%">
                    </div>
                </v-flex>
                <v-flex xs9>
                    <h4>这是一个用户名</h4>
                    <p class="topicdetail">
                        <span v-if="!showAll_three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.length > 30 ? content.substring(0, 30) + '...' : content }} </span>
                        <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content }} </span>
                        <button id="show-all-button" v-if="content.length > 30" @click="showAll_three = !showAll_three">
                            <span v-if="!showAll_three" style="color: blue">显示全部</span>
                            <span v-else style="color: blue">收起</span>
                        </button>
                    </p>
                </v-flex>
            </v-layout>
        </div>
        <!--占位的盒子   STAR-->
        <v-flex xs12 style="height: 70px;background-color: white"></v-flex>
        <!--占位的盒子   END-->
        <v-container grid-list-md text-xs-center
                     style="position: fixed;bottom: 0;height: 60px;background: white;z-index: 100;width: 100%;padding:0;padding-top:5px;border-top:1px #ccc solid; align-items: center;">
            <v-layout row style="height: 100%;align-items: center;">
                <v-flex xs2 style="align-items: center;justify-content: space-between;flex-direction: column;border-right: 1px solid #ccc">
                    <div>
                        <v-icon color="primary">favorite_border</v-icon>
                    </div>
                    <div style="margin-top: 5px">收藏</div>
                </v-flex>
                <v-flex xs2 style="align-items: center;justify-content: space-between;flex-direction: column;border-right: 1px solid #ccc">
                    <div>
                        <v-icon color="primary">share</v-icon>
                    </div>
                    <div style="margin-top: 5px">分享</div>
                </v-flex>
                <v-flex xs8 style="background-color: orange;height: 100%;line-height: 48px" @click="$router.push({name:'article-read'})">
                    <h2 style="color: white">立即参与（￥<span>39</span>）</h2>
                </v-flex>
            </v-layout>
        </v-container>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "article",
        data() {
            return {
                rating: 3,
                content: '为了研究柔性天线面弹性变形对漂浮基星载天线的扰动,采用固定界面模态综合法和Lagrange方法,通过轴末端与天线面交界面的协调关系,推导了大范围运动的星载天线刚柔耦合动力学模型,其所建立的动力学模型计算效率高并具有足够的精度。分析了柔性天线面弹性变形对星载天线的扰动,利用PD+振动力反馈控制抑制系统振动,并基于Lyapunov方法证明了控制系统的渐近稳定性。仿真结果表明:天线工作过程激起了柔性天线面弹性振动,进而引起星载天线的抖动,严重影响了星载天线的指向精度;利用其控制策略能快速抑制系统振动。结论对天线指向精度的分析与控制具有重要的理论价值及工程实际意义。',
                showAll_one: false,
                showAll_two: false,
                showAll_three: false
            }
        }
    }
</script>

<style scoped>
    .head {
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
        width: 100%;
        height: 4em;
        background-color: #eee;
    }

    .title_box_item {
        width: 100%;
        height: 25%;
        display: flex;
        align-items: center;
    }

    .v-chip__content {
        padding: 6px !important;
    }

    .v-rating, .v-icon {
        padding: 0 !important;
    }
</style>
