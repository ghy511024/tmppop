<style lang="scss" scoped>

    @import "../../common/css/mixin.scss";

    #picker-wrap {
        display: none;
        width: 100%;
        position: fixed;
        z-index: 1000;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        top: 0px;
    }

    .picker-main {
        position: absolute;
        bottom: 0px;
        width: 100%;
    }

    .picker-header {
        width: 100%;
        height: rem(220px);
        background: #fff;
        .title {
            position: absolute;
            left: 0px;
            right: 0px;
            text-align: center;
            top: rem(56px);
            font-size: rem(24px);
            color: #999999;
        }
        .picker-text {
            color: #ff552e;
            left: 0px;
            right: 0px;
            font-size: rem(34px);
            text-align: center;
            position: absolute;
            top: rem(110px);
        }
    }

    .picker-placeholder {
        height: rem(90px);
        width: 100%;
        text-align: center;
        line-height: rem(90px);
        background: #f9fafc;
        @include border1px(top, 0, #e3e3e4);
        @include border1px(bottom, 0, #e3e3e4);
        font-size: rem(30px);
        color: #999999;
    }

    .scroll-choose {
        height: rem(90px);
        width: 100%;
        background: #ffffff;
        @include border1px(bottom, 0, #e3e3e4);
        font-size: rem(30px);
        color: #999999;
    }

    .picker-title {
        position: absolute;
        z-index: 1;
        width: rem(120px);
        height: rem(90px);
        line-height: rem(90px);
        text-align: right;
        top: 0px;
        right: auto;
    }

    .choose-inner {
        position: absolute;
        z-index: 1;
        width: rem(380px);
        height: rem(90px);
        line-height: rem(90px);
        text-align: center;
        top: 0px;
        left: rem(120px);
        /*background: red;*/
        .choose-level {
            position: absolute;
            z-index: 2;
            width: rem(130px);
            height: rem(56px);
            line-height: rem(56px);
            background: #f6f6f6;
            border: 1px solid #f6f6f6;
            border-radius: 20px;
            top: rem(15px);
        }
        .choose-left {
            left: rem(35px);
        }
        .choose-right {
            right: rem(35px);
        }
        .active {
            color: #ffffff;
            background: #ff552e;
        }
    }

    .choose-sure {
        position: absolute;
        z-index: 1;
        width: rem(120px);
        height: rem(90px);
        line-height: rem(90px);
        text-align: left;
        font-size: rem(34px);
        color: #ff552e;
        top: 0px;
        right: 0px;
    }

    .scroll-inner {
        height: rem(486px);
        background: #ffffff;
        position: relative;
        overflow: hidden;

        .chose-bord {
            height: rem(90px);
            position: absolute !important;
            @include border1px(top, 0, #e3e3e4);
            @include border1px(bottom, 0, #e3e3e4);
            left: rem(50px);
            right: rem(50px);
            top: rem(200px);
            .text-style {
                z-index: 2;
                position: absolute;
                height: rem(90px);
                width: rem(90px);
                line-height: rem(90px);
                text-align: center;
                font-size: rem(28px);
                left: rem(120px);
            }
        }
        ul {
            position: absolute;
            z-index: 8;
            top: rem(200px);
            list-style: none;
            padding: 0px;
            li {
                height: rem(90px);
                position: relative;
                font-size: rem(34px);
                line-height: rem(100px);
            }
        }

        .mulit-left {
            left: rem(5px);
            width: rem(210px);
            text-align: center;
            /*box-shadow: 0px 0px 0px 1px #ccc;*/
            &.isMulti {
                width: rem(320px);
            }
        }

        .mulit-center {
            left: rem(215px);
            width: rem(210px);
            text-align: center;
            /*box-shadow: 0px 0px 0px 1px #ccc;*/
            &.isMulti {
                width: rem(320px);
            }
        }

        .mulit-right {
            right: rem(5px);
            width: rem(315px);
            text-align: center;
            /*box-shadow: 0px 0px 0px 1px #ccc;*/
            &.isMulti {
                width: rem(300px);
            }
        }

        .ul-same {
            position: absolute;
            z-index: 12;
            list-style: none;
            padding: 0px;
            height: 100%;
        }

        .ul-left {
            left: rem(5px);
            width: rem(210px);
        }

        .ul-center {
            left: rem(215px);
            width: rem(210px);
        }

        .ul-right {
            right: rem(5px);
            width: rem(315px);
        }

        .span {
            display: block;
            width: 100%;
            position: absolute;
            z-index: 10;
            left: 0;
        }

        .span-top {
            height: rem(200px);
            top: 0;
            position: absolute;
            z-index: 11;
            background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.3) 100%);
        }

        .span-bottom {
            height: rem(195px);
            top: rem(290px);
            background-image: -webkit-linear-gradient(bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.3) 100%);
        }

        &.isSingle {
            .mulit-left, .mulit-right, .ul-left, .ul-left {
                width: rem(320px);
            }
            .mulit-left, .ul-left {
                right: 50%;
                left: auto;
            }
            .mulit-right, .ul-right {
                left: 50%;
                right: auto;
            }
        }
    }

    #picker-wrap {
        transition: all 0.4s ease;
        .picker-main {
            transition: all 0.4s ease;
        }
        &.beforeActive {
            display: block;
            background: transparent;
            .picker-main {
                transform: translateY(100%);
            }
        }
        &.active {
            background: rgba(0, 0, 0, 0.3);
            .picker-main {
                transform: translateY(0);
            }
        }
    }

    .hide_center {
        width: 1px;
        opacity: 0;
    }

</style>
<template>
    <div id="picker-wrap" v-show="show" :class="{beforeActive:isbeforeActive, active:isactive}" @click.stop="_close(1)" ref="picker">
        <div class="picker-main" @click.stop="stop">
            <div class="picker-header">
                <div class="title">楼层</div>
                <div class="picker-text">{{show_text}}</div>
            </div>
            <div class="picker-placeholder">
                请选择楼层
            </div>
            <div class="picker-scroll">
                <div class="scroll-choose">
                    <div class="picker-title">楼层：</div>
                    <div class="choose-inner">
                        <div class="choose-level choose-left" :class="{active:defaultType=='single'}"
                             @click="choose('single')">
                            <label for="">单层</label>
                        </div>
                        <div class="choose-level choose-right" :class="{active:defaultType=='multi'}"
                             @click="choose('multi')">
                            <label for="">多层</label>
                        </div>
                    </div>
                    <div id="btn-sure" class="choose-sure" @click="sure">确定</div>
                </div>
                <div class="scroll-inner" :class="{isSingle:defaultType!='multi'}">
                    <span class="span span-top"></span>
                    <div>
                        <div class="chose-bord">
                            <div v-show="defaultType!='single'" class="text-style">至</div>
                        </div>
                        <div>
                            <ul id="list_1" ref="list_1" class="mulit-left">
                                <li v-for="(item,index) in data_1.list">{{item}}层</li>
                            </ul>
                            <div id="bind_1" ref="bind_1" class="ul-same ul-left"></div>
                        </div>
                        <div v-show="defaultType!='single'||true" :class="{hide_center:defaultType!='multi'}">
                            <ul id="list_2" ref="list_2" class="mulit-center">
                                <li v-for="(item,index) in data_2.list">{{item}}层</li>
                            </ul>
                            <div ref="bind_2" class="ul-same ul-center"></div>
                        </div>
                        <div>
                            <ul id="list_3" ref="list_3" class="mulit-right">
                                <li v-for="(item,index) in data_3.list">共{{item}}层</li>
                            </ul>
                            <div ref="bind_3" class="ul-same ul-right"></div>
                        </div>
                    </div>
                    <span class="span span-bottom"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import touch from  "./lib/touch";
    export default{
        data: function () {
            return {
                hasbind: false,
                show: false,
                defaultType: "multi",//multi
                suggest: "请选择楼层",
                title: "楼层",
                placeholder: "请选择",
                isbeforeActive: false,
                isactive: false,
                data_1: {
//                    select: 0,
//                    unit: "",
//                    list: [1, 2, 3, 4, 5, 6]
                },
                data_2: {},
                data_3: {},
                callback: function () {
                },
                touch_1: {},
                touch_2: {},
                touch_3: {},
            }
        },
        ready: function () {
        },
        props: {},
        mounted(){
           this.$refs.picker.addEventListener("touchmove", function(evt){
               evt.stopPropagation()
               evt.preventDefault()
           })
        },
        methods: {
            up_sec(type, index){
                if (type == "sec1") {
                    var num = this.data_1.list[index];
                    this.data_1.select = num;
                }
                if (type == "sec2") {
                    var num = this.data_2.list[index];
                    this.data_2.select = num;
                }
                if (type == "sec3") {
                    var num = this.data_3.list[index];
                    this.data_3.select = num;
                }
            },
            stop(){
                // 空函数阻止冒泡
            },
            bindTouch(){
                var _this = this;
                if (this.hasbind) {
                    this.touch_1.goto(_this.data_1.list.indexOf(Number(_this.data_1.select)))
                    this.touch_2.goto(_this.data_2.list.indexOf(Number(_this.data_2.select)))
                    this.touch_3.goto(_this.data_3.list.indexOf(Number(_this.data_3.select)))

                } else {
                    var dom1 = this.$refs.list_1;
                    var bind1 = this.$refs.bind_1;
                    var len1 = this.data_1.list.length || 1;
                    var len2 = this.data_2.list.length || 1;
                    var len3 = this.data_3.list.length || 1;
                    this.touch_1 = new touch(bind1, dom1, {
                        dom_len: len1, change: function (index) {
                            _this.up_sec("sec1", index)
                        }
                    })

                    var dom2 = this.$refs.list_2;
                    var bind2 = this.$refs.bind_2;
                    this.touch_2 = new touch(bind2, dom2, {
                        dom_len: len2, change: function (index) {
                            _this.up_sec("sec2", index)
                        }
                    })

                    var dom3 = this.$refs.list_3;
                    var bind3 = this.$refs.bind_3;
                    this.touch_3 = new touch(bind3, dom3, {
                        dom_len: len3, change: function (index) {
                            _this.up_sec("sec3", index)
                        }
                    })
                    this.$nextTick(() => {
                        _this.touch_1.goto(_this.data_1.list.indexOf(Number(_this.data_1.select)))
                        _this.touch_2.goto(_this.data_2.list.indexOf(Number(_this.data_2.select)))
                        _this.touch_3.goto(_this.data_3.list.indexOf(Number(_this.data_3.select)))
                    });
                    this.hasbind = true;
                }
            },
            choose(type){
                this.defaultType = type === 'single' ? "single" : "multi";
                var _this = this;
                this.$nextTick(() => {
                    _this.touch_2.goto(_this.data_2.list.indexOf(Number(_this.data_2.select)))
                });

            },
            sure: function () {
                var ret = {};
                var arr = [];
                arr.push(this.data_1.select);
                if (this.defaultType == "multi") {
                    arr.push(this.data_2.select);
                }
                else {
                    arr.push(this.data_1.select);
                }
                arr.push(this.data_3.select);
                ret["value"] = arr.join(",");
                ret["type"] = this.defaultType;
                ret["text"] = this.show_text;
                this._close(0, ret);
            },
            _close: function (state, ret) {
                var _this = this;
                this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600)
                this.callback(state, ret);
            }
        },
        computed: {
            show_text: function () {
                var str = "请选择";
                if (this.defaultType == "multi") {
                    if (this.data_1.select == -1 && this.data_2.select == -1 && this.data_3.select == -1) {
                        return str;
                    } else {
                        str = `${this.data_1.select}-${this.data_2.select}层/共${this.data_3.select}层`
                    }
                } else {
                    if (this.data_1.select == -1 && this.data_3.select == -1) {
                        return str;
                    } else {
                        str = `${this.data_1.select}层/共${this.data_3.select}层`
                    }
                }
                return str;
            }
        },
        watch: {},
    }
</script>