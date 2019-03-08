<template>
    <div class="detail">
        <div style="height: 60%; width: 100%;">
            <v-layout column fill-height>
                <v-flex xs1>
                    <v-layout justify-space-between row>
                        <v-flex shrink>
                            <v-btn @click="$router.push($route.query.redirect || {name: 'topic'})" icon>
                                <v-icon>arrow_back</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex shrink>
                            <v-btn icon>
                                <v-icon>more_horiz</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex xs3>
                    <v-container fill-height>
                        <v-layout align-center justify-space-between row fill-height>
                            <!--头像-->
                            <v-flex xs6>
                                <img class="avatar" :src="userInfo.avatar" width="66%">
                            </v-flex>

                            <v-flex xs6>
                                <!--信息-->
                                <v-layout justify-center column fill-height>
                                    <v-flex xs6>
                                        <v-layout align-start justify-center row fill-height>
                                            <v-flex>
                                                <v-btn small block color="success" outline>{{ userInfo.group }}</v-btn>
                                            </v-flex>
                                        </v-layout>
                                        <v-divider></v-divider>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-layout align-end row fill-height>
                                            <v-flex xs6>
                                                <span class="headline font-weight-bold">{{ (userInfo.follow).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
                                                <br/>
                                                <span class="font--text">关注</span>
                                            </v-flex>

                                            <v-flex xs6>
                                                <span class="headline font-weight-bold">{{ (userInfo.fans).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
                                                <br/>
                                                <span class="font--text">粉丝</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>

                <!--昵称-->
                <v-flex xs2>
                    <v-container fill-height>
                        <v-layout align-center justify-center row fill-height>
                            <v-flex shrink>
                                <span class="headline font-weight-bold">{{ userInfo.nickname }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>

                <!--功能-->
                <v-flex xs2>
                    <v-container fill-height>
                        <v-layout align-center justify-center row fill-height>
                            <v-flex xs5>
                                <v-btn @click="consult" block color="grey">
                <span class="font-weight-bold white--text">
                  咨询
                </span>
                                </v-btn>
                            </v-flex>
                            <v-flex xs5 offset-xs1>
                                <v-btn @click="followUser" block color="primary" :outline="userInfo.isFollow">
                <span class="font-weight-bold">
                  {{ userInfo.isFollow? '已关注': '+ 关注' }}
                </span>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>

        <!--简介-->
        <v-flex grow>
          <v-container fill-height>
            <span class="body-1 font-weight-light">{{ userInfo.desc.length > 60? userInfo.desc.substring(0, 60) + '...': userInfo.desc }}</span>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
    <v-layout>
      <v-flex>
        <v-tabs fixed-tabs>
          <v-tab
              v-for="tab in ['动态', '回答', '专栏']"
              :key="tab"
          >
            {{ tab }}
          </v-tab>
          <!--动态-->
          <v-tab-item :key="'动态'">
            <v-card flat min-height="200">
              <v-layout v-if="message.length === 0" align-center justify-center row fill-height>
                <span class="title font-weight-light"> <br>暂无动态</span>
              </v-layout>
              <v-list v-else two-line subheader>
                <div v-for="(item, index) in message" :key="index">
                  <v-divider></v-divider>

                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                    <span class="font-weight-light">
                        {{ item.time }}
                    </span>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </div>

                            </v-list>
                        </v-card>
                    </v-tab-item>

                    <!--回答-->
                    <v-tab-item :key="'回答'">
                        <v-card flat min-height="200">
                            <v-layout v-if="answers.length === 0" align-center justify-center row fill-height>
                                <span class="title font-weight-light"> <br>暂无回答</span>
                            </v-layout>

                            <v-list v-else two-line subheader>
                                <div v-for="(item, index) in answers" :key="index">
                                    <v-divider></v-divider>

                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                    <span class="font-weight-light">
                        {{ item.time }}
                    </span>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </div>

                            </v-list>
                        </v-card>
                    </v-tab-item>

                    <!--专栏-->
                    <v-tab-item :key="'专栏'">
                        <v-card flat min-height="200">
                            <v-layout v-if="articles.length === 0" align-center justify-center row fill-height>
                                <span class="title font-weight-light"> <br>暂无文章</span>
                            </v-layout>

                            <v-list v-else two-line subheader>
                                <div v-for="(item, index) in articles" :key="index">
                                    <v-divider></v-divider>

                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                    <span class="font-weight-light">
                        {{ item.time }}
                    </span>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </div>

              </v-list>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    props: ['userId'],
    data() {
      return {
        userInfo: {
          isFollow: false,  // 是否关注
          nickname: '吉良吉影',  // 昵称
          group: '系统管理员',  // 用户组
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551978614399&di=52a92d5c8a76d460f2665dc07732a175&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2017%2F07%2F28%2F2615633434213754887_320x320.jpg',  // 头像
          follow: 199,  // 关注
          fans: 40500,  // 粉丝数
          desc: '我的名字叫吉良吉影，33岁。住在杜王町东北部的别墅区一带，未婚。我在龟友连锁店服务。每天都要加班到晚上8点才能回家。我不抽烟，酒仅止于浅尝。晚上11点睡，每天要睡足8个小时。睡前，我一定喝一杯温牛奶，然后做20分钟的柔软操，上了床，马上熟睡。一觉到天亮，决不把疲劳和压力留到第二天。医生都说我很正常。',  // 简介
        },  // 用户信息
        message: [
          {title: '剪指甲的108种方法', subtitle: '发表文章', time: '1天前'},
          {title: '剪指甲的正确方式', subtitle: '赞同答案', time: '2天前'},
          {title: '修剪指甲的10种误区', subtitle: '收藏文章', time: '1个月前'},
          {title: '修剪指甲的10种误区', subtitle: '收藏文章', time: '1个月前'},
          {title: '修剪指甲的10种误区', subtitle: '收藏文章', time: '1个月前'},
          {title: '修剪指甲的10种误区', subtitle: '收藏文章', time: '1个月前'},
        ],  // 动态
        answers: [],  // 回答
        articles: [
          {title: '剪指甲的108种方法', subtitle: '说起修剪指甲，首先……', time: '2019-03-07'},
          {title: '剪指甲的108种方法', subtitle: '说起修剪指甲，首先……', time: '2019-03-07'},
          {title: '剪指甲的108种方法', subtitle: '说起修剪指甲，首先……', time: '2019-03-07'},
          {title: '剪指甲的108种方法', subtitle: '说起修剪指甲，首先……', time: '2019-03-07'},
          {title: '剪指甲的108种方法', subtitle: '说起修剪指甲，首先……', time: '2019-03-07'},
          {title: '剪指甲的108种方法', subtitle: '说起修剪指甲，首先……', time: '2019-03-07'},
        ],  // 专栏文章
      }
    },
    methods: {
      getUserData() {

      },  // 获取用户信息
      consult() {
        this.$store.commit('showInfo', '付费咨询');
      },  // 付费咨询
      followUser() {
        if (this.userInfo.isFollow) {
          this.userInfo.isFollow = false;
          this.$store.commit('showInfo', '已取消关注');
        }  // 取关
        else {
          this.userInfo.isFollow = true;
          this.$store.commit('showInfo', '关注成功!')
        }  // 关注
      },  // 关注/取关用户
    },
    mounted() {
      if (this.userId) {
        this.getUserData();
      }
    },
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    width: 100vw;
    font-family: Helvetica, Arial, sans-serif;
    background: linear-gradient(0deg, white, whitesmoke 40%, #FFCC00);
  }
  .avatar {
    border-radius: 80px;
  }
  .container {
    padding: 0 16px;
  }  /*覆盖组件样式*/

</style>