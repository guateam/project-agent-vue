<template>
  <div class="question-card">
    <v-card id="card" flat border>
      <v-container>
        <v-layout row>
          <v-flex pa-1>
            <span class="font-weight-bold">{{ title }}</span>
          </v-flex>
          <v-flex v-if="img" shrink pa-1>
            <img :src="img" width="150px" height="90px" alt="">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex class="font--text" xs12 pa-1>标签 : <span v-for="(tag, index) in tags" :key="index">{{ index===0 ? '' : '/' }}{{ tag }}</span></v-flex>
        </v-layout>
        <v-layout row>
          <v-flex class="font--text" grow pa-1>{{ follow }} 人关注&nbsp;·&nbsp;{{ comment }} 条评论</v-flex>
          <v-flex class="time--text" shrink pa-1>{{ edittime }}</v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "QuestionCard",
    props: ['title', 'img', 'tags', 'follow', 'comment', 'edittime'],
  }
</script>

<style scoped>
  #card {
    margin-top: 10px;
  }
</style>
