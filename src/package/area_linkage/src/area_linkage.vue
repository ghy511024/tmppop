<style lang="scss" type="text/scss" scoped>
    @import "../../../common/css/mixin";
    @import "../../../common/css/components/area_linkage";
</style>
<template>
    <div v-show="show">
        <div class="linkage" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="decision_click">
            <div class="linkage-warp" @click.stop="stop">
                <div class="linkage-title">
                    区域
                    <div class="linkage-sure" id="linkage-sure" @click="decision_click('sure')">确定</div>
                    <div class="linkage-cancel" id="linkage-cancel" @click="decision_click">取消</div>
                </div>
                <div class="linkage-list">
                    <ul>
                        <li class="btnactive">区域</li>
                    </ul>
                    <ul class="left">
                        <li v-for="(item,index) in first_linkage_arry"
                            :class="{btnactive:item.id==first_linkage_default_value}"
                            @click="click_parent2(item.id)"
                            :ref="'area_linkage_'+item.id"
                            :_id="item.id"
                        >
                            {{item.name}}
                        </li>
                    </ul>
                    <ul class="right">
                        <li v-for="(item,index) in sec_linkage_arry"
                            :class="{btnactive:item.id==sec_linkage_default_value}"
                            @click="click_child2(item.id)"
                            :ref="'area_linkage_'+item.id"
                            :_id="item.id"
                        >
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import _ajax from  "../lib/Util";
    import Tool from '../../../common/js/Tool'
    export default {
        name: 'area_linkage',
        data () {
            return {
                show: false,
                isbeforeActive: false,
                isactive: false,
//                url:"",
//                cur_parent: 0,//选中的父级索引值
//                cur_child: 0,//选中的子级索引值
//                parent_obj: [],//父级数组数据
//                child_obj: [],//子级数组数据
//                backObj: [],//返回的数据
//                dataObj: {},//级联数值选项
//                dataStroge: [],//所有数据列表

                //=================华丽的分割线===============
                first_key: "",// quyu
                sec_key: "",// diduan
                allMap: {},// eg:{bj:[{"listname": "chaoyang", "name": "朝阳", "id": "1142"}],chaoyang:[...]}
                idMap: {},
                first_linkage_arry: [],
                sec_linkage_arry: [],
                first_linkage_default_value: "",
                sec_linkage_default_value: "",
                callback: () => {
                },
            }
        },
        mounted(){

        },
        created(){
        },
        computed: {
//            title(){
//                let ret = "区域";
//                if (this.dataObj.title) {
//                    ret = this.dataObj.title;
//                }
//                return ret;
//            },

        },


        methods: {
            stop(){

            },//处理点击背景关闭键盘时，防止冒泡
<<<<<<< HEAD

            // 点击一级菜单
            /*click_parent(item, index) {
                let _this = this;
                _this.cur_parent = index;
                _this.cur_child = 0;
                let tempobj={};
                tempobj={
                    paraname:_this.dataObj.first_key||"",
                    name: item.listname||"",
                    value: item.id||"",
                    text: item.name||""
                };
                _this.backObj[0]=tempobj;
                _this.child_obj=_this.dataStroge[0][item.listname];
                if( _this.child_obj&& _this.child_obj.length!=0){
                    tempobj = {
                        paraname: _this.dataObj.sec_key || "",
                        name: _this.child_obj[0].listname || "",
                        value: _this.child_obj[0].id || "",
                        text: _this.child_obj[0].name || ""
                    };
                    _this.backObj[1] = tempobj;
                }else{
                    tempobj = {
                        paraname: _this.dataObj.sec_key || "",
                        name: "",
                        value:  "",
                        text:  ""
                    };
                    _this.backObj[1] = tempobj;
                }

            },
            // 点击二级菜单
            click_child(item, index) {
                let _this = this;
                _this.cur_child = index;
                let tempobj = {};
                tempobj = {
                    paraname: _this.dataObj.sec_key || "",
                    name: item.listname || "",
                    value: item.id || "",
                    text: item.name || ""
                };
                _this.backObj[1] = tempobj;
            },*/
=======
>>>>>>> 49f4284576c84e6d14391486e5be9b969b66b087
            click_parent2(_id){
                this.first_linkage_default_value = _id;
                this.sec_linkage_default_value = "";
                this._choose();
            },
            // 点击二级菜单
            click_child2(_id){
                this.sec_linkage_default_value = _id;
                this._choose();
            },
<<<<<<< HEAD

=======
>>>>>>> 49f4284576c84e6d14391486e5be9b969b66b087
            // 点击完成
            decision_click(type) {
                let _this = this;
                var op = type == "sure" ? 0 : -1;

                var retarry = [];
                if (op == 0) {
                    var first_choose = this.idMap[this.first_linkage_default_value] || {};
                    var sec_choose = this.idMap[this.sec_linkage_default_value] || {};
                    var obj1 = {
                        paraname: this.first_key,
                        name: first_choose["listname"] || "",
                        value: first_choose["id"] || "",
                        text: first_choose["name"] || "",
                    }
                    var obj2 = {
                        paraname: this.sec_key,
                        name: sec_choose["listname"] || "",
                        value: sec_choose["id"] || "",
                        text: sec_choose["name"] || "",
                    }

                    retarry.push(obj1);
                    retarry.push(obj2);
                }
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600);
                Tool.removecss(document.body, "overflow");
                Tool.removecss(document.body, "height");

                _this.callback(op, retarry);
            },
            _choose(){
                this._clear();
                let ret = 0;
                var first_id = this.first_linkage_default_value;
                var sec_id = this.sec_linkage_default_value;

                var firs_choose;
                var sec_array;
//                var hasChange = false;

                // 计算一级选中id
                if (ret == 0) {
                    if (!first_id) {
                        first_id = (this.first_linkage_arry[0] || {})["id"]
                    }
                    if (!!first_id) {
                        this.first_linkage_default_value = first_id
                    } else {
                        ret = -1;
                    }
                }

                // 寻找 二级数组
                if (ret == 0) {
                    firs_choose = this.idMap[first_id]
                    if (!!firs_choose) {
                        var name = firs_choose["listname"];
                        sec_array = this.allMap[name];
                    }
                    if (!sec_array) {
                        ret = -2
                    }
                }

                // 计算二级选中id
                if (ret == 0) {
                    this.sec_linkage_arry = sec_array;
                    if (!sec_id) {
                        sec_id = (this.sec_linkage_arry[0] || {})["id"];
                    }
                    if (!sec_id) {
                        ret = -3;
                    }
                }
                // 赋值
                if (ret == 0) {
                    this.sec_linkage_default_value = sec_id;
                }
                this._scroll_to_choose()
            },
            _clear(){
                for (var key in this.idMap) {
                    this.idMap[key].select = false;
                }
            },
            // 滚动到选中的id
            _scroll_to_choose(){
                var _this = this;
                _this.$nextTick(function () {
                    var first_id = this.first_linkage_default_value;
                    var sec_id = this.sec_linkage_default_value;

                    var dom1 = this.$refs["area_linkage_" + first_id];
                    var dom2 = this.$refs["area_linkage_" + sec_id];
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
            }
        },
        watch: {
            'show'(val) {
                if (val) {
                }
            }
        },
    }
</script>
