<style lang="scss">
    @import "../../common/css/mixin.scss";

    #picker-wrap {
        width: 100%;
        position: absolute;
        z-index: 100;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
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
            font-size: rem(34px);
            text-align: center;
            position: absolute;
            top: rem(110px);
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
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li>至</li>
                    </ul>
                    <ul>
                        <li>共8层</li>
                        <li>共8层</li>
                        <li>共8层</li>
                        <li>共8层</li>
                        <li>共8层</li>
                        <li>共8层</li>
                        <li>共8层</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                list1: [
                    {}
                ]
            }
        },
        montead(){

        }

    }
</script>