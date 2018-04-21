<style lang="scss">
    body {
        margin: 0px;
    }
</style>
<template>
    <div class="main">
        <button @click="test1">测试dialog</button>
        <button @click="test2">测试popup_select</button>
        <button @click="test3">测试输入控件</button>
        <button @click="test4">测试二级联动控件</button>
        <button @click="test5">二级联动new</button>
    </div>
</template>
<script>
    import Vue from 'Vue';
    export default{
        data: function () {
            return {
                rentKeyoardData: {
                    dataArrSel: {
                        value: 0
                    },
                    dataArr: [
                        {
                            defaultValue: "123",
                            defaultUnit: [{"text": "元/㎡.天", "value": "3"}, {
                                "text": "元/月",
                                "value": "1",
                                "selected": true
                            }],
                            suggest: "请填写租金1",
                            title: "租金1",
                            placeholder: "请填写1",
                            type: "zujin1"
                        },
                        {
                            defaultValue: "123",
                            defaultUnit: [{"text": "元/㎡.天", "value": "3", "selected": true}, {
                                "text": "元/月",
                                "value": "1",
                            }],
                            suggest: "请填写租金2",
                            title: "租金2",
                            placeholder: "请填写2",
                            type: "zujin2"
                        }
                    ],
                },
                secondLinkageData: {
                    defaultValue: '',//默认选中的行业，为空默认选择第一个。
                    slots: [
                        {
                            values: [
                                {text: '餐饮美食', parentId: 0, id: 1},
                                {text: '美容美发', parentId: 0, id: 2},
                                {text: '服装鞋包', parentId: 0, id: 3},
                            ],
                        },
                        {
                            values: [
                                {text: '餐饮美食1', parentId: 1, id: 10},
                                {text: '餐饮美食2', parentId: 1, id: 11},
                                {text: '餐饮美食3', parentId: 1, id: 12},
                                {text: '餐饮美食4', parentId: 1, id: 13},
                                {text: '美容美发1', parentId: 2, id: 20},
                                {text: '美容美发2', parentId: 2, id: 21},
                                {text: '美容美发3', parentId: 2, id: 22},
                                {text: '美容美发4', parentId: 2, id: 23},
                                {text: '美容美发5', parentId: 2, id: 24},
                                {text: '服装鞋包1', parentId: 3, id: 30},
                                {text: '服装鞋包2', parentId: 3, id: 31},
                                {text: '服装鞋包3', parentId: 3, id: 32},
                                {text: '服装鞋包4', parentId: 3, id: 33},
                                {text: '服装鞋包5', parentId: 3, id: 34},
                                {text: '服装鞋包6', parentId: 3, id: 35},
                                {text: '服装鞋包7', parentId: 3, id: 36},
                                {text: '服装鞋包8', parentId: 3, id: 37},
                                {text: '服装鞋包9', parentId: 3, id: 38},
                            ],
                        },
                    ],
                },
            }
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {
            test1(){
                this.$dialog({
                    content: "haha"
                });
            },
            test2(){
                let data = {
                    title: "选择您的身份",
                    //type：radio checkbox
                    selec_type: "",
                    //list_type： single_text multi_text
                    list_type: "",
                    option: [
                        {"title": "房东", "text": "房屋所有者，具备认证房本资质", value: "1"},
                        {"title": "转租", "text": "转让自己承租的房子", value: "2"},
                        {"title": "房东", "text": "房屋所有者，具备认证房本资质", value: "3"},
                        {"title": "转租", "text": "转让自己承租的房子", value: "4"},
                        {"title": "经纪人", "text": "房产中介，拥有专业的展示空间", value: "5"},
                        {"title": "职业房东", "text": "公寓经营者/多房源管理者", value: "6"},
                    ],
                };
                this.$popup_select(data, function (status, data) { //data是返回的数据，status是确定还是取消状态
                    console.log(status);
                    console.log(data)
                });
            },
            test3(){
                this.$rentKeyboard(this.rentKeyoardData, (res) => {
                    console.log(this.rentKeyoardData);
                    console.log('返回数据为：', res);
                });
            },
            test4(){
                this.$secondLinkage(this.secondLinkageData, (res) => {
                    console.log('返回数据为：', res);
                });
            },
            test5(){
                let param = {
                    title: "行业",
                    pname_1: "hangye",
                    pname_2: "zhonlei",
                    option: [
                        {
                            "value": "511574",
                            "text": "餐饮美食",
                            "title": "种类",
                            "option": [
                                {"text": "餐馆", "value": "511589"},
                                {"text": "食堂", "value": "511590"},
                                {"text": "面包店", "value": "511591"},
                                {"text": "冷饮甜品店", "value": "511592"},
                                {"text": "咖啡馆", "value": "511593"},
                                {"text": "茶艺馆", "value": "511594"},
                                {"text": "小吃店", "value": "511595"},
                                {"text": "水果食品店", "value": "511596"},
                                {"text": "凉茶店", "value": "511597"},
                                {"text": "快餐店", "value": "511598"}
                            ]
                        },

                        {
                            "text": "美容美发",
                            "value": "511575",
                            "title": "种类",
                            "option":
                                [
                                    {"text": "美容院", "value": "511599"},
                                    {"text": "美发店", "value": "511600"},
                                    {"text": "美甲店", "value": "511601"},
                                    {"text": "SPA馆", "value": "511602"}
                                ]
                        }
                    ]
                };
                this.$two_linkage(param,function(ret,data){
                    // ret==0 点击确定
                    // ret==1 取消
                    console.log(ret)
                    console.log(data)

//                    data = [
//                        {
//                            paramname: "hangye",
//                            value: "",
//                            text: ""
//                        },
//                        {
//                            paramname: "zhonlei",
//                            value: "",
//                            text: ""
//                        }
//                        ]

                });
            },
        }
    }
</script>

