<template>
    <div class="login">
        <v-container>
            <form>
                <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="邮箱"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        label="密码"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        :append-icon="show ? 'visibility_off' : 'visibility'"
                        :type="show ? 'text' : 'password'"
                        @click:append="show = !show"
                ></v-text-field>

                <v-btn @click="login">登录</v-btn>
                <v-btn @click="$router.push({name: 'index'})">返回</v-btn>
            </form>
        </v-container>
    </div>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'


    export default {
        name: "Login",

        validations: {
            email: {required, email},
            password: {required},
        },

        data() {
            return {
                show: false,
                email: 'zhangyu199946@126.com',
                password: 'zhangyuk',
            }
        },

        computed: {
            emailErrors() {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('请输入正确的邮箱地址');
                !this.$v.email.required && errors.push('请输入邮箱地址');
                return errors
            },
            passwordErrors() {
                const errors = [];
                if (!this.$v.password.$dirty) return errors;
                !this.$v.password.required && errors.push('请输入密码');
                return errors
            }
        },

        methods: {
            // 登录
            login() {
                this.$v.$touch();
                if (!this.$v.$anyError) {
                    this.$api.account.login({
                        username: this.email,
                        password: this.password
                    }).then(res => {
                        if (res.data.code === 1) {
                            // 保存token
                            import('js-cookie').then(Cookies => {
                                Cookies.set('token', res.data.data.token)
                            });
                            this.DB({token:res.data.data.token,id:1});
                            this.$store.commit('updateToken', res.data.data.token);
                            // 获取用户信息
                            this.$api.account.get_user_by_token().then(res => {
                                if (res.data.code === 1) {
                                    this.$store.commit('refreshUserInfo', res.data.data);
                                    this.$store.commit('login', this.$store.state)
                                    // 跳转到之前的页面
                                    this.$router.push(this.$route.query.redirect || {name: 'index'})
                                }
                            });
                        }
                    })
                }
            },
            DB(data) {
                let myDB = {
                    name: "project-agent", version: 1, db: null
                };

                function openDB(name) {
                    let version = 1;
                    let request = window.indexedDB.open(name, version);
                    request.onerror = function (e) {
                        console.log(e.currentTarget.error.message);
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

                function addData(db, storeName, data) {
                    let transaction = db.transaction(storeName, 'readwrite');
                    let store = transaction.objectStore(storeName);
                    store.put(data)
                }

                openDB('user');
                setTimeout(function () {
                    addData(myDB.db, "user", data);
                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
