<template>
    <div class="bigbox">
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.push({name:'topic'})">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">添加话题</span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
                <v-layout row justify-center>
                    <v-dialog v-model="dialog" persistent fullscreen="">
                        <template v-slot:activator="{ on }">
                            <div v-on="on" style="line-height: 1em;">发布</div>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">确认发布</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6>
                                            <v-select
                                                    v-model="e7"
                                                    :items="states"
                                                    label="选择标签"
                                                    multiple
                                                    chips
                                                    persistent-hint
                                            ></v-select>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red" flat @click="dialog = false">关闭</v-btn>
                                <v-btn color="primary" flat @click="$router.push({name:'topic'})">确认</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </div>
        </div>
        <div class="line"></div>

        <!--富文本编辑器采用的wangEditor-->
        <!--git地址https://github.com/wangfupeng1988/wangEditor-->


        <div style="width: 100%;height: 100%">
            <!--<div style="width: 100%;height: 3.6em;line-height: 3.5em;margin-bottom: 0.5em">-->
            <!--&lt;!&ndash;<div style="width: 94%;height: 3.6em;line-height: 3.5em;border-bottom: 1px solid #ccc;margin-bottom: 0.5em;margin-left: 3%;margin-right: 3%">&ndash;&gt;-->
            <!--&lt;!&ndash;<input type="text" placeholder="请输入标题"&ndash;&gt;-->
            <!--&lt;!&ndash;style="width: 100%;height: 3.5em;outline: none;line-height: 2em;font-size: 1.2em">&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<v-flex xs12 sm6 md4>-->
            <!--<v-text-field label="话题标题" required style="padding-left: 10px;padding-right: 10px"></v-text-field>-->
            <!--</v-flex>-->
            <!--</div>-->
            <!--<div id="editput" class="text">-->
            <!--<p>话题描述</p>-->
            <!--</div>-->
            <!--<div id="editbar" class="toolbar"></div>-->
            <quill-editor
                    v-model="content"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
            </quill-editor>
        </div>

    </div>
</template>

<script>
    // import Edit from 'wangeditor';
    export default {
        name: "QuestionPublish",
        data() {
            return {
                content:'',
                editorContent: '',
                dialog: false,
                e7: ['选择标签'],
                states: [
                    '减振降噪', '新材料应用', '传感器', '绿色能源',
                    '射频技术', '人工智能', '流体机械', '水处理技术',
                    '食品技术', '制冷系统设计',
                    '燃烧技术', '空气净化技术', '机械结构设计', '加热技术'
                ],
                editorOption: {}
            }
        },
        methods: {
            onEditorBlur(editor) {//失去焦点事件
            },
            onEditorFocus(editor) {//获得焦点事件
            },
            onEditorChange({editor, html, text}) {//编辑器文本发生变化
                //this.content可以实时获取到当前编辑器内的文本内容
                console.log(this.content);
            }
        },
        mounted() {
            // var editor = new Edit(this.$refs.editor)
            // editor.customConfig.onchange = (html) => {
            //     this.editorContent = html
            // }
            // editor.create()
            // var editor1 = new Edit('#editbar', '#editput')  // 两个参数也可以传入 elem 对象，class 选择器
            // editor1.create()
        }
    }
</script>

<style scoped>
    .bigbox {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
    }

    .head {
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
        width: 100%;
        height: 4em;
        background-color: #eee;
    }

    .toolbar {
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
    }

    .text {
        border-bottom: 1px solid #ccc;
        height: 400px;
        font-size: 1.1em;
    }

    .quill-editor {
        height: 100%;
    }
</style>
