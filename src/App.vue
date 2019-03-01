<template>
    <v-app>
        <v-navigation-drawer temporary v-model="$store.state.drawer" app>
            <navigation-drawer></navigation-drawer>
        </v-navigation-drawer><!--侧边栏-->

        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer app v-if="$route.path !== '/login' && $route.path !== '/register'">
            <bottomNav></bottomNav>
        </v-footer>
    </v-app>
</template>

<script>
    import NavigationDrawer from "./components/NavigationDrawer";
    import bottomNav from './components/bottomNav';

    export default {
        name: 'App',
        components: {
            NavigationDrawer,
            bottomNav
        },
        data() {
            return {}
        },
        methods: {
            DB() {
                let that = this;
                let myDB = {
                    name: "project-agent", version: 1, db: null
                };

                function openDB(name) {
                    let version = 1;
                    let request = window.indexedDB.open(name, version);
                    request.onerror = function (e) {
                        window.console.log(e.currentTarget.error.message);
                    };
                    request.onsuccess = function (e) {
                        myDB.db = e.target.result;
                    };
                    request.onupgradeneeded = function (e) {
                        let db = e.target.result;
                        if (!db.objectStoreNames.contains("user")) {
                            db.createObjectStore("user", {keyPath: 'id', autoIncrement: true});
                        }
                    };
                }

                function getDataByKey(db, storeName, value) {
                    let transaction = db.transaction(storeName, 'readwrite');
                    let store = transaction.objectStore(storeName);
                    let request = store.get(value);
                    request.onsuccess = function (e) {
                        let data = e.target.result;
                        that.$store.commit('updateToken', data.token);
                    };
                }

                openDB('user');
                setTimeout(function () {
                    getDataByKey(myDB.db, 'user', 1)
                }, 1000);
            }
        },
        mounted() {
            // 获取用户信息
            this.DB();
            let that = this;
            setTimeout(function () {
                that.$api.account.get_user_by_token().then(res => {
                    if (res.data.code === 1) {
                        that.$store.commit('refreshUserInfo', res.data.data);
                        that.$store.commit('login', that.$store.state)
                    } else {
                        that.$store.commit('logout', that.$store.state)
                    }
                })
            }, 1100);
            // 添加返回事件监听
        },
    }
</script>

<style>
</style>
