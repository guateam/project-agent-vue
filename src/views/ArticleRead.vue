<template>
    <div>
        <div class="head">
            <div style="width: 45px;height: 45px;margin-left: 14px;display: flex;align-items: center;justify-content: center;">
                <v-icon large color="white" @click="$router.push({name:'school'})">keyboard_arrow_left</v-icon>
            </div>
            <span style="color: #fff;font-size: 20px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;"></span>
            <div style="width: 45px;height: 45px;margin-right: 14px;display: flex;align-items: center;justify-content: center;color: #fff;font-size: 17px;font-weight: 500;line-height: 1;letter-spacing: .02em;font-family: Roboto,sans-serif;">
            </div>
        </div>
        <div class="line"></div>
        <v-flex xs12 style="height: 200px;overflow: hidden">
            <img src="https://www.asgardusk.com/images/portfolio/4.png" alt="" style="height: 100%;
width: 100%;object-fit: cover">
        </v-flex>
        <v-layout row wrap style="height:70px">
            <v-flex xs2 style="padding-top: 10px">
                <div style="height: 50px;width: 50px;border-radius: 50%;overflow:hidden;margin: 0 auto;">
                    <img src="https://www.asgardusk.com/images/none.png" alt="" style="width: 100%;height: 100%;">
                </div>
            </v-flex>
            <v-flex xs7 style="flex-direction: column;justify-content: space-between;line-height: 27px;padding-top: 10px;">
                <div><h3>大漠孤烟</h3></div>
                <div>个人描述，是不是限制一下字数</div>
            </v-flex>
            <v-flex xs3 style="align-items: center;display: flex;line-height: 1.5">
                <div style="border: 1px #ffcc00 solid;padding: 6px;"><h3>关注作者</h3></div>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-flex xs12 style="line-height: 1.5;padding: 1em;">
            <h1>和柳叶刀、细胞说再见：加州大学宣布取消所有Elsevier期刊订阅</h1>
            <h3>来自作者：<span style="color: blue">大漠孤烟</span></h3>
            <br>
            <p>真要按设定写，三个战列舰折越过来，三发大和炮直接带美利坚、天朝和俄罗斯走，然后再把卫星什么的东西一打，地球瞬间玩完。</p>
            <br>
            <p>所以，为什么星际的人类显得非常弱鸡呢？因为主要敌人是虫子，虫子的速度、进化能力和几乎无穷无尽的数量优势让所有高科技都捉襟见肘。即使强如神族也不能轻视虫子，神族怕的肯定不是虫子的高科技，而是它们的数量。</p>
            <br>
            <img src="https://www.asgardusk.com/images/portfolio/4.png" alt="" style="width: 100%;object-fit: cover">
            <br>
            <p>打个比方就是，10亿个虫子冲过来了，联合国一轮炮击全躺。然后仅仅过了3秒钟，20亿虫子马上又冲了过来，又是一轮炮击，但虫子因为进化，所以杀伤力不明显，但还是用导弹给压了下去。不等你喘口气，40亿的虫子从四面八方围了上来，联合国动用核弹，到处种蘑菇，总算给消灭了。然后80亿的虫子不光是四面八方，还从你的脚底下，你的头顶上，你的身边一下子出现了。
            </p>
            <br>
            <p>真要按设定写，三个战列舰折越过来，三发大和炮直接带美利坚、天朝和俄罗斯走，然后再把卫星什么的东西一打，地球瞬间玩完。</p>
            <br>
            <p>所以，为什么星际的人类显得非常弱鸡呢？因为主要敌人是虫子，虫子的速度、进化能力和几乎无穷无尽的数量优势让所有高科技都捉襟见肘。即使强如神族也不能轻视虫子，神族怕的肯定不是虫子的高科技，而是它们的数量。</p>
            <br>
            <img src="https://www.asgardusk.com/images/portfolio/4.png" alt="" style="width: 100%;object-fit: cover">
            <br>
            <p>打个比方就是，10亿个虫子冲过来了，联合国一轮炮击全躺。然后仅仅过了3秒钟，20亿虫子马上又冲了过来，又是一轮炮击，但虫子因为进化，所以杀伤力不明显，但还是用导弹给压了下去。不等你喘口气，40亿的虫子从四面八方围了上来，联合国动用核弹，到处种蘑菇，总算给消灭了。然后80亿的虫子不光是四面八方，还从你的脚底下，你的头顶上，你的身边一下子出现了。
            </p>
        </v-flex>
        <v-footer class="pa-3" style="padding-right: 1em;background-color: transparent;text-align: right">
            <v-spacer></v-spacer>
            <div>编辑于2019/03/06 <br> 著作权归作者所有，未经授权禁止转载</div>
        </v-footer>
        <div style="padding: 1em;line-height: 1.5;">
            <h3 style="margin-bottom: 1.1em;font-size: 1.2em">文章评价</h3>
            <v-layout row wrap style="padding-bottom: 10px;margin-top: 10px">
                <v-flex xs3>
                    <div style="width: 55px;height: 55px;overflow:hidden;border-radius: 50%">
                        <img src="https://www.asgardusk.com/images/none.png" alt="" style="width: 100%;
height: 100%;border-radius: 50%">
                    </div>
                </v-flex>
                <v-flex xs9>
                    <div style="display: flex;align-items: center;"><b class="nickname">拉拉人</b><span class="board">专家lv.4</span></div>
                    <p class="topicdetail">
                        <span>卡拉之光，如影随形。八门齐开，光复艾尔</span>
                    </p>
                </v-flex>
            </v-layout>
            <h3 style="margin-bottom: 1.1em;font-size: 1.2em;padding-left: 25%">查看全部</h3>
        </div>
        <!--占位的盒子   STAR-->
        <v-flex xs12 style="height: 60px;background-color: white"></v-flex>
        <!--占位的盒子   END-->
        <div class="chatinput">
            <div class="box">
                <input type="text" class="chat" placeholder="评论" autofocus v-model="word">
                <!--<span class="iconfont emoji-icon">collections</span>-->
                <button :class="word?'enSend':'disSend'" :disabled="!word" @click="send">发送</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "article-read",
        data () {
            return {
                word: ''
            }
        },
        methods: {
            send () {
                this.word = ''
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
    .box{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: #eee;
        z-index: 200;
        display: flex;
        justify-content: flex-end;
    }
    .chat{
        height: 40px;
        margin: 5px 15px;
        padding: 0 10px;
        border: 0;
        border-radius: 5px;
        flex: 1;
    }
    .chat::-webkit-input-placeholder{
        color: #999;
        font-size: 16px;
    }
    .emoji-icon{
        font-size: 30px;
        margin-top: 10px;
        color: #333;
    }
    .disSend{
        line-height: 30px;
        margin: 7px 10px;
        padding: 0 12px;
        border: 1px solid #999;
        border-radius: 1px;
        box-sizing: border-box;
        color: #999;
        background-color: #eee
    }
    .enSend{
        line-height: 30px;
        margin: 7px 10px;
        padding: 0 5px;
        border: 1px solid blue;
        border-radius: 5px;
        box-sizing: border-box;
        color: #fff;
        background-color: blue;
    }
    .board{
        border:solid 1px #ffcc00;
        border-radius: 2px;
        margin-left: 1em;
        padding: 0.1em;
        margin-bottom: 0.2em;
        font-size: 1.1em;
        color:orange;
    }
    .nickname{
        font-size: 1.5em;
    }
</style>
