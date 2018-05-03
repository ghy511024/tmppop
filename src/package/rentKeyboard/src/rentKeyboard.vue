<style rel="stylesheet/less" lang="less" scoped>
    @import "../../../common/css/components/rentKeyboard";
</style>
<template>
    <div v-show="show">
        <div class="rent-component" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="close_click">
            <div class="rent-component-main" @click.stop="handleClickMain">
                <!-- S值区域 -->
                <div class="value-area" ref="value_area">
                    <div class="single-value" :class="{'active': index == dataArrSel.value}"
                         v-for="(item, index) in c_dataArr" @click="handleClickSingleValue(index)"
                         :_index="index"
                    >
                        <div class="single-value-shadow"></div>
                        <span class="value-area-title">{{item.title}}{{dataArrSel.unit_position == "top" ? '(' + item.current_unit_text + ')' : ""}}</span>
                        <span class="value-area-val"
                              :class="{'placeholder': !item.defaultValue}">{{item.defaultValue ? item.defaultValue : item.placeholder}}{{dataArrSel.unit_position != "top" ? item.current_unit_text : ""}}</span>
                    </div>
                </div>
                <!-- E值区域 -->
                <!-- S提醒区域 -->
                <div class="tip-area">{{c_suggest}}</div>
                <!-- E提醒区域 -->
                <!-- S单位区域 -->
                <div class="unit-area" v-if="isArray(current_units)">
                    租金单位:
                    <span class="single-unit" :class="{'active': unit.selected}" v-for="unit in current_units"
                          @click="handleClickUnit(unit)">{{unit.text}}</span>
                </div>
                <!-- E单位区域 -->
                <!-- S按钮区域 -->
                <div class="btns-area">
                    <div class="left-btns">
                        <table class="left-btns-table" cellspacing="0" id="table" ref="tab">
                            <tbody>
                            <tr>
                                <td _type="number">1</td>
                                <td _type="number">2</td>
                                <td _type="number">3</td>
                                <td class="del-btn" rowspan="2" _type="del">删除</td>
                            </tr>
                            <tr>
                                <td _type="number">4</td>
                                <td _type="number">5</td>
                                <td _type="number">6</td>
                            </tr>
                            <tr>
                                <td _type="number">7</td>
                                <td _type="number">8</td>
                                <td _type="number">9</td>
                                <td class="confirm-btn" rowspan="2" _type="confirm">确定</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td _type="number">0</td>
                                <td _type="number">.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- E按钮区域 -->
            </div>
        </div>
    </div>
</template>

<script>
    import Tool from '../../../common/js/Tool'
    export default {
        name: 'RentComponent',
        data () {
            return {
                show: false,
                isbeforeActive: false,
                isactive: false,
                curindex: 0,
                dataArrSel: {//默认选择的
//                    value: 0,
                },
                dataArr: [//几个数值选项
                ],
                callback: () => {
                },
            }
        },
        computed: {
            c_demo() {
                let _this = this,
                    res = '';
                return res;
            },
            c_dataArr() {
                let _this = this;
                if (_this.dataArr && _this.dataArr.length && _this.isArray(_this.dataArr)) {
                    _this.dataArr.map((item) => {
                        if (item.defaultUnit && item.defaultUnit.length) {
                            if (_this.isArray(item.defaultUnit)) {
                                item.defaultUnit.map((unit) => {
                                    if (unit.selected) {
                                        item.current_unit_text = unit.text;
                                    }
                                    return unit;
                                });
                            } else {
                                item.current_unit_text = item.defaultUnit;
                            }
                        }
                        return item;
                    });
                }
                return _this.dataArr;
            },
            // dataArr中当前显示的
            current_data() {
                let _this = this,
                    res = null;
                if (_this.dataArr && _this.dataArr.length && _this.isArray(_this.dataArr)) {
                    res = _this.dataArr[_this.dataArrSel.value];
                }
//                  else {
//                    console.error && console.error('错误，请传入正确的数组：dataArr');
//                }
                return res;
            },
            // 当前的所有单位
            current_units() {
                let _this = this,
                    res = [];
                if (_this.current_data) {
                    if (_this.current_data.defaultUnit && _this.current_data.defaultUnit.length) {
                        res = _this.current_data.defaultUnit;
                    }
                }
                return res;
            },
            //当前选中的单位
            current_unit() {
                let _this = this,
                    res = [];
                if (_this.current_data) {
                    if (_this.current_data.defaultUnit && _this.current_data.defaultUnit.length) {
                        if (_this.isArray(_this.current_data.defaultUnit)) {
                            res = _this.current_data.defaultUnit.filter(item => item.selected);
                        } else if (typeof (_this.current_data.defaultUnit) == 'string') {
                            res = _this.current_data.defaultUnit;
                        }
                    }
                }
                return res;
            },
            //当前显示的租金
            c_value() {
                let _this = this,
                    res = '';
                if (_this.current_data) {
                    res = _this.current_data.defaultValue;
                }
                return res;
            },
            //当前提醒
            c_suggest() {
                let _this = this,
                    res = '';
                if (_this.current_data) {
                    res = _this.current_data.suggest;
                }
                return res;
            },

        },
        mounted() {
            let _this = this;
            let table = _this.$refs.tab;
            // 不要问为啥加一个空的touch 监听，部分机型，主要解决部分机型，点击无响应，原理未知.
            document.addEventListener("touchstart", function (evt) {
            })
            table.addEventListener("touchstart", function (ev) {
                let event = ev || window.event;
                let target = event.target || event.srcElement;
                ev.stopPropagation();
                ev.preventDefault();
                if (target.nodeName.toLowerCase() == "td") {
                    var _type = target.getAttribute("_type")
                    if (_type == "number") {
                        _this.handleClick(target.innerHTML);
                    } else if (_type == "del") {
                        _this.handleDel();
                    } else if (_type == "confirm") {
                        _this.handleConfirm();
                    }
                }
            });

            // 区域选择点击
            var value_area = this.$refs.value_area;
            value_area.addEventListener("touchstart", function (ev) {
                let event = ev || window.event;
                let target = event.target || event.srcElement;
                ev.stopPropagation();
                ev.preventDefault();
                var _index = target.getAttribute("_index") || "";
                if (!_index) {
                    var p = target.parentNode;
                    _index = p.getAttribute("_index") || "";
                }
                _this.handleClickSingleValue(_index);
//                if (_type == "number") {
//                    _this.handleClick(target.innerHTML);
//                } else if (_type == "del") {
//                    _this.handleDel();
//                } else if (_type == "confirm") {
//                    _this.handleConfirm();
//                }
            });

        },
        methods: {
            // 点击取消
            close_click() {
                this._close();
                return this.callback(1);
            },
            _close(){
                let _this = this;
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600);
                Tool.removecss(document.body, "overflow");
                Tool.removecss(document.body, "height");
            },
            isArray(obj) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            },

            handleClickSingleValue(index) {
                let _this = this;
                _this.dataArrSel.value = index;
                _this.curindex = index;
            },
            handleClickUnit(item) {
                let _this = this;
                _this.dataArr[_this.dataArrSel.value].defaultUnit.map((unit) => {
                    unit.selected = false;
                    return unit;
                });
                item.selected = true;
            },
            handleClick(val) {
                let _this = this;
                /*
                 * 如果defaultValue没有“.”，且当前点击不是".",则判断如果length>=max_len,则不能添加数字，如果当前点击是“.”则判断length>max_len,则不能添加数字
                 * 如果defaultValue有“.”，则比较“.”后面的位数（dot_length）和dot_max_len,如果dot_length>=dot_max_len,则不能添加数字,如果已经有小数点，再添加小数点不能添加
                 * */
                if (_this.dataArr && _this.isArray(_this.dataArr)) {
                    let defaultValue = _this.dataArr[_this.dataArrSel.value].defaultValue;
                    let max_len = this.dataArr[_this.curindex].max_len ? _this.dataArr[_this.curindex].max_len : 5;//小数点前面的max_len
                    let dot_max_len = this.dataArr[_this.curindex].dot_max_len ? _this.dataArr[_this.curindex].dot_max_len : 2;//小数点后面的max_len
                    let ispoint = defaultValue.indexOf(".");//查找是否存在小数点
                    let cur_not = (val != "." && defaultValue.length >= max_len);//当前不是小数点且length>=max_len,则不能添加数字
                    let cur_yes = (val == "." && max_len < defaultValue.length && defaultValue.length <= (max_len + 1));//当前点击是小数点,length>max_len,则不能添加数字
                    let dot_length = defaultValue.length - 1 - ispoint;//在存在小数点时候，defaultValue中小数点后面的位数
                    if ((ispoint == -1 && (cur_not || cur_yes)) || (ispoint != -1 && (dot_length >= dot_max_len)) || (ispoint != -1 && (val == "."))) {
                        _this.dataArr[_this.dataArrSel.value].defaultValue = _this.c_value;
                    } else {
                        _this.dataArr[_this.dataArrSel.value].defaultValue = (String(_this.c_value) + val);
                    }
                }
            },
            handleDel() {
                let _this = this;
                if (_this.c_value) {
                    _this.dataArr[_this.dataArrSel.value].defaultValue = _this.c_value.substring(0, _this.c_value.length - 1);
                } else {
                    return;
                }
            },
            handleConfirm() {
                let _this = this,
                    resData = [];//返回值数组
                // 如果最后一位是小数点，自动去掉
                if (_this.c_value && _this.c_value.substring(_this.c_value.length - 1) == '.') {
                    _this.dataArr[_this.dataArrSel.value].defaultValue = _this.c_value.substring(0, _this.c_value.length - 1);
                }
                // 调用callback返回值

                if (_this.dataArr && _this.dataArr.length) {
                    _this.dataArr.map((item) => {
                        if (item.defaultUnit && item.defaultUnit.length) {//有单位
                            if (_this.isArray(item.defaultUnit)) {//单位是数组
                                item.defaultUnit.map((unit) => {
                                    if (unit.selected) {
                                        resData.push({
                                            value: item.defaultValue,
                                            unit_str: unit.text,
                                            unit_value: unit.value || '',
                                        });
                                    }
                                });
                            } else {//单位是字符串
                                resData.push({
                                    value: item.defaultValue,
                                    unit_str: item.defaultUnit,
                                    unit_value: ''
                                });
                            }
                        } else {//没有单位
                            resData.push({
                                value: item.defaultValue,
                                unit_str: '',
                                unit_value: ''
                            });
                        }
                        return item;
                    });
                }
                // console.log('处理后的数据：', resData);
                _this.callback(0, resData);
                // 隐藏键盘
                _this._close();
            },
            handleClickMain() {
            },//处理点击背景关闭键盘时，防止冒泡
        },
    }
</script>
