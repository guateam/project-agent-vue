<template>
    <div class="qr-code">
        <v-toolbar dark flat color="primary" app dense scroll-off-screen>
            <v-btn icon @click="$router.back()">
                <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title class="headline" style="margin: 0 auto">
                <span>我的二维码</span>
            </v-toolbar-title>

            <v-btn icon>
                <v-icon>share</v-icon>
            </v-btn>
        </v-toolbar>
        <canvas class="qr_code" id="canvas" @touchstart="start_timer" @touchmove="stop_timmer" @touchend="end_timmer"/>
        <div class="grey--text notice">长按保存二维码</div>
    </div>
</template>

<script>
    import QRCode from 'qrcode';

    export default {
        name: "QRCode",
        data() {
            return {
                timeOutEvent: null
            }
        },
        methods: {
            start_timer() {
                let that = this;
                this.timeOutEvent = setTimeout(function () {
                    that.save_qr_code();
                }, 500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
            },
            save_qr_code() {
                var plusReady = function (callback) {
                    if (window.plus) {
                        callback();
                    } else {
                        document.addEventListener('plusready', callback);
                    }
                };

                plusReady(function () {
                    let canvas = document.getElementById('canvas');
                    let url = canvas.toDataURL("image/jpeg");
                    let picname = this.$route.query.text + '.jpg';
                    plus.downloader.createDownload(url, {}, function (d, status) {
                        if (status == 200) {
                            alert("Download success: " + d.filename);
                            plus.gallery.save(picname, function () {
                                mui.toast('保存成功');
                            }, function () {
                                mui.toast('保存失败，请重试！');
                            });
                        } else {
                            alert("Download failed: " + status);
                        }
                    });
                });
            },
            end_timmer() {
                clearTimeout(this.timeOutEvent);//清除定时器
            },
            stop_timmer() {
                clearTimeout(this.timeOutEvent);//清除定时器
                this.timeOutEvent = null;
            }
        },
        mounted() {
            let canvas = document.getElementById('canvas');

            QRCode.toCanvas(canvas, this.$route.query.text, {
                errorCorrectionLevel: 'H',
                width: 256,
                color: {dark: '#ffcc00'}
            });
        }
    }
</script>

<style scoped>
    .qr_code {
        margin-top: 7em;
        margin-left: 5.5em;
    }

    .notice {
        margin-top: 1em;
        text-align: center;
    }
</style>