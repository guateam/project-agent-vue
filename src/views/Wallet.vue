<template>
    <div class="wallet">
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>

            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>话题</span>
            </v-toolbar-title>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md3>
                    <v-card color="white lighten-2" dark>
                        <v-layout row wrap>
                            <v-flex d-flex>
                                <v-layout row wrap>
                                    <v-flex d-flex xs6>
                                        <v-card color="blue lighten-2" dark>
                                            <v-card-text
                                                    style="display: flex ;align-items: center;justify-content: center;">
                                                余额: ￥{{wallet}}
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex d-flex xs6>
                                        <v-card color="blue lighten-2" dark>
                                            <v-card-text
                                                    style="display: flex ;align-items: center;justify-content: center;">
                                                卡券
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md3 style="margin-top: 2em">
                    <v-layout row wrap>
                        <v-flex d-flex>
                            <v-layout row wrap>
                                <v-flex
                                        v-for="item in items"
                                        @click="$router.push(item.name)"
                                        d-flex
                                        xs12
                                >
                                    <v-card
                                            color="red lighten-2"
                                            dark
                                    >
                                        <v-card-text>
                                            {{ item.title }}
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "wallet",
        data() {
            return {
                items: [
                    {title: '交易记录', name: 'oldpost'},
                    {title: '积分', name: 'collection'},
                    {title: '地址管理', name: 'wallet'},
                    {title: '设置', name: 'settings'},
                    {title: '客服中心  ', name: 'settings'},
                ],
                wallet: 0
            }
        },
        methods: {
            getWallet() {

                this.$api.account.get_account_balance().then((res) => {
                    if (res.data.code === 1) {
                        this.wallet = res.data.data
                    }
                })

            }
        },
        mounted() {
            this.getWallet()
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
</style>
