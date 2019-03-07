<template>
    <div class="wallet">
        <v-layout column fill-height>
            <v-flex shrink>
                <v-btn @click="$router.push({name: 'account'})" icon>
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </v-flex>
            <v-flex grow>
                <v-container fill-height>
                    <v-layout column fill-height>

                        <!--Balance-->
                        <v-flex xs4>
                            <v-layout align-center justify-center column fill-height>
                                <v-flex shrink>
                                    <span class="font--text">总资产(元)</span>
                                </v-flex>
                                <v-flex shrink>
                                    <span class="headline font-weight-bold">¥ 2,000.00</span>
                                </v-flex>
                                <v-flex shrink>
                                    <v-btn small color="success" flat outline>立即充值</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <!--Cards-->
                        <v-flex xs2>
                            <v-layout align-center justify-space-between row fill-height>
                                <v-flex xs5 fill-height>
                                    <v-card height="100%" color="purple" dark>
                                        <v-layout class="card-info" align-start justify-space-between column fill-height>
                                            <v-flex shrink>
                                                <span>专+学院</span>
                                                <h2>年费会员</h2>
                                            </v-flex>
                                            <v-flex shrink>
                                                <span>2020-10-10</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                                <v-flex xs5 fill-height>
                                    <v-card height="100%" color="blue-grey darken-2" dark>
                                        <v-layout class="card-info" align-start justify-space-between column fill-height>
                                            <v-flex shrink>
                                                <span>专+读书会</span>
                                                <h2>季度借阅卡</h2>
                                            </v-flex>
                                            <v-flex shrink>
                                                <span>2019-06-01</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                                <v-flex shrink fill-height>
                                    <v-card height="100%" color="grey darken-2" dark>
                                        <v-layout class="card-info" align-center justify-center column fill-height>
                                            <v-icon>more_vert</v-icon>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <!--Details-->
                        <v-flex xs5>
                            <v-tabs fixed-tabs>
                                <v-tab
                                    v-for="n in 3"
                                    :key="n"
                                >
                                    Item {{ n }}
                                </v-tab>
                            </v-tabs>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
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
            this.$emit('hiddenToolBar');
            this.getWallet()
        }
    }
</script>

<style scoped>
    .wallet {
        height: 100vh;
        font-family: Helvetica, Arial, sans-serif;
    }
    .card-info {
        padding: 8px;
    }
</style>
