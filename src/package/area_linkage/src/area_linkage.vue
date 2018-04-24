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
        overflow: hidden;
        overflow-y: scroll;
    }

    ul {
        height: 7.46668rem;
        position: absolute;
        z-index: 10;
        list-style: none;
        top: rem(90px);
        overflow: hidden;
        overflow-y: scroll;
        width: 33.3%;
        border-right: 1px solid #e3e3e4;
        li {
            position: relative;
            height: 1.3rem;
            line-height: 1.3rem;
            font-size: rem(26px);
            color: rgba(0, 0, 0, 0.75);
        }
    }

    ul.left {
        left: 33.3%;
    }

    ul.right {
        right: 0;
    }

    ul li {
        padding: 0 10px;
    }

    .btnactive {
        background: #f6f6f6;
        color: #ff552e;
        margin:0 1px;
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
    <div v-show="show">
        <div class="linkage" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="close_click" >
            <div class="linkage-warp" @click.stop="stop">
                <div class="linkage-title">
                    {{title}}
                    <div class="linkage-sure" id="linkage-sure" @click="decision_click">确定</div>
                    <div class="linkage-cancel" id="linkage-cancel" @click="close_click">取消</div>
                </div>
                <div class="linkage-list">
                    <ul>
                        <li class="btnactive">{{title}}</li>
                    </ul>
                    <ul class="left">
                        <li v-for="(item,index) in parent_obj" :class="{btnactive:index==cur_parent}"
                            @click="click_parent(item,index)">
                            {{item.name}}
                        </li>
                    </ul>
                    <ul class="right">
                        <li v-for="(item,index) in child_obj" :class="{btnactive:index==cur_child}"
                            @click="click_child(item,index)">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import _ajax from  "../lib/touch";
    import Tool from '../../../common/js/Tool'
    export default {
        name: 'area_linkage',
        data () {
            return {
                show: false,
                isbeforeActive: false,
                isactive: false,
                url:null,
                cur_parent: 0,//选中的父级索引值
                cur_child: 0,//选中的子级索引值
                parent_obj: [],//父级数组数据
                child_obj: [],//子级数组数据
                backObj: [],//返回的数据
                dataObj: {},//级联数值选项
                callback: () => {
                },
            }
        },
        mounted(){

        },
        created(){
        },
        computed: {
            title(){
                let ret = "区域";
                if (this.dataObj.title) {
                    ret = this.dataObj.title;
                }
                return ret;
            },

        },


        methods: {
            stop(){

            },//处理点击背景关闭键盘时，防止冒泡

            // 点击一级菜单
            click_parent(item, index) {
                let _this = this;
                _this.cur_parent = index;
                _this.cur_child = 0;
                let tempobj={};
                tempobj={
                    paraname:_this.dataObj.first_key||null,
                    name: item.listname||null,
                    value: item.id||null,
                    text: item.name||null
                };
                _this.backObj[0]=tempobj;
                _ajax(_this.url, {"cityname":item.listname}, function callback(ret){
                    let temparr=null;
                    temparr=ret.data.datastr;
                    temparr = JSON.parse(temparr);
                    let key=temparr[0].city;
                    _this.child_obj=temparr[0][key];
                    tempobj={
                        paraname:_this.dataObj.sec_key||null,
                        name: _this.child_obj[0].listname||null,
                        value: _this.child_obj[0].id||null,
                        text: _this.child_obj[0].name||null
                    };
                    _this.backObj[1]=tempobj;
                });

            },
            // 点击二级菜单
            click_child(item, index) {
                let _this = this;
                _this.cur_child = index;
                let tempobj={};
                tempobj={
                    paraname:_this.dataObj.sec_key||null,
                    name: item.listname||null,
                    value: item.id||null,
                    text: item.name||null
                };
                _this.backObj[1]=tempobj;
            },
            // 点击取消
            close_click() {
                let _this = this;
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600)
                Tool.removecss(document.body, "overflow");
                Tool.removecss(document.body, "height");
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
                Tool.removecss(document.body, "overflow");
                Tool.removecss(document.body, "height");
                let obj = [];
                _this.backObj.forEach(function(item,index){
                    obj[index] = item;
                });
                return _this.callback(0, obj);
            },

        },
        watch: {
            'show'(val) {
                if (val) {
//                    console.log(this.dataObj)
                }
            }
        },
    }
</script>
