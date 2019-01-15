<template>
  <div class="message">

    <v-toolbar dark flat color="primary" app dense scroll-off-screen>
      <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>

      <v-toolbar-title class="headline" style="margin: 0 auto">
        <span>消息</span>
      </v-toolbar-title>

      <v-btn icon> <v-icon>search</v-icon> </v-btn>

      <v-tabs slot="extension" v-model="tabs" centered color="primary" slider-color="secondary">
        <v-tab v-for="(tab, tab_idx) in tabList" :key="tab_idx">{{ tab }}</v-tab>
      </v-tabs>
    </v-toolbar>

    <v-card>
      <v-tabs-items v-model="tabs">
        <v-tab-item :key="0">
          <message-list :list="msgList"></message-list>
        </v-tab-item>
        <v-tab-item :key="1">
          好友
        </v-tab-item>
        <v-tab-item :key="2">
          通知
        </v-tab-item>
        <v-tab-item :key="3">
          群组
        </v-tab-item>
      </v-tabs-items>
    </v-card>

  </div>
</template>

<script>
  import MessageList from "../components/MessageList";

  export default {
    name: 'Message',

    components: {
      MessageList,
    },

    data() {
      return {
        tabs: 0,
        tabList: ['私信', '好友', '通知', '群组'],
        msgList: [
          {
            title: '赖品钊<span id="title-time">18:17</span>',
            content: 'de order',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            userId: 3
          },
          { divider: true, inset: true },
          {
            title: '袁宜照<span id="title-time">2018/12/15</span>',
            content: 'first cry!!!!!',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            userId: 2
          }
        ],
      }
    },

    methods: {
      // 获取消息列表
      getMessageList() {
        this.$api.message.get_message_list().then(res => {
          if (res.data.code === 1) {
            // 清空默认数据
            this.msgList = [];
            // 遍历数据
            res.data.data.forEach(item => {
              // 构造符合格式要求的消息列表
              this.msgList.push({
                title: item.nickname + '<span id="title-time" class="time--text">' + item.post_time + '</span>',
                avatar: item.headportrait,
                content: item.content,
                userID: item.user_id
              });
              // 添加分割线
              this.msgList.push({ divider: true, inset: true });
            });
            // 删除最后一条分割线
            this.msgList.pop();
          }
        })
      }
    },

    mounted() {
      this.getMessageList();
    },
  }
</script>

<style>
  #title-time {
    float: right;
    font-size: 13px;
  }
</style>