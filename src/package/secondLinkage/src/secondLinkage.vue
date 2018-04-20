<style rel="stylesheet/less" lang="less" scoped>
    .second-linkage {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        .second-linkage-main {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fff;
            /* S title显示区域 */
            .title-area {
                text-align: center;
                width: 100%;
                height: 50px;
                line-height: 50px;
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                background: #eff;
                position: relative;
                .cancel-btn {
                    position: absolute;
                    width: 40px;
                    height: 100%;
                    line-height: 50px;
                    left: 10px;
                    top: 0;
                    font-size: 16px;
                    color: #666;
                }
                .title {
                    width: 100%;
                    height: 100%;
                    line-height: 50px;
                    font-size: 14px;
                    color: #666;
                }
                .confirm-btn {
                    position: absolute;
                    width: 40px;
                    height: 100%;
                    line-height: 50px;
                    right: 10px;
                    top: 0;
                    color: red;
                    font-size: 16px;
                }
            }
            /* E title显示区域 */
            /* S按钮显示区域 */
            .btns-area {
                width: 100%;
                height: 350px;
                display: -moz-box;
                display: -webkit-box;
                display: box;
                -moz-box-align: center;
                -webkit-box-align: center;
                box-align: center;
                -moz-box-pack: justify;
                -webkit-box-pack: justify;
                box-pack: justify;
                .single-slot {
                    flex-grow: 1;
                    height: 100%;
                    overflow: hidden;
                    overflow-y: scroll;
                    .single-slot-inner {
                        width: 100%;
                        height: 100%;
                        overflow: auto;
                        box-sizing: content-box;
                        padding-right: 17px;
                        -webkit-overflow-scrolling: touch;
                        .single-slot-item {
                            width: 100%;
                            height: 50px;
                            line-height: 50px;
                            box-sizing: border-box;
                            padding: 0 10px;
                            color: #333;
                            font-size: 14px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            &.active {
                                background: #eee;
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
    <transition name="router-fade" mode="out-in">
        <div class="second-linkage" v-if="visible" @click.stop="hide">
            <div class="second-linkage-main" @click.stop="handleClickMain">
                <!-- S title区域 -->
                <div class="title-area">
                    <span class="cancel-btn" @click="handleClickCancel">取消</span>
                    <span class="title">{{c_title}}</span>
                    <span class="confirm-btn" @click="handleClickConfirm">完成</span>
                </div>
                <!-- E title区域 -->
                <!-- S按钮区域 -->
                <div class="btns-area">
                    <div class="single-slot">
                        <div class="single-slot-inner">
                            <div class="single-slot-item parent" :class="{'active': item.id == current_parent.id}" v-for="item in dataObj.slots[0].values" @click="handleClickParent(item)">{{item.text}}</div>
                        </div>
                    </div>
                    <div class="single-slot">
                        <div class="single-slot-inner">
                            <div class="single-slot-item child" :class="{'active': item.id == current_child.id}" v-for="item in c_children" @click="handleClickChild(item)">{{item.text}}</div>
                        </div>
                    </div>
                </div>
                <!-- E按钮区域 -->
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'SecondLinkage',
        data () {
            return {
                visible: false,
                dataObj: {//级联数值选项
                },
                callback: () => {},
            }
        },
        computed: {
            c_demo() {
                let _this = this,
                      res = '';
                return res;
            },
            c_title() {
                let _this = this,
                      res = '';
                // if (_this.dataObj.defaultValue) {//显示默认选中的行业
                //     res = _this.current_child.text;
                // } else {//显示placeholder
                //     res = _this.dataObj.placeholder;
                // }
                res = _this.current_child.text;
                return res;
            },
            current_parent() {
                let _this = this,
                      _parentId = '',
                      res = {};
                if (_this.dataObj.defaultValue) {//有默认值
                    let _valueArr = _this.dataObj.defaultValue.split(',');
                    if (_valueArr && _valueArr.length == 2) {
                        _parentId = _valueArr[0].trim();
                        res = _this.dataObj.slots[0].values.filter(item => item.id == _parentId)[0];
                    } else {
                        console.error && console.error('默认值格式不正确，请传入以英文逗号分隔的数值字符串');
                    }
                } else {//无默认值
                    res = _this.dataObj.slots[0].values[0];
                }
                return res;
            },
            current_child() {
                let _this = this,
                      _parentId = '',
                      _childId = '',
                      res = {};
                if (_this.dataObj.defaultValue) {//有默认值
                    let _valueArr = _this.dataObj.defaultValue.split(',');
                    if (_valueArr && _valueArr.length == 2) {
                        _childId = _valueArr[1].trim();
                        res = _this.dataObj.slots[1].values.filter(item => item.id == _childId)[0];
                    } else {
                        console.error && console.error('默认值格式不正确，请传入以英文逗号分隔的数值字符串');
                    }
                } else {//无默认值
                    _parentId = _this.dataObj.slots[0].values[0].id;
                    res = _this.dataObj.slots[1].values.filter(item => item.parentId == _parentId)[0];
                }
                return res;
            },
            c_children() {
                let _this = this,
                      _parentId = '',
                      _childId = '',
                      res = [];
                if (_this.dataObj.defaultValue) {//有默认值
                    let _valueArr = _this.dataObj.defaultValue.split(',');
                    if (_valueArr && _valueArr.length == 2) {
                            _parentId = _valueArr[0].trim();
                            _childId = _valueArr[1].trim();
                        _this.dataObj.slots[1].values.map((child) => {
                            if (child.parentId == _parentId) {
                                res.push(child);
                            }
                        });
                    } else {//默认值格式不正确
                        console.error && console.error('默认值格式不正确，请传入以英文逗号分隔的数值字符串');
                    }
                } else {//无默认值
                    _parentId = _this.dataObj.slots[0].values[0].id;
                    _this.dataObj.slots[1].values.map((child) => {
                        if (child.parentId == _parentId) {
                            res.push(child);
                        }
                    });
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
            // 点击一级菜单
            handleClickParent(item) {
                let _this = this,
                      _valueArr = [];
                if (_this.dataObj.defaultValue) {//有默认值
                    _valueArr = _this.dataObj.defaultValue.split(',');
                    _valueArr[0] = item.id;
                    if (_this.current_child.parentId != item.id) {//当点击的父元素的ID和当前子元素的parentId不一样时，默认把当前父元素的子元素的第一个设置为默认子元素。
                        _valueArr[1] = _this.dataObj.slots[1].values.filter(single => single.parentId == item.id)[0].id;
                    }
                    _this.dataObj.defaultValue = _valueArr.join(',');
                } else {//无默认值
                    _valueArr[0] = item.id;
                    _valueArr[1] = _this.current_child.id;
                    _this.dataObj.defaultValue = _valueArr.join(',');
                }
            },
            // 点击二级菜单
            handleClickChild(item) {
                let _this = this,
                      _valueArr = [];
                if (_this.dataObj.defaultValue) {//有默认值
                    _valueArr = _this.dataObj.defaultValue.split(',');
                    _valueArr[1] = item.id;
                    _this.dataObj.defaultValue = _valueArr.join(',');
                } else {//无默认值
                    _valueArr[0] = _this.current_parent.id;
                    _valueArr[1] = item.id;
                    _this.dataObj.defaultValue = _valueArr.join(',');
                }
            },
            // 点击取消
            handleClickCancel() {
                let _this = this;
                _this.hide();
            },
            // 点击完成
            handleClickConfirm() {
                let _this = this,
                      resData = '';
                resData = _this.dataObj.defaultValue;
                _this.callback(resData);
                _this.hide();
            },
            handleClickMain() {},//处理点击背景关闭键盘时，防止冒泡
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
