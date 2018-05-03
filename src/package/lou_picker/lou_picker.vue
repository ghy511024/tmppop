<style lang="scss" scoped>
    @import "../../common/css/mixin.scss";
    @import "../../common/css/components/lou_picker";
</style>
<template>
    <div id="picker-wrap" v-show="show" :class="{beforeActive:isbeforeActive, active:isactive}" @click.stop="_close(1)"
         ref="picker">
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
            this.$refs.picker.addEventListener("touchmove", function (evt) {
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