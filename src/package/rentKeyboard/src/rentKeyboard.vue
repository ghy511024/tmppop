<style rel="stylesheet/less" lang="less" scoped>
    .rent-component {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        .rent-component-main {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fff;
            /* S值显示区域 */
            .value-area {
                height: 100px;
                display: -moz-box;
                display: -webkit-box;
                -moz-box-align: center;
                -webkit-box-align: center;
                box-align: center;
                -moz-box-pack: justify;
                -webkit-box-pack: justify;
                box-pack: justify;
                .single-value {
                    flex: 1;
                    width: 0;
                    position: relative;
                    height: 100%;
                    box-sizing: border-box;
                    .single-value-shadow {
                        width: 0;
                        height: 0;
                        position: absolute;
                        top: -1px;
                        left: 0;
                    }
                    &.active {
                        border-top: 3px solid #fc5638;
                        .single-value-shadow {
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(rgba(244, 199, 255, 0.1), rgba(255, 255, 255, 0));
                        }
                    }
                    .value-area-title {
                        display: block;
                        text-align: center;
                        width: 100%;
                        height: 28px;
                        line-height: 28px;
                        font-size: 14px;
                        color: #999999;
                        margin-top: 14px;
                    }
                    .value-area-val {
                        display: block;
                        width: 100%;
                        text-align: center;
                        font-size: 22px;
                        color: #fc5638;
                        &.placeholder {
                            color: #999;
                        }
                    }
                }
            }
            /* E值显示区域 */
            /* S提醒显示区域 */
            .tip-area {
                text-align: center;
                width: 100%;
                height: 50px;
                line-height: 50px;
                border-top: 1px solid #e3e3e4;
                border-bottom: 1px solid #e3e3e4;
                background: #f9fafc;
                text-align: center;
                font-size: 15px;
                color: #999;
            }
            /* E提醒显示区域 */
            /* S单位显示区域 */
            .unit-area {
                text-align: center;
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                color: #666;
                box-sizing: border-box;
                padding: 0 14px;
                text-align: left;
                .single-unit {
                    display: inline-block;
                    width: 80px;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 80px;
                    text-align: center;
                    font-size: 15px;
                    color: #333;
                    background: #eee;
                    &:not(:last-child) {
                        margin-right: 8px;
                    }
                    &.active {
                        background: red;
                        color: #fff;
                    }
                }
            }
            /* E单位显示区域 */
            /* S按钮显示区域 */
            .btns-area {
                text-align: center;
                width: 100%;
                overflow: hidden;
                .left-btns {
                    float: left;
                    width: 100%;
                    .left-btns-table {
                        width: 100%;
                        tr {
                            height: 70px;
                            td {
                                font-size: 24px;
                                color: #000;
                                border-right: 1px solid #e3e3e4;
                                border-bottom: 1px solid #e3e3e4;
                            }
                            .del-btn {
                                width: 100px;
                                background: #eaecf0;
                                color: #222;
                                font-size: 16px;
                            }
                            .confirm-btn {
                                width: 100px;
                                background: #fc5638;
                                color: #fff;
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
            /* E按钮显示区域 */
        }
    }
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
<template>
    <div>
        <div class="rent-component" v-if="visible" @click.stop="hide">
            <div class="rent-component-main" @click.stop="handleClickMain">
                <!-- S值区域 -->
                <div class="value-area">
                    <div class="single-value" :class="{'active': index == dataArrSel.value}" v-for="(item, index) in c_dataArr" @click="handleClickSingleValue(index)">
                        <div class="single-value-shadow"></div>
                        <span class="value-area-title">{{item.title}}</span>
                        <span class="value-area-val" :class="{'placeholder': !item.defaultValue}">{{item.defaultValue ? item.defaultValue + item.current_unit_text : item.placeholder}}</span>
                    </div>
                </div>
                <!-- E值区域 -->
                <!-- S提醒区域 -->
                <div class="tip-area">{{c_suggest}}</div>
                <!-- E提醒区域 -->
                <!-- S单位区域 -->
                <div class="unit-area" v-if="isArray(current_units)">
                    租金单位:
                    <span class="single-unit" :class="{'active': unit.selected}" v-for="unit in current_units" @click="handleClickUnit(unit)">{{unit.text}}</span>
                </div>
                <!-- E单位区域 -->
                <!-- S按钮区域 -->
                <div class="btns-area">
                    <div class="left-btns">
                        <table class="left-btns-table" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td @click="handleClick('1')">1</td>
                                    <td @click="handleClick('2')">2</td>
                                    <td @click="handleClick('3')">3</td>
                                    <td class="del-btn" rowspan="2" @click="handleDel">删除</td>
                                </tr>
                                <tr>
                                    <td @click="handleClick('4')">4</td>
                                    <td @click="handleClick('5')">5</td>
                                    <td @click="handleClick('6')">6</td>
                                </tr>
                                <tr>
                                    <td @click="handleClick('7')">7</td>
                                    <td @click="handleClick('8')">8</td>
                                    <td @click="handleClick('9')">9</td>
                                    <td class="confirm-btn" rowspan="2" @click="handleConfirm">确定</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td @click="handleClick('0')">0</td>
                                    <td @click="handleClick('.')">.</td>
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
    export default {
        name: 'RentComponent',
        data () {
            return {
                visible: false,
                dataArrSel: {//默认选择的
                    value: 0,
                },
                dataArr: [//几个数值选项
                ],
                callback: () => {},
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
                } else {
                    console.error && console.error('错误，请传入正确的数组：dataArr');
                }
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
        methods: {
            isArray(obj) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            },
            hide() {
                this.visible = false;
            },
            handleClickSingleValue(index) {
                let _this = this;
                _this.dataArrSel.value = index;
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
                if (_this.dataArr && _this.isArray(_this.dataArr)) {
                    if(_this.dataArr[_this.dataArrSel.value].defaultValue.length>4){
                        _this.dataArr[_this.dataArrSel.value].defaultValue = _this.c_value;
                    }else{
                        _this.dataArr[_this.dataArrSel.value].defaultValue = (String(_this.c_value) + val);
                    }
                }
            },
            handleDel() {
                let _this = this;
                if (_this.c_value) {
                    _this.dataArr[_this.dataArrSel.value].defaultValue = _this.c_value.substring(0, _this.c_value.length -1);
                } else {
                    return;
                }
            },
            handleConfirm() {
                let _this = this,
                      resData = [];//返回值数组
                // 如果最后一位是小数点，自动去掉
                if (_this.c_value && _this.c_value.substring(_this.c_value.length -1) == '.') {
                    _this.dataArr[_this.dataArrSel.value].defaultValue = _this.c_value.substring(0, _this.c_value.length -1);
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
                _this.callback(resData);
                // 隐藏键盘
                _this.visible = false;
            },
            handleClickMain() {},//处理点击背景关闭键盘时，防止冒泡
        },
    }
</script>
