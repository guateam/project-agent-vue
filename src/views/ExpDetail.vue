<template>
  <div class="exp-detail">
    <v-card flat color="primary">
      <v-container>
        <v-layout justify-center>
          <v-progress-circular
              :rotate="180"
              :size="200"
              :width="5"
              :value="$store.state.userInfo.exp.percent / 2"
              color="secondary"
          >
            <v-layout id="exp-text-container">
              <v-flex><span id="exp-text">{{ $store.state.userInfo.exp.value }}</span></v-flex>
            </v-layout>
          </v-progress-circular>
        </v-layout>
      </v-container>
    </v-card>

    <v-card id="authority-card" flat>
      <br>
      <v-layout justify-center>
        <span class="font--text">--- 等级特权 ---</span>
      </v-layout>
      <v-card flat>
        <v-card-title>
          <span class="font-weight-bold">基础功能 (1/1)</span>
        </v-card-title>
        <v-card-text>
          <v-layout class="text-xs-center">
            <v-flex xs4>
              <v-layout column>
                <v-flex>
                  <v-btn icon fab dark small :color="$store.state.userInfo.exp.value < authority.publishComment ? 'grey' : 'success'">
                    <v-icon>comment</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex><span>发表评论</span></v-flex>
                <v-flex><span class="condition font--text">经验 {{ authority.publishComment }} </span></v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4></v-flex>
            <v-flex xs4></v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card flat>
        <v-card-title>
          <span class="font-weight-bold">公共编辑 (0/2)</span>
        </v-card-title>
        <v-card-text>
          <v-layout class="text-xs-center">
            <v-flex xs4>
              <v-layout column>
                <v-flex>
                  <v-btn icon fab dark small :color="$store.state.userInfo.exp.value < authority.editQuestion ? 'grey' : 'success'">
                    <v-icon>edit</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex><span>编辑问题</span></v-flex>
                <v-flex><span class="condition font--text">经验 {{ authority.editQuestion }} </span></v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4>
              <v-layout column>
                <v-flex>
                  <v-btn icon fab dark small :color="$store.state.userInfo.exp.value < authority.redirectQuestion ? 'grey' : 'success'">
                    <v-icon>redo</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex><span>重定向问题</span></v-flex>
                <v-flex><span class="condition font--text">经验 {{ authority.redirectQuestion }} </span></v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4></v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'ExpDetail',

    data() {
      return {
        level: 2,  // 用户等级
        exp: 120,  // 用户当前经验值
        limit: 500,  // 当前等级的经验上限
        authority: {
          publishComment: 400,  // 发表评论
          redirectQuestion: 600,  // 重定向问题
          editQuestion: 600,  // 编辑问题
        },  // 用户拥有的权限
      }
    },

    mounted() {
      this.$emit('changeTitle', '积分等级');
    },
  }
</script>

<style scoped>
  .condition {
    font-size: 12px;
  }
  #exp-text-container {
    margin-top: -60px;
  }
  #exp-text {
    font-size: 45px;
    font-weight: 700;
    color: white;
  }
  #authority-card {
    margin-top: -115px;
  }
</style>