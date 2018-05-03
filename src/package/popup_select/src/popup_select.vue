<template>

    <div v-show="show" ref="picker">
        <div class="pop-select" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="close">
            <div class="pop-wrap" @click.stop="stop">
                <div class="pop-title">{{title}}
                    <div class="pop-sure" id="pop-sure" @click="close('sure')">确定</div>
                    <div class="pop-cancel" id="pop-cancel" @click="close">取消</div>
                </div>
                <div class="pop-list">
                    <ul>
                        <li shenfen-id="jsptpl-style" v-for="(item,index) in option"
                            @click="add_class(item.value,index)"
                            :class="{active:select_map[item.value]}">
                            <div class="pop-single-info" v-show="single_text">{{item.text}}</div>
                            <div class="pop-info" v-show="multi_text">{{item.title}}</div>
                            <div class="pop-desc" v-show="multi_text">{{item.text}}</div>
                            <div class="pop-arrow"></div>
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
        name: 'app',
        data() {
            return {
                title: "",
                selec_type: "",
                option: [],
                show: false,
                single_text: false,
                multi_text: false,
                isbeforeActive: false,
                isactive: false,
                currentobj: {},
                muli_currentobj: [],
                select_map: {},
                callback: function () {
                },
            };
        },
        creat(){

        },
        mounted() {
        },
        computed: {},
        methods: {
            add_class(value, index){//select_map初始为空，无法赋值，radio时候先遍历有value直接赋值为false，当前赋值true，然后拷贝进tmp再赋值（监测对象）
                let _this = this;
                if (_this.selec_type == "radio") {//单选框遍历所有select_map直接赋值false，当前value的select_map赋值true，存储放当前数据
                    for (let key in _this.select_map) {
                        _this.select_map[key] = false;
                    }
                    _this.select_map[value] = true;
                    _this.currentobj = _this.option[index];
                }
                else {//复选框时候状态取反
                    if (!_this.select_map[value]) {//点击的之前状态是false时候，当前就是选中状态，添加当前数据进存储
                        _this.muli_currentobj.push(_this.option[index]);
                        console.log("多选取反数据,添加",_this.muli_currentobj)
                    } else {//点击的之前状态是true时候，当前就是取消状态，删除存储中当前数据（遍历时候记住当前元素在存储中的下标，遍历结束后删除该元素）
                        let length = _this.muli_currentobj.length || 0;
                        let deleti = "";
                        for (let i = 0; i < length; i++) {
                            let value_obj = _this.muli_currentobj[i].value;
                            let value_cur = value;
                            if (value_obj == value_cur) {
                                deleti = i;
                            }
                        }
                        if (deleti != "") {
                            _this.muli_currentobj.splice(deleti, 1);
                        }
                        console.log("多选取反数据，删除",_this.muli_currentobj)

                    }
                    _this.select_map[value] = !_this.select_map[value];
                }
                let tmpmap = Object.assign({}, _this.select_map);
                _this.select_map = tmpmap;
            },
            stop(){
            },
            copy(obj){
                var newobj = {};
                for (var attr in obj) {
                    newobj[attr] = obj[attr];
                }
                return newobj;
            },
            close(type){
                let _this = this;
                let op = type == "sure" ? 0 : -1;

                if (_this.selec_type == "radio") {
                    let obj = {};
                    obj = _this.copy(this.currentobj);
                    _this.select_map[(obj || {})["value"]] = false;
                    _this.style_close();
                    if (op == 0) {
                        return _this.callback(op, obj);
                    } else {
                        return _this.callback(op);
                    }

                } else if (_this.selec_type == "checkbox") {
                    let array = [];

                    _this.muli_currentobj.forEach(function (item, index) {
                        array[index] = _this.copy(item);
                        _this.select_map[(_this.muli_currentobj[index] || {})["value"]] = false;
                    });
                    _this.muli_currentobj=[];
                    _this.style_close();
                    if (op == 0) {
                        return _this.callback(op, array);
                    } else {
                        return _this.callback(op);
                    }

                }
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
            },

        },
        watch: {},
    };
</script>


<style lang="scss" type="text/scss" scoped>
    @import "../../../common/css/mixin";
    @import "../../../common/css/components/pop_select";


</style>

