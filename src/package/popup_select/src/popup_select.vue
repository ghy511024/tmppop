<template>

    <div v-show="show">
        <div class="pop-select" v-bind:class="{beforeActive:isbeforeActive, active:isactive}" @click="close_click">
            <div class="pop-wrap" @click.stop="stop">
                <div class="pop-title">{{title}}
                    <div class="pop-sure" id="pop-sure" @click="decision_click">确定</div>
                    <div class="pop-cancel" id="pop-cancel" @click="close_click">取消</div>
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
    export default {
        name: 'app',
        data() {
            return {
                title:"",
                selec_type:"",
                option:[],
                show: false,
                single_text: false,
                multi_text: false,
                isbeforeActive: false,
                isactive: false,
                currentobj:{},
                muli_currentobj:[],
                select_map:{},
                callback:function(){},
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
                    } else {//点击的之前状态是true时候，当前就是取消状态，删除存储中当前数据（遍历时候记住当前元素在存储中的下标，遍历结束后删除该元素）
                        let length = _this.muli_currentobj.length || 0;
                        let deleti = null;
                        for (let i = 0; i < length; i++) {
                            let value_obj = _this.muli_currentobj[i].value;
                            let value_cur = value;
                            if (value_obj == value_cur) {
                                deleti = i;
                            }
                        }
                            if (deleti!=null) {
                                 _this.muli_currentobj.splice(deleti, 1);
                            }

                    }
                    _this.select_map[value] = !_this.select_map[value];
                }
                let tmpmap = Object.assign({}, _this.select_map);
                _this.select_map = tmpmap;
            },
            stop(){
            },
            decision_click(){
                let _this=this;
                if(_this.selec_type=="radio"){
                    _this.isactive = false;
                    setTimeout(function () {
                        _this.isbeforeActive = false;
                        _this.show = false;
                    }, 600)
//                        console.log("确定:   "+_this.currentobj.title);
                    return _this.callback(0,_this.currentobj);
                }else if(_this.selec_type=="checkbox"){
                    _this.isactive = false;
                    setTimeout(function () {
                        _this.isbeforeActive = false;
                        _this.show = false;
                    }, 600)

//                        console.log("确定按钮----=----"+"当前选中元素如下:   ")
//                        for(let i =0;i<_this.muli_currentobj.length;i++){
//                            console.log(_this.muli_currentobj[i].title);
//                        }
                    return _this.callback(0,_this.muli_currentobj);
                }

            },
            close_click() {
                let _this = this;
                if (_this.selec_type == "radio") {
//                        console.log("取消:   "+_this.currentobj.title);
                } else if (_this.selec_type == "checkbox") {
//                        console.log("取消按钮---=----"+"当前选中元素如下:   ")
//                        for(let i =0;i<_this.muli_currentobj.length;i++){
//                            console.log(_this.muli_currentobj[i].title);
//                    }
                }
                _this.isactive = false;
                setTimeout(function () {
                    _this.isbeforeActive = false;
                    _this.show = false;
                }, 600)
                return _this.callback(1);
            },

        },
        watch: {},
    };
</script>


<style lang="scss" type="text/scss">
    @import "../../../common/css/mixin";

    * {
        margin: 0px;
        padding: 0px;
        list-style: none
    }

    .pop-select {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        transition: all 0.4s ease;
        /*background: rgba(0,0,0,0.4);*/
    }

    .pop-select .pop-wrap {
        z-index: 1;
        transition: all 0.4s ease;
        position: absolute;
        width: 100%;
        bottom: 0px;
        background: #ffffff;
        transform: translateY(100%);
    }

    .pop-select .pop-title {
        height: 1.2rem;
        background: #f9fafc;
        text-align: center;
        font-size: 0.37333rem;
        color: #999999;
        line-height: 1.2rem;
        position: relative;
    }

    .pop-select .pop-title:after {
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

    .pop-select .pop-title .pop-sure, .pop-select .pop-title .pop-cancel {
        position: absolute;
        z-index: 1;
        width: 1.6rem;
        height: 1.2rem;
        line-height: 1.22667rem;
        color: #ff552e;
        top: 0px;
        right: 0px;
    }

    .pop-select .pop-title .pop-sure.pop-cancel, .pop-select .pop-title .pop-cancel.pop-cancel {
        right: auto;
        left: 0px;
        color: #7b7b7b;
    }

    .pop-select .pop-list {
        widtH: 100%;
        max-height: 7.46668rem;
        overflow: hidden;
        overflow-y: scroll;
    }

    .pop-select .pop-list ul {
        width: 9.33333rem;
        margin: 0 auto;
    }

    .pop-select .pop-list ul li {
        width: 100%;
        height: 1.86667rem;
        position: relative;
    }

    .pop-select .pop-list ul li:after {
        border-radius: 0px;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-bottom: 1px solid #f1f1f1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }

    .pop-select .pop-list ul li .pop-info {
        position: absolute;
        top: 0.4rem;
        font-size: 0.45333rem;
        color: #333333;
        left: 0.06667rem;
    }

    .pop-select .pop-list ul li .pop-single-info {
        position: absolute;
        top: 50%;
        margin-top: -11px;
        font-size: 0.45333rem;
        color: #333333;
        left: 0.06667rem;
    }

    .pop-select .pop-list ul li .pop-desc {
        font-size: 0.32rem;
        position: absolute;
        left: 0.06667rem;
        top: 0.98667rem;
        color: #7b7b7b;
    }

    .pop-select .pop-list ul li .pop-arrow {
        position: absolute;
        right: 0.26667rem;
        width: 22px;
        height: 22px;
        top: 50%;
        margin-top: -11px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAASFBMVEUAAADHx87IyM7IyM7Kys/IyM7Jyc/IyNHKytHW1tb////Hx87IyM3IyM3IyM7IyM3Jyc7IyM7Jyc7Ly9HIyNPHx83IyM3Hx81MCBRBAAAAF3RSTlMA8qt/QttXOCQMAennw7+ZjYNtLBf2kCIzlTUAAAEGSURBVDjLjJFbbsMwDAQpUpIl+R07mfvftEBdFE7ih+ZzMSB2QfmgNLMOwbkw6NwUucKPHTu60Z+qTQ+EKfqUc/JxCkDfHKpJobVlHy3WgqaDBg5n+TPN5nBfXR6gqxywKjzeoxfYyfZi8Hq/+4xySnzub3uIckGE/97JYXKJ4ZJsKFqu5aLo3y9wq9ywOrbv9JjcYvTbujbfy7n93ThiUoExipSOpUZe6Io0BKki0MjMVCdPzKLEOjmiMuDrZM8ggVQnJ4I4cp2ccT+V1TkBAAAIxDD/rqMhOwPP0VZxtVED1urqKHXuCtJEtMI/b1UPOygoyAy+BoyD3IH5aGIE1Gp7aZaOAVpkFMUoYaaBAAAAAElFTkSuQmCC");
        background-size: cover;
    }

    .pop-select .pop-list ul li.active .pop-arrow {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAPFBMVEUAAAD/VS7/VjH/VzL/VS7/Vi//VS7/VS//VS//VS7/VS7/Vi//Vy//WjX/VS7/VS7/Yz//4tv/////m4Tfv1CvAAAAD3RSTlMA8UQ459nDv62lmYNtIpDE1s/TAAAA6klEQVQ4y53VS5KDMAwEUPmP7ZAmk/vfdRaZcoKITDO95ZWqjGVJdEKvJTmXSu1BpvEt4iOxeZOGjEPy9/Lrgq9Z1qP1Dkac1/aGSW57e8c0d7auru1xGj/+gzvHbv3DC4gsLxtA5XU7mcP5/HTbc3fGNrWPn6GbiMS5fWyjB0UCa4EgnbboUmmLKoW2KJJoiySOtnAf+Llpe8Bp2PHZsEhSFLAtilQobVpU6VDatOgSoPTO6o6OSps2jhZ9a8uijeZ/a2XVA897bdl8/cHyo4AfMtfHFz8Y+ZHLD/Ora4JfQPxq+//S5NfxLzPrWEC1LMpOAAAAAElFTkSuQmCC");
    }

    .pop-select.beforeActive {
        display: block;
        background: transparent;
    }

    .pop-select.beforeActive .pop-wrap {
        transform: translateY(100%);
    }

    .pop-select.active {
        background: rgba(0, 0, 0, 0.3);
    }

    .pop-select.active .pop-wrap {
        transform: translateY(0);
    }

</style>

