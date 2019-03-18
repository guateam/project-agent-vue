<template>
    <div>
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.push({name:'topic'})">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">咨询管理</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
                清空
            </div>
        </div>
        <div class="line"></div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap style="height: 200px;margin: 5px auto">
                <v-flex xs12 style="text-align: left"><h2>加载中...</h2></v-flex>
                <v-flex xs8 style="text-align: left">
                    <v-flex xs12 style="height: 25%"><h4>咨询人：<span style="color: lightskyblue">加载中...</span><span
                            style="padding: 0.2em;border: 1px solid #ffcc00;color: #ffcc00;margin-left: 0.5em">从业者</span>
                    </h4></v-flex>
                    <v-flex xs12 style="height: 25%"><h4>咨询费用：<span style="color: lightskyblue">加载..</span></h4></v-flex>
                    <v-flex xs12 style="height: 25%"><h4>咨询时间：<span style="color: lightskyblue">加载中..&nbsp;&nbsp;&nbsp;加载中..</span>
                    </h4></v-flex>
                    <v-flex xs12 style="height: 25%"><h4>剩余时间：<span style="color: lightskyblue">加载中...</span></h4></v-flex>
                </v-flex>
                <v-flex xs4 style=" display: flex;justify-content: flex-end;align-items: flex-end;">
                    <div style="width: 100%">
                    <v-btn color="error">删除</v-btn>
                    <v-btn color="info">查看详情</v-btn>
                    </div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap style="height: 200px;margin: 5px auto">
                <v-flex xs12 style="text-align: left"><h2>加载中...</h2></v-flex>
                <v-flex xs8 style="text-align: left">
                    <v-flex xs12 style="height: 25%"><h4>咨询人：<span style="color: lightskyblue">加载中..</span><span
                            style="padding: 0.2em;border: 1px solid #ffcc00;color: #ffcc00;margin-left: 0.5em">加载中..</span>
                    </h4></v-flex>
                    <v-flex xs12 style="height: 25%"><h4>咨询费用：<span style="color: lightskyblue">加载中..</span></h4></v-flex>
                    <v-flex xs12 style="height: 25%"><h4>咨询时间：<span style="color: lightskyblue">加载中..&nbsp;&nbsp;&nbsp;加载中..</span>
                    </h4></v-flex>
                    <v-flex xs12 style="height: 25%"><h4>剩余时间：<span style="color: lightskyblue">加载中..</span></h4></v-flex>
                </v-flex>
                <v-flex xs4 style=" display: flex;justify-content: flex-end;align-items: flex-end;">
                    <div style="width: 100%">
                        <v-btn color="error">删除</v-btn>
                        <v-btn color="info">查看详情</v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "advisory-list"
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
</style>
