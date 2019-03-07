<template>
    <div>
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.back()">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">内容搜索</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
            </div>
        </div>
        <div class="line"></div>
        <v-toolbar
                color="#ffd633"
                prominent
                tabs
        >
            <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    chips
                    clearable
                    hide-details
                    hide-selected
                    item-text="name"
                    item-value="symbol"
                    label="搜索你想要的内容"
                    solo
            >
                <template v-slot:no-data>
                    <v-list-tile>
                        <v-list-tile-title>
                            Search for your favorite
                            <strong>Cryptocurrency</strong>
                        </v-list-tile-title>
                    </v-list-tile>
                </template>
                <template v-slot:selection="{ item, selected }">
                    <v-chip
                            :selected="selected"
                            color="blue-grey"
                            class="white--text"
                    >
                        <v-icon left>mdi-coin</v-icon>
                        <span v-text="item.name"></span>
                    </v-chip>
                </template>
                <template v-slot:item="{ item }">
                    <v-list-tile-avatar
                            color="indigo"
                            class="headline font-weight-light white--text"
                    >
                        {{ item.name.charAt(0) }}
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-text="item.symbol"></v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon>mdi-coin</v-icon>
                    </v-list-tile-action>
                </template>
            </v-autocomplete>
            <v-toolbar-title class="title"><v-icon large color="white" @click="$router.push({name:'search-results'})">search</v-icon></v-toolbar-title>
        </v-toolbar>
        <v-flex xs12 style="margin-top: 2em">
            <h4>热门搜索</h4>
            <div class="hotbox"><v-icon small color="red">whatshot</v-icon>没有只狼玩我要死了 <v-icon small style="float:right;margin-right: 2em">call_made</v-icon> </div>
            <div class="hotbox">湖人无缘季后赛<v-icon small style="float:right;margin-right: 2em">call_made</v-icon></div>
            <div class="hotbox">Maru被$O$吊打，智商碾压<v-icon small style="float:right;margin-right: 2em">call_made</v-icon></div>
            <div class="hotbox">夏目友人帐<v-icon small style="float:right;margin-right: 2em">call_made</v-icon></div>
            <div class="hotbox">熊猫直播官服<v-icon small style="float:right;margin-right: 2em">call_made</v-icon></div>
        </v-flex>
        <v-flex xs12 style="margin-top: 2em">
            <h4>历史记录</h4>
            <div class="hotbox">没有只狼玩我要死了 <v-icon small style="float:right;margin-right: 2em">close</v-icon> </div>
            <div class="hotbox">湖人无缘季后赛<v-icon small style="float:right;margin-right: 2em">close</v-icon></div>
            <div class="hotbox">Maru被$O$吊打，智商碾压<v-icon small style="float:right;margin-right: 2em">close</v-icon></div>
            <div class="hotbox">夏目友人帐<v-icon small style="float:right;margin-right: 2em">close</v-icon></div>
            <div class="hotbox">熊猫直播官服<v-icon small style="float:right;margin-right: 2em">close</v-icon></div>
        </v-flex>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                isLoading: false,
                items: [],
                model: null,
                search: null
            }
        },
        watch: {
            search(val) {
                // Items have already been loaded
                if (this.items.length > 0) return

                this.isLoading = true

                // Lazily load input items
                fetch('https://api.coinmarketcap.com/v2/listings/')
                    .then(res => res.json())
                    .then(res => {
                        this.items = res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false))
            }
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

    .hotbox {
        padding: 0.5em;
        line-height: 1.5;
        margin: 6px;
        width: 100%;
        border-bottom: 1px #eee solid;
    }
</style>
