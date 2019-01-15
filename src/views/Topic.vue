<template>
<div class="topic">

  <v-toolbar dark flat color="primary" app dense scroll-off-screen>
    <v-toolbar-side-icon @click="$store.commit('drawer')"></v-toolbar-side-icon>

    <v-toolbar-title class="headline" style="margin: 0 auto">
      <span>话题</span>
    </v-toolbar-title>

    <v-btn icon> <v-icon>search</v-icon> </v-btn>

    <v-tabs light slot="extension" v-model="tabs" color="primary" centered slider-color="secondary">
      <v-tab :key="0">推荐</v-tab>
      <v-tab v-for="data in category" :key="data.id">{{ data.name }}</v-tab>
    </v-tabs>
  </v-toolbar>

  <v-card id="card">
    <v-tabs-items v-model="tabs">
      <v-tab-item :key="0">
        <question-card @click.native="view_detail(question.questionID)" v-for="question in questionList" :key="question.questionID" v-bind="question"></question-card>
      </v-tab-item>

      <v-tab-item v-for="data in category" :key="data.id">
        <question-card @click.native="view_detail(question.questionID)" v-for="question in questionList" :key="question.questionID" v-bind="question"></question-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

</div>
</template>

<script>
  import QuestionCard from "../components/QuestionCard";

  export default {
    name: 'Topic',

    components: {
      QuestionCard,
    },

    data() {
      return {
        tabs: 0,
        category: [],
        questionList: [
          {
            questionID: 1,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',  // 缩略图
          },
          {
            questionID: 2,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',  // 缩略图
          },
          {
            questionID: 3,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  // 缩略图
          },
          {
            questionID: 4,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',  // 缩略图
          },
          {
            questionID: 5,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',  // 缩略图
          },
          {
            questionID: 6,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',  // 缩略图
          },
          {
            questionID: 7,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  // 缩略图
          },
          {
            questionID: 8,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',  // 缩略图
          },
          {
            questionID: 9,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',  // 缩略图
          },
          {
            questionID: 10,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',  // 缩略图
          },
          {
            questionID: 11,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  // 缩略图
          },
          {
            questionID: 12,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',  // 缩略图
          },
          {
            questionID: 13,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',  // 缩略图
          },
          {
            questionID: 14,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',  // 缩略图
          },
          {
            questionID: 15,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '2018年，哪些经济学论文让你印象深刻？',  // 标题
            tags: ['经济', '论文'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  // 缩略图
          },
          {
            questionID: 16,  // 问题ID
            edittime: '12小时前',  // 编辑时间
            title: '未来三十年内，哪些行业的工作人员可能被人工智能取代？',  // 标题
            tags: ['科技', '人工智能'],  // 标签
            follow: 4342,  // 关注人数
            comment: 40,  // 评论人数
            img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',  // 缩略图
          },
        ],
      }
    },

    methods: {
      // 查看问题详情
      view_detail(id) {
        this.$router.push({name: 'topic', params: id});  // 跳转到话题详情页
      },
      // 获取推荐内容
      get_recommend() {
        this.$api.homepage.get_recommend().then(res => {
          if (res.data.code === 1) {
            // 处理推荐内容
            this.questionList = [];
            res.data.data.forEach(item => {
              if (item.type === 0) {
                this.questionList.push(item);
              }
            })
          }
        })
      },
      // 获取分类标签
      get_category() {
        this.$api.homepage.get_category().then(res => {
          if (res.data.code === 1) {
            this.category = res.data.data;
          }
        })
      },
    },

    mounted() {
      this.get_category();
      // this.get_recommend();
    }
  }
</script>

<style scoped>
  #card {
    background: #E4E4E4;
  }
</style>
