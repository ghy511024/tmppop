<style lang="scss" type="text/scss" scoped>
    @import "../../../common/css/mixin";

    * {
        margin: 0px;
        padding: 0px;
        list-style: none
    }

    .linkage {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        transition: all 0.4s ease;
        /*background: rgba(0,0,0,0.4);*/
    }

    .linkage .linkage-warp {
        z-index: 1;
        transition: all 0.4s ease;
        position: absolute;
        width: 100%;
        bottom: 0px;
        background: #ffffff;
        transform: translateY(100%);
    }

    .linkage .linkage-title {
        height: 1.2rem;
        background: #f9fafc;
        text-align: center;
        font-size: 0.37333rem;
        color: #999999;
        line-height: 1.2rem;
        position: relative;
    }

    .linkage .linkage-title:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #e3e3e4;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }

    .linkage .linkage-title .linkage-sure, .linkage .linkage-title .linkage-cancel {
        position: absolute;
        z-index: 1;
        width: 1.6rem;
        height: 1.2rem;
        line-height: 1.22667rem;
        color: #ff552e;
        top: 0px;
        right: 0px;
    }

    .linkage .linkage-title .linkage-sure.linkage-cancel, .linkage .linkage-title .linkage-cancel.linkage-cancel {
        right: auto;
        left: 0px;
        color: #7b7b7b;
    }

    .linkage .linkage-list {
        widtH: 100%;
        height: 7.46668rem;

    }
    .border{
        display: block;
        position: absolute;
        z-index:-1;
        width:50%;
        height:100%;
        border-right:1px solid #f6f6f6;
    }
    ul{
        height: 7.46668rem;
        width:50%;
        position: absolute;
        z-index:10;
        list-style: none;
        top:rem(90px);
        overflow: hidden;
        overflow-y: scroll;
        li{
            position: relative;
            height:1.3rem;
            line-height: 1.3rem;
            font-size: rem(26px);
            color: rgba(0, 0, 0, 0.75);
        }
    }
    ul.left{
        left:0;
    }
    ul.right{
        right:0;
    }
    ul li{
        padding: 0 10px;
    }
    .btnactive{
        background: #f6f6f6;
        color: #ff552e;
    }
    .linkage.beforeActive {
        display: block;
        background: transparent;
    }

    .linkage.beforeActive .linkage-warp {
        transform: translateY(100%);
    }

    .linkage.active {
        background: rgba(0, 0, 0, 0.3);
    }

    .linkage.active .linkage-warp {
        transform: translateY(0);
    }


</style>
<template>
    <div v-show="show" ref="picker">
        <div class="linkage" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="close_click">
            <div class="linkage-warp" @click.stop="stop">
                <div class="linkage-title">{{dataObj.title}}
                    <div class="linkage-sure" id="linkage-sure" @click="decision_click">确定</div>
                    <div class="linkage-cancel" id="linkage-cancel" @click="close_click">取消</div>
                </div>
                <div class="linkage-list">
                    <ul class="left">
                        <li v-for="(item,index) in dataObj.option" :class="{btnactive:index==cur_parent}"
                            @click="click_parent(item,index)">
                            {{item.text}}
                        </li>
                    </ul>
                    <span class="border"></span>
                    <ul class="right">
                        <li v-for="(item,index) in temp" :class="{btnactive:index==cur_child}"
                            @click="click_child(item,index)">
                            {{item.text}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'two_linkage',
        data () {
            return {
                show: false,
                isbeforeActive: false,
                isactive: false,
                cur_parent:0,
                cur_child:0,
                backobj:[],
                dataObj: {//级联数值选项
                    },
                temp:[],
                callback: () => {
                },
            }
        },
        mounted(){
            this.$refs.picker.addEventListener("touchmove", function(evt){
                evt.stopPropagation()
                evt.preventDefault()
            })
        },
        creat(){
        },
        computed: {

        },
        methods: {
            stop(){
            },//处理点击背景关闭键盘时，防止冒泡

            // 点击一级菜单
            click_parent(item,index) {
                let _this = this;
                _this.cur_parent=index;
                _this.cur_child=0;
                let tempobj={};
                tempobj={
                    paramname:_this.dataObj.pname_1||null,
                    value:item.value||null,
                    text:item.text||"暂无数据",
                };
                _this.backobj[0]=tempobj;
                _this.temp=item.option||[];
                tempobj={
                    paramname:_this.dataObj.pname_2||null,
                    value:_this.temp[0].value||null,
                    text:_this.temp[0].text||"暂无数据",
                };
                _this.backobj[1]=tempobj;
            },
            // 点击二级菜单
            click_child(item,index) {
                let _this = this;
                _this.cur_child=index;
                let tempobj={};
                tempobj={
                    paramname:_this.dataObj.pname_2||null,
                    value:item.value||null,
                    text:item.text||"暂无数据",
                };
                _this.backobj[1]=tempobj;
            },
            // 点击取消
            close_click() {
                let _this = this;
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600)
                return _this.callback(1);
            },
            // 点击完成
            decision_click() {
                let _this = this;
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600);
                return _this.callback(0,_this.backobj);
            },

        },
        watch: {
            'visible'(val) {
                if (val) {
                    console.log(this.dataObj)
                }
            }
        },
    }
</script>
