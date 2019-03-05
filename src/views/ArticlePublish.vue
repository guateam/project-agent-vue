<template>
    <div class="bigbox">
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.push({name:'topic'})">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">发布文章</span>
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
                                        <v-flex xs12 sm6 d-flex>
                                            <v-text-field
                                                label="输入文章标题"
                                                v-model="title"
                                                :rules="[rules.counter,rules.required]"
                                                maxlength="30"
                                                counter
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 d-flex>
                                            <v-select
                                                :items="first_tag"
                                                item-text="name"
                                                item-value="id"
                                                label="选择一级标签"
                                                v-model="tag1"
                                                :rules="[rules.required]"
                                                @change="get_second_tag()"
                                            ></v-select>
                                        </v-flex>
                                        <v-combobox
                                                v-model="tag2"
                                                :items="second_tag"
                                                item-text="name"
                                                item-value="name"
                                                :search-input.sync="search"
                                                hide-selected
                                                hint="最多输入5个标签"
                                                label="输入二级标签"
                                                :rules="[rules.required]"
                                                multiple
                                                persistent-hint
                                                small-chips
                                                :disabled="tag2_disable"
                                                >
                                                <template v-slot:no-data>
                                                    <v-list-tile>
                                                        <v-list-tile-content>
                                                            <v-list-tile-title>
                                                            按 <kbd>enter</kbd> 创建 <strong>{{ search }}</strong> 标签
                                                            </v-list-tile-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                             </template>
                                        </v-combobox>
                                        <v-flex xs12 sm6 d-flex>
                                            <v-select
                                                    item-text="txt"
                                                    item-value="val"
                                                    :items="price"
                                                    label="选择价格"
                                            ></v-select>
                                        </v-flex>
                                        <v-img
                                            :src="photoSrc"
                                            aspect-ratio="0.8"
                                            style="width:80%;height:300px"
                                        >
                                        <input
                                                type="file"
                                                class="photoFileIn"
                                                @change="previewImg($event)"
                                                accept="image/*"
                                        >
                                        </v-img>

                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red" flat @click="dialog = false">关闭</v-btn>
                                <v-btn color="primary" flat @click="done()">确认</v-btn>
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
            <quill-editor
                    v-model="content"
                    :options="editorOption">
            </quill-editor>
        </div>

    </div>
</template>

<script>
    import * as Quill from 'quill'  //引入编辑器
    import ImageResize from 'quill-image-resize-module'
    import { ImageExtend, QuillWatch} from 'quill-image-extend-module'

    Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/ImageExtend', ImageExtend);

    export default {
        name: "ArticlePublish",
        data() {
            return {
                content: '',
                title:"",
                cover:"",
                tag1:[],
                tag2:[],
                img:"",
                photoSrc:"",
                dialog: false,
                tag2_disable: true,
                price: [{'txt':'免费','val':0}, {'txt':'￥19.9','val':19.9}, {'txt':'￥29.9','val':29.9}, {'txt':'￥69.9','val':69.9}, {'txt':'￥99.9','val':99.9}],
                first_tag:[],
                second_tag:[],
                search:"",

                editorOption: {
                    modules: {
                        ImageExtend: {
                            loading: true,  // 可选参数 是否显示上传进度和提示语
                            name: 'picture',  // 图片参数名
                            size: 3,  // 可选参数 图片大小，单位为M，1M = 1024kb
                            action: 'https://hanerx.tk:5000/api/upload/upload_picture',  // 服务器地址, 如果action为空，则采用base64插入图片
                            // response 为一个函数用来获取服务器返回的具体图片地址
                            // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
                            // 则 return res.data.url
                            response: (res) => {
                                return res.data;
                            },
                        },
                        imageResize: {
                            modules: ['Resize', 'DisplaySize', 'Toolbar']
                        },
                        toolbar: {
                            container: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                [{'header': [1, 2, 3, 4, false]}, {'list': 'ordered'}, {'list': 'bullet'}],
                                [{'indent': '-1'}, {'indent': '+1'}],
                                ['blockquote', 'code-block', 'link', 'image', 'formula'],
                                [{'color': []}, {'background': []}]],
                            handlers: {
                                'image': function () {  // 劫持原来的图片点击按钮事件
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    },
                    placeholder: '请在此输入内容'
                },

                rules:{
                    counter: value => value.length <= 30 || '字数不能超过30个',
                    required: value => !!value || '该栏不能为空.',
                }
            }
        },
        watch: {
            tag2 (val) {
              if (val.length > 5) {
                this.$nextTick(() => this.model.pop())
              }
            }
        },
        methods:{
            get_second_tag(){
                var tag_id = this.tag1
                this.tag2_disable = true;
                console.log(tag_id)
                this.$api.tags.get_child_tag({
                    tag_id
                }).then(res => {
                    if (res.data.code === 1) {
                        this.second_tag = res.data.data;
                        this.tag2 = []
                        this.tag2_disable = false;
                    }
                })
            },
            previewImg: function (e) {
                var files = e.target.files[0];
                var that = this;
                
                // 判断浏览器是否支持 FileReader
                if (!e || !window.FileReader) {
                    alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
                    return;
                }
                let reader = new FileReader();
                
                // 这里是最关键的一步，转换就在这里
                if (files) {
                    reader.readAsDataURL(files); 
                }
                
                reader.onload = function () {
                    that.photoSrc = this.result
                };
                // 设置文件
                this.img = files;
                console.log(this.img)
                console.log(this.photoSrc)
            },
            done(){
                if(this.content && this.title && this.tag1 && this.tag2 && this.img){
                    this.$api.upload.upload_picture(this.img).then(res => {
                        if (res.data.code === 1) {
                            this.first_tag = res.data.data;
                            let data = {
                                    content:this.content,
                                    title:this.title,
                                    cover:this.cover,
                                    price:this.price,
                                    first_tag:this.tag1,
                                    second_tag:this.tag2,
                                    token: this.$store.state.token
                            }
                            this.$api.article.add_article(data).then(res=>{
                                if(res.data.code === 1){
                                    alert("success")
                                }
                            })
                        }
                    })
                }
            }
        },
        mounted() {
                this.$api.tags.get_first_tag().then(res => {
                    if (res.data.code === 1) {
                        this.first_tag = res.data.data;
                    }
                })
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
