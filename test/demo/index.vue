<style lang="scss">
    body {
        margin: 0px;
        height: 1000px;
    }
</style>
<template>
    <div class="main">
        <!--<button @click="test1">测试dialog</button>-->
        <button @click="popup_select">popup_select</button>
        <button @click="rentKeyboard">输入控件</button>
        <!--<button @click="test4">测试二级联动控件</button>-->
        <button @click="two_linkage">二级联动</button>
        <button @click="area_linkage">区域二级联动</button>
        <button @click="lou_picker">楼层选择</button>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                rentKeyoardData: {
                    dataArrSel: {
                        value: 0,
                        unit_position: "top",//默认单位再数字后面，当参数是top时候，单位在 title后面
                    },

                    dataArr: [
                        {
                            max_len:4,
                            dot_max_len:0,
                            defaultValue: "",
                            defaultUnit: "m",
                            suggest: "请填写租金1",
                            title: "租金1",
                            placeholder: "请填写1",
                            type: "zujin1"
                        },
                        {
                            max_len:4,
                            dot_max_len:0,
                            defaultValue: "",
                            defaultUnit: [{"text": "元/㎡.天", "value": "3", "selected": true}, {
                                "text": "元/月",
                                "value": "1",
                            }],
                            suggest: "请填写租金2",
                            title: "租金2",
                            placeholder: "请填写2",
                            type: "zujin2"
                        },
                        {
                            max_len:4,
                            dot_max_len:0,
                            defaultValue: "",
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
                }
                ,
            }
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {
//            test1(){
//                this.$dialog({
//                    content: "haha"
//                });
//            },
            popup_select(){
                let data = {
                    title: "选择您的身份",
                    //type：radio checkbox
                    selec_type: "checkbox",
                    //list_type： single_text multi_text
                    list_type: "",
                    default_value: "1|2|3",
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
                    console.log("单选多选弹窗控件数据为")
                    console.log(status);
                    console.log(data)
                });
            },
            rentKeyboard(){
                this.$rentKeyboard(this.rentKeyoardData, (status, res) => {
                    console.log("返回的输入控件数据为")
                    console.log(status);
                    console.log(res);
                });
            },
//            test4(){
//                this.$secondLinkage(this.secondLinkageData, (res) => {
//                    console.log('返回数据为：', res);
//                });
//            },
            two_linkage(){
                let param = {
                    title: "行业",
                    first_key: "hangye",
                    sec_key: "zhonlei",
                    first_key_default: "511574",
                    sec_key_default: "511598",
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
                            "option": [
                                {"text": "美容院", "value": "511599"},
                                {"text": "美发店", "value": "511600"},
                                {"text": "美甲店", "value": "511601"},
                                {"text": "SPA馆", "value": "511602"}
                            ]
                        },
                        {
                            "text": "其他",
                            "value": "511596",
                            "title": "种类",
                        }
                    ]
                };
                this.$two_linkage(param, function (ret, data) {
                    // ret==0 点击确定
                    // ret==1 取消
                    console.log("返回的二级联动数据为")
                    console.log(ret)
                    console.log(data)

                });
            },

            area_linkage(){
                let param =
                    {
                        title: "区域",
                        key: "ankang",
//                        key: "bj",
//                        url: "http://m.58.com/sublocals/",
                        first_key: "quyu",
                        sec_key: "diduan",
//                        first_key_default:"1144",
//                        sec_key_default:"6031",
                    };
                this.$area_linkage(param, function (ret, data) {
                    // ret==0 点击确定
                    // ret==1 取消
                    console.log("返回的区域二级联动数据为")
                    console.log(ret)
                    console.log(data)
                });
            },
            lou_picker(){
                var def = {
                    defaultType: "single",//single,multi 单层|多层
                    datasouce: ['-2,99', '-2,99', '1,99'],
                    unit: ['%d层', '%d层', '共%d层'],
                    suggest: "请选择楼层",
                    title: "楼层",
                    defaultselect: "1,1,8",
                    placeholder: "请选择"
                }
                this.$lou_picker(def, (res, data) => {
                    console.log('返回楼层选择数据为：', res, data);
                });
            }
        }
    }
</script>

