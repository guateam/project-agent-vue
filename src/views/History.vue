<template>
    <div class="history">
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>

            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>历史纪录</span>
            </v-toolbar-title>

            <v-btn icon>
                <v-icon>delete</v-icon>
            </v-btn>

            <v-tabs slot="extension" v-model="active" centered color="primary" slider-color="secondary">
                <v-tab v-for="(tab, tab_idx) in tabs" :key="tab_idx">{{ tab.title }}</v-tab>
            </v-tabs>
        </v-toolbar>
        <v-card>
            <v-tabs-items v-model="active">
                <v-tab-item
                        v-for="n in tabs.length"
                        :key="n"
                >
                    <v-list>
                        <template v-for="(item, index) in items[n-1]">
                            <v-list-tile
                                    :key="item.title"
                                    avatar
                                    ripple
                                    @click="toggle(item.id,n-1)"
                            >
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title class="text--primary">{{ item.headline }}
                                    </v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                                </v-list-tile-action>

                            </v-list-tile>
                            <v-divider
                                    v-if="index + 1 < items[n-1].length"
                                    :key="index"
                                    style="margin-bottom: 0.5em;margin-top: 0.5em"
                            ></v-divider>
                        </template>
                    </v-list>

                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "History",
        data() {
            return {
                active:0,
                tabs: [
                    {title: '回答'},
                    {title: '提问'},
                    {title: '文章'},
                ],
                items:[]
            }
        }
    }
</script>

<style scoped>

</style>