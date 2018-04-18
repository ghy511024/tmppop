<style lang="scss" scoped="">
    @import "../../common/css/mixin.scss";

    #picker-wrap {
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
        color: #999999;
    }

    .scroll-inner {
        height: rem(486px);
        background: #fff;
        position: relative;
        overflow: hidden;
    }

    .chose-bord {
        height: rem(90px);
        position: absolute;
        @include border1px(top, 0, #e3e3e4);
        @include border1px(bottom, 0, #e3e3e4);
        left: rem(50px);
        right: rem(50px);
        top: rem(200px)
    }

    ul {
        position: absolute;
        top: rem(200px);
        list-style: none;
        padding: 0px;
        left: 100px;
        box-shadow: #000 0px 0px 1px 1px;
        /*transition: all 0.4s;*/
        li {
            height: rem(90px);
            position: relative;
            font-size: rem(32px);
            line-height: rem(100px);
        }
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
                        <label for="">单层</label>
                        <label for="">多层</label>
                    </div>
                    <div id="btn-sure" class="choose-sure"></div>
                </div>
                <div class="scroll-inner">
                    <div class="chose-bord"></div>
                    <ul id="list_1" ref="list_1">
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
            console.log("333")
        },
        mounted(){
            console.log("touch....", {dom_len: 9})
            var dom = this.$refs.list_1;
            console.log(dom, "...")
            new touch(dom,{dom_len: 9})
        }

    }
</script>