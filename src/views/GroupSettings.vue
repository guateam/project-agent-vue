<template>
    <div class="group-settings">
        <v-layout column fill-height>
            <v-flex shrink>
                <v-btn @click="$router.go(-1)" icon>
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </v-flex>

            <v-flex grow>
                <v-container fill-height>
                    <v-layout column fill-height>
                        <v-flex xs1>
                            <v-layout align-center row fill-height>
                                <v-flex shrink>
                                    <span class="title font-weight-bold">群聊</span>
                                </v-flex>

                                <v-flex grow>
                                    <div class="text-xs-right subheading grey--text">{{ title }}</div>
                                </v-flex>

                                <v-flex shrink>
                                    <v-icon>navigate_next</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <v-divider></v-divider>

                        <v-flex xs4>成员</v-flex>

                        <v-divider></v-divider>

                        <v-flex xs1>
                            <v-layout align-center row fill-height>
                                <v-flex shrink>
                                    <span class="title font-weight-bold">我的昵称</span>
                                </v-flex>

                                <v-flex grow>
                                    <div class="text-xs-right subheading grey--text">{{ myGroupInfo.nickname }}</div>
                                </v-flex>

                                <v-flex shrink>
                                    <v-icon>navigate_next</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <v-divider></v-divider>

                        <v-flex grow>管理选项</v-flex>

                        <v-flex xs2>
                            <v-btn color="error" block>退出群组</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'GroupSettings',

        data() {
            return {
                groupId: this.$route.params.id,
                title: this.$route.params.title,
                myGroupInfo: {
                    nickname: this.$store.state.userInfo.nickname,
                },  // 我的群组信息
                memberList: [],
            }
        },

        methods: {
            initMembers() {
                this.$api.group.get_group_members(this.groupId).then(res => {
                    if (res.data.code === 1) {
                        let data = res.data.data;
                        data.forEach(member => {
                            this.memberList.push({
                                userId: member.userID,
                                nickname: member.nickname,
                                avatar: member.headportrait,
                            })
                        })
                    }
                })
            },  // 初始化成员
        },

        mounted() {
            this.initMembers()
        }
    }
</script>

<style scoped>
    .group-settings {
        height: 100vh;
        width: 100vw;
        font-family: Helvetica, Arial, sans-serif;
    }
</style>