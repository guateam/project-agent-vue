<template>
    <div class="user-detail">
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-btn icon @click="$router.back()">
                <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>账户详情</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>
        <div class="main">
            <div class="box" style="height: 6em">
                <div>头像</div>
                <div style="width: 5em;height: 5em;overflow: hidden;border-radius: 50%;">
                    <img :src="head_portrait" alt="img" style="width: 100%;height: 100%;border-radius: 50%">
                </div>
            </div>
            <v-divider></v-divider>
            <div class="box">
                <div>用户名</div>
                <div>{{nickname}}</div>
            </div>
            <v-divider></v-divider>
            <div class="box">
                <div>用户组</div>
                <div>{{group}}</div>
            </div>
            <v-divider></v-divider>
            <div class="box">
                <div>UID</div>
                <div>{{uid}}</div>
            </div>
            <v-divider></v-divider>
            <div class="box">
                <div>邮箱</div>
                <div>{{email}}</div>
            </div>
            <v-divider></v-divider>
            <div class="box" @click="$router.push({name:'verified'})">
                <div>实名认证</div>
                <div>{{verify}}</div>
            </div>
            <v-divider></v-divider>
            <div class="box">
                <div>签名</div>
                <div>{{description}}</div>
            </div>
            <v-divider></v-divider>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "user-detail",
        data() {
            return {
                nickname: '',
                head_portrait: 'https://www.asgardusk.com/images/none.png',
                group: '',
                email: '',
                verify: '未实名',
                description: '',
                tag: '',
                uid: ''
            }
        },
        mounted() {
            this.nickname = this.$store.state.userInfo.nickname;
            this.head_portrait = this.$store.state.userInfo.head_portrait;
            this.group = this.$store.state.userInfo.group.text;
            this.uid = this.$store.state.userInfo.user_id;
            this.email = this.$store.state.userInfo.email;
            this.verify = this.$store.state.userInfo.state === 2 ? '已实名' : '未实名';
            this.description = this.$store.state.userInfo.description;
        }
    }
</script>

<style scoped>
    .bigbox {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
    }

    .main {
        width: 100%;
        background-color: white;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3em;
        padding-left: 1em;
        padding-right: 1em;
    }
</style>
