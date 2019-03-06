<template>
    <div>
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>
            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>告示板</span>
            </v-toolbar-title>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-flex xs12>
            <Row style="width: 100%">
                <Col span="24">
                    <Select v-model="model12" filterable multiple size="large" placeholder="快速筛选">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
                        </Option>
                    </Select>
                </Col>
            </Row>
        </v-flex>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                <v-flex xs4 style="height: 100%">
                    <img src="https://www.asgardusk.com/images/portfolio/1.png" alt="" style="width: 100%;height: 100%;object-fit: cover">
                </v-flex>
                <v-flex xs8 style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                    <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4>要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4 >发布单位：<span style="color: blue;">scgirl电竞联盟</span></h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4><span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                </v-flex>
            </v-layout>



            <!--测试滚动的无意义复制 STAR-->

            <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                <v-flex xs4 style="height: 100%">
                    <img src="https://www.asgardusk.com/images/portfolio/1.png" alt="" style="width: 100%;height: 100%;object-fit: cover">
                </v-flex>
                <v-flex xs8 style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                    <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4>要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4 >发布单位：<span style="color: blue;">scgirl电竞联盟</span></h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4><span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                </v-flex>
            </v-layout>
            <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                <v-flex xs4 style="height: 100%">
                    <img src="https://www.asgardusk.com/images/portfolio/1.png" alt="" style="width: 100%;height: 100%;object-fit: cover">
                </v-flex>
                <v-flex xs8 style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                    <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4>要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4 >发布单位：<span style="color: blue;">scgirl电竞联盟</span></h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4><span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                </v-flex>
            </v-layout>
            <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                <v-flex xs4 style="height: 100%">
                    <img src="https://www.asgardusk.com/images/portfolio/1.png" alt="" style="width: 100%;height: 100%;object-fit: cover">
                </v-flex>
                <v-flex xs8 style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                    <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4>要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4 >发布单位：<span style="color: blue;">scgirl电竞联盟</span></h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4><span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                </v-flex>
            </v-layout>
            <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                <v-flex xs4 style="height: 100%">
                    <img src="https://www.asgardusk.com/images/portfolio/1.png" alt="" style="width: 100%;height: 100%;object-fit: cover">
                </v-flex>
                <v-flex xs8 style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                    <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4>要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4 >发布单位：<span style="color: blue;">scgirl电竞联盟</span></h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4><span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                </v-flex>
            </v-layout>
            <v-layout row wrap style="border: 1px solid #eee;padding: 12px;height: 170px">
                <v-flex xs4 style="height: 100%">
                    <img src="https://www.asgardusk.com/images/portfolio/1.png" alt="" style="width: 100%;height: 100%;object-fit: cover">
                </v-flex>
                <v-flex xs8 style="height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: left">
                    <div style="height: 25%;display: flex;align-items: center;"><h2>scgirl电竞联盟招收新成员</h2></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4>要求APM250+，韩宗水平及以上，爱好女装优先</h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4 >发布单位：<span style="color: blue;">scgirl电竞联盟</span></h4></div>
                    <div style="height: 25%;display: flex;align-items: center;"><h4><span>射频技术</span>/<span>人工智能</span>/<span>材料技术</span></h4></div>
                </v-flex>
            </v-layout>


            <!--测试滚动的无意义复制 END-->


        </v-container>
        <v-footer app v-if="$route.path !== '/login' && $route.path !== '/register'">
            <bottomNav :bottom-nav="'board'"></bottomNav>
        </v-footer>
    </div>
</template>

<script>
    import bottomNav from '../components/bottomNav';

    export default {
        name: "board",
        components: {bottomNav},
        data() {
            return {
                cityList: [
                    {
                        value: '人工智能',
                        label: '人工智能'
                    },
                    {
                        value: '射频技术',
                        label: '射频技术'
                    },
                    {
                        value: '绿色能源',
                        label: '绿色能源'
                    },
                    {
                        value: '水处理技术',
                        label: '水处理技术'
                    },
                    {
                        value: '还有啥忘了',
                        label: '还有啥忘了'
                    },
                    {
                        value: '再凑一个',
                        label: '再凑一个'
                    }
                ],
                model11: '',
                model12: []
            }
        },
        methods: {}
        ,
        mounted() {
        }
    }
</script>

<style scoped>
</style>
