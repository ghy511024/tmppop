<style lang="scss" type="text/scss" scoped>
    @import "../../../common/css/mixin";
    @import "../../../common/css/components/two_linkage";
</style>
<template>
    <div v-show="show">
        <div class="linkage" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="close">
            <div class="linkage-warp" @click.stop="stop">
                <div class="linkage-title">{{data_obj.title}}
                    <div class="linkage-sure" id="linkage-sure" @click="close('sure')">确定</div>
                    <div class="linkage-cancel" id="linkage-cancel" @click="close">取消</div>
                </div>
                <div class="linkage-list">
                    <ul class="left">
                        <li v-for="(item,index) in data_obj.option"
                            :class="{btnactive:item.value==first_key_default}"
                            @click="click_parent(item,index)"
                            :ref="'two_linkage_'+item.value"
                            :_id="item.value"
                        >
                            {{item.text}}
                        </li>

                    </ul>
                    <span class="border"></span>
                    <ul class="right">
                        <li v-for="(item,index) in child_array"
                            :class="{btnactive:item.value==sec_key_default}"
                            @click="click_child(item,index)"
                            :ref="'two_linkage_'+item.value"
                            :_id="item.value"
                        >
                            {{item.text}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Tool from '../../../common/js/Tool'
    export default {
        name: 'two_linkage',
        data () {
            return {
                show: false,
                isbeforeActive: false,
                isactive: false,
                map: {},
                data_obj: {},
                first_key_index: "",
                sec_key_index: "",
                first_key_default: "",
                sec_key_default: "",
                child_array: [],
                callback: () => {
                },
            }
        },
        mounted(){
        },
        creat(){
        },
        computed: {},
        methods: {
            stop(){
            },//处理点击背景关闭键盘时，防止冒泡

            // 点击一级菜单
            click_parent(item, index) {
                let _this = this;
                _this.first_key_default = item.value;
                _this.first_key_index = index;
                if (_this.map[item.value] && _this.map[item.value].length > 0) {
                    _this.sec_key_index = 0;
                    _this.sec_key_default = (_this.map[item.value][0] || {})["value"];
                }
                _this.choose();
            },
            // 点击二级菜单
            click_child(item, index) {
                let _this = this;
                _this.sec_key_default = item.value;
                _this.sec_key_index = index;
                _this.choose();
            },

            //计算被选中的value
            choose(){
                let _this = this;
                let ret = 0;

                let first_value = _this.first_key_default;
                let sec_value = _this.sec_key_default;

                //计算一级选中的value
                if (ret == 0) {
                    if (!first_value) {
                        first_value = (_this.data_obj.option[0] || {})["value"];
                        _this.first_key_index = 0;
                    }
                    if (first_value) {//赋值
                        _this.first_key_default = first_value;
                        _this.data_obj.option.forEach(function (item, index) {
                            if (item.value == _this.first_key_default) {
                                _this.first_key_index = index;
                            }
                        });

                    } else {
                        ret = -1;
                    }
                }

                //寻找二级数组
                if (ret == 0) {
                    let temp = _this.map[_this.first_key_default] || "";
                    if (temp && temp.length > 0) {
                        _this.child_array = _this.map[_this.first_key_default];
                    } else {
                        _this.child_array = [];
                        ret = -2;
                    }
                }

                //计算二级选中value
                if (ret == 0) {
                    if (!sec_value) {
                        sec_value = (_this.child_array[0] || {})["value"]
                        _this.sec_key_index = 0;
                    }
                    if (!sec_value) {
                        ret = -3;
                    }
                }
                //赋值
                if (ret == 0) {
                    _this.sec_key_default = sec_value;
                    _this.child_array.forEach(function (item, index) {
                        if (item.value == _this.sec_key_default) {
                            _this.sec_key_index = index;
                        }
                    })
                }
                _this._scroll_to_choose();

            },

            // 滚动到选中的id
            _scroll_to_choose(){
                var _this = this;
                _this.$nextTick(function () {
                    var first_id = this.first_key_default;
                    var sec_id = this.sec_key_default;

                    var dom1 = this.$refs["two_linkage_" + first_id];
                    var dom2 = this.$refs["two_linkage_" + sec_id];
                    if (!!dom1) {
                        this._scroll_dom(dom1, 200);
                    }
                    if (!!dom2) {
                        this._scroll_dom(dom2, 150);
                    }
                })


//            console.log(dom1.)
            },
            _scroll_dom(dom, p_px){
                var dom_parent_h = dom[0].parentNode.offsetHeight;
                var dom_parent_scroll = dom[0].parentNode.scrollTop;
                var dom_ofset_h = dom[0].offsetTop;
                // 上超出
                if (dom - dom_ofset_h > 0) {
                    dom[0].parentNode.scrollTop = dom_parent_scroll - (dom_parent_scroll - dom_ofset_h);
                }
                // 下隐藏
                else if (dom_ofset_h - dom_parent_scroll > dom_parent_h) {
                    dom[0].parentNode.scrollTop = dom_ofset_h - dom_parent_h + p_px;
                }
            },
            close(type){
                let opticy = type == "sure" ? 0 : -1;
                let _this = this;
                let backarr = [];
                if (opticy == 0) {
                    let first_choose = _this.data_obj.option[_this.first_key_index];
                    let sec_choose = {};
                    if (first_choose.option && first_choose.option.length > 0) {
                        sec_choose = (first_choose.option[_this.sec_key_index]) || {};
                    }
                    let obj1 = {
                        paraname: _this.data_obj.first_key,
                        text: first_choose.text || "",
                        value: first_choose.value || ""
                    };
                    let obj2 = {
                        paraname: _this.data_obj.sec_key,
                        text: sec_choose.text || "",
                        value: sec_choose.value || ""
                    };
                    backarr.push(obj1);
                    backarr.push(obj2);
                }
                _this.style_close();
                return _this.callback(opticy, backarr)
            },

            style_close(){
                let _this = this;
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600);
                Tool.removecss(document.body, "overflow");
                Tool.removecss(document.body, "height");
            }
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
