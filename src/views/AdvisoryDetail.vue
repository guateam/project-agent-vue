<template>
    <div>
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.back()">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">咨询详情</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
            </div>
        </div>
        <div class="line"></div>
        <v-flex xs12 style="height: 200px;overflow: hidden">
            <img src="https://www.asgardusk.com/images/portfolio/3.png" alt="" style="height: 100%;
width: 100%;object-fit: cover">
        </v-flex>
        <v-layout row wrap style="height:70px">
            <v-flex xs2 style="padding-top: 10px" @click="$router.push({name:'detail',query:{id:data.user_id}})">
                <div style="height: 50px;width: 50px;border-radius: 50%;overflow:hidden;margin: 0 auto;">
                    <img src="https://www.asgardusk.com/images/none.png" alt="" style="width: 100%;height: 100%;">
                </div>
            </v-flex>
            <v-flex xs7
                    style="flex-direction: column;justify-content: space-between;line-height: 27px;padding-top: 10px; " @click="$router.push({name:'detail',query:{id:data.user_id}})">
                <div><h3>用户名</h3></div>
                <div>用户描述用户描述用户描述</div>
            </v-flex>
            <v-flex xs3 style="justify-content: center;align-items: center;display: flex;line-height: 1.5">
                <div :class="{unfollow:!follow,follow:follow}" @click="follow_user()"><h3>{{follow?'已关注':'关注'}}</h3>
                </div>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-flex xs12 style="line-height: 1.5;padding: 1em;">
            <p style="font-size: ">咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情咨询详情
                <br>
                情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询情咨询
            </p>
        </v-flex>
        <v-footer class="pa-3" style="padding-right: 1em;background-color: transparent;text-align: right">
            <v-spacer></v-spacer>
            <div>咨询于 <span style="color: #409eff">2019-03-03 15:23</span> <br> 截至时间 <span style="color: #409eff">2019-03-05 15:23</span> <br> 剩余时间：<span style="color: red">24h</span> </div>
        </v-footer>
        <div style="width: 100%;background-color: white;height: 65px">
        </div>
        <div style="position: fixed;bottom: 0;width: 100%;background-color: white;z-index: 100;height: 50px">
            <v-btn block color="#ffcc00" target="{name:''}">立即回答</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "advisory-detail",
        data() {
            return {
                word: '',
                data: {
                    content: '<h3><v-progress-circular indeterminate color="primary"></v-progress-circular><span style="margin-left: 1em">加载中</span></h3>'
                },
                comments: [],
                follow: false
            }
        },
        methods: {
            follow_user() {
                if (this.follow) {
                    this.$api.account.un_follow_user(this.data.user_id).then(res => {
                        if (res.data.code === 1) {
                            this.follow = false
                        }
                    })
                } else {
                    this.$api.account.follow_user(this.data.user_id).then(res => {
                        if (res.data.code === 1) {
                            this.follow = true
                        }
                    })
                }
            },
        },
        mounted() {
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

    .nickname {
        font-size: 1.5em;
    }

    .unfollow {
        border: 1px #ffcc00 solid;
        padding: 6px;
        border-radius: 3px;
        color: orange;
    }

    .follow {
        border: 1px #ffcc00 solid;
        padding: 6px;
        border-radius: 3px;
        color: white;
        background: #ffcc00;
    }
</style>
