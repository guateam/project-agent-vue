<template>
  <v-app>
    <v-navigation-drawer temporary v-model="$store.state.drawer" app>
      <navigation-drawer></navigation-drawer>
    </v-navigation-drawer><!--侧边栏-->

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";

export default {
  name: 'App',
  components: {
    NavigationDrawer
  },
  mounted() {
    // 获取用户信息
    this.$api.account.get_user_by_token().then(res => {
      if (res.data.code === 1) {
        this.$store.commit('refreshUserInfo', res.data.data);
      }
    })
  },
}
</script>

<style>
</style>
