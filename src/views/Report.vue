<template>
    <div>
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.back()">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">举报</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
                发送
            </div>
        </div>
        <div class="line"></div>
        <h4 style="margin-top: 1em;margin-bottom:1em;padding-left: 2em">举报信息</h4>
        <v-divider></v-divider>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs2>
                    <div style="width: 50px;height: 50px;overflow: hidden;border-radius: 50%">
                        <img src="https://www.asgardusk.com/images/none.png" alt=""
                             style="width: 50px;height: 50px;border-radius: 50%">
                    </div>
                </v-flex>
                <v-flex xs10>
                    <h3 v-text="author_name"></h3>
                    <h4 style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                        {{author_info}}
                    </h4>
                </v-flex>
            </v-layout>
        </v-container>
        <v-flex xs12 style="padding:0 2em 2em 2em;">
            <span>内容</span>
            <span style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
                {{content}}
            </span>
        </v-flex>
        <v-divider></v-divider>
        <h4 style="margin-top: 1em;margin-bottom:1em;padding-left: 2em">举报原因</h4>
        <v-divider></v-divider>
        <v-flex xs12>
            <v-textarea
                    solo
                    name="input-7-4"
                    label="Solo textarea"
                    value="填写举报理由，我们会尽快处理哦"
                    v-model="reason"
            ></v-textarea>
        </v-flex>
    </div>
</template>

<script>
    export default {
        name: "report",
        data(){
            return {
                content:"",
                author_name:"",
                author_info:"",
                reason:"",
                report_type:"",
                target_id:"",
            }
        },
        methods:{
            send(){
                let that = this
                this.$api.account.complain(this.target_id,this.reason,this.report_type).then(res =>{
                    that.$router.back();
                 })
            }
        },
        mounted(){
            let that = this;
            this.report_type = this.$route.query.report_type
            this.target_id =  this.$route.query.target_id

            if(this.report_type == 1){
                this.$api.answer.get_answer_comment_by_id(this.target_id).then(res =>{
                    that.content = res.data.item.content;
                    that.author_name = res.data.author.nickname;
                    that.author_info = res.data.author.description;
                })
            }else if(this.report_type == 2){
                this.$api.article.get_article_comment_by_id(this.target_id).then(res =>{
                    that.content = res.data.item.content;
                    that.author_name = res.data.author.nickname;
                    that.author_info = res.data.author.description;
                })
            }else if(this.report_type == 3){
                this.$api.answer.get_question_comment_by_id(this.target_id).then(res =>{
                    that.content = res.data.item.content;
                    that.author_name = res.data.author.nickname;
                    that.author_info = res.data.author.description;
                })
            }else if(this.report_type == 4){
                this.$api.answer.get_answer_by_id(this.target_id).then(res =>{
                    that.content = res.data.item.content;
                    that.author_name = res.data.author.nickname;
                    that.author_info = res.data.author.description;
                })
            }else if(this.report_type == 5){
                this.$api.answer.get_question_by_id(this.target_id).then(res =>{
                    that.content = res.data.item.title;
                    that.author_name = res.data.author.nickname;
                    that.author_info = res.data.author.description;
                })
            }else if(this.report_type == 6){
                this.$api.answer.get_article_by_id(this.target_id).then(res =>{
                    that.content = res.data.item.title;
                    that.author_name = res.data.author.nickname;
                    that.author_info = res.data.author.description;
                })
            }
        }
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
