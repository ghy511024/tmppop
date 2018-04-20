<style lang="scss" scoped>

    @import "../../common/css/mixin.scss";

    #picker-wrap {
        /*display: none;*/
        width: 100%;
        position: absolute;
        z-index: 100;
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
    }

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
        top: rem(200px);
        list-style: none;
        padding: 0px;
        /*left: 30px;*/
        /*box-shadow: #000 0px 0px 1px 1px;*/
        /*transition: all 0.4s;*/
        li {
            height: rem(90px);
            position: relative;
            font-size: rem(34px);
            line-height: rem(100px);
        }
    }

    .mulit_left {
        left: rem(5px);
        width: rem(210px);
        text-align: center;
    }

    .mulit_center {
        left: rem(215px);
        width: rem(210px);
        text-align: center;
    }

    .mulit_right {
        right: rem(5px);
        width: rem(315px);
        text-align: center;
    }

    .span {
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
    }
    .span-top{
        height: rem(200px);
        top:0;
        position: absolute;
        z-index:2;
        background-image:-webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0.3) 100%);
    }
    .span-bottom{
        height:rem(195px);
        top: rem(290px);
        background-image:-webkit-linear-gradient(bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.3) 100%);
    }
</style>
<template>
    <div id="picker-wrap">
        <div class="picker-main">
            <div class="picker-header">
                <div class="title">楼层</div>
                <div class="picker-text">1-3层/8层</div>
            </div>
            <div class="picker-placeholder">
                请选择楼层
            </div>
            <div class="picker-scroll">
                <div class="scroll-choose">
                    <div class="picker-title">楼层：</div>
                    <div class="choose-inner">
                        <div class="choose-level choose-left">
                            <label for="">单层</label>
                        </div>
                        <div class="choose-level choose-right active">
                            <label for="">多层</label>
                        </div>
                    </div>
                    <div id="btn-sure" class="choose-sure">确定</div>
                </div>
                <div class="scroll-inner">
                    <div class="chose-bord">
                        <div class="text-style">至</div>
                    </div>
                    <span class="span span-top"></span>
                    <ul id="list_1" ref="list_1" class="mulit_left">
                        <li>1层</li>
                        <li>2层</li>
                        <li>3层</li>
                        <li>4层</li>
                        <li>5层</li>
                        <li>6层</li>
                        <li>7层</li>
                        <li>8层</li>
                        <li>9层</li>
                    </ul>
                    <ul id="list_2" ref="list_2" class="mulit_center">
                        <li>1层</li>
                        <li>2层</li>
                        <li>3层</li>
                        <li>4层</li>
                        <li>5层</li>
                        <li>6层</li>
                        <li>7层</li>
                        <li>8层</li>
                        <li>9层</li>
                    </ul>
                    <ul id="list_3" ref="list_3" class="mulit_right">
                        <li>1层</li>
                        <li>2层</li>
                        <li>3层</li>
                        <li>4层</li>
                        <li>5层</li>
                        <li>6层</li>
                        <li>7层</li>
                        <li>8层</li>
                        <li>9层</li>
                    </ul>
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
                list1: [
                    {}
                ]
            }
        },
        ready: function () {
        },
        mounted(){
            console.log("touch....", {dom_len: 9})
            var dom1 = this.$refs.list_1;
            new touch(dom1, {dom_len: 9})
            var dom2 = this.$refs.list_2;
            new touch(dom2, {dom_len: 9})
            var dom3 = this.$refs.list_3;
            new touch(dom3, {dom_len: 9})
        }

    }
</script>