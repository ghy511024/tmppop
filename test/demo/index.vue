<style lang="scss">
    body {
        margin: 0px;
    }
</style>
<template>
    <div class="main">
        <button @click="test1">测试dialog</button>
        <button @click="test2">测试popup_select</button>
        <button @click="test3">测试lou_picker</button>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {}
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
                    selec_type: "checkbox",
                    //list_type： single_text multi_text
                    list_type: "multi_text",
                    options: [
                        {"title": "房东", "text": "房屋所有者，具备认证房本资质", value: "1"},
                        {"title": "转租", "text": "转让自己承租的房子", value: "2"},
                        {"title": "房东", "text": "房屋所有者，具备认证房本资质", value: "3"},
                        {"title": "转租", "text": "转让自己承租的房子", value: "4"},
                        {"title": "经纪人", "text": "房产中介，拥有专业的展示空间", value: "5"},
                        {"title": "职业房东", "text": "公寓经营者/多房源管理者", value: "6"},
//                        {"title":"商铺产品"},
//                        {"title":"商铺产品"},
//                        {"title":"商铺产品"},
//                        {"title":"商铺产品"},
//                        {"text":"商铺产品"},
                    ],
                };
                this.$popup_select(data,function(status,data){ //data是返回的数据，status是确定还是取消状态
                    console.log(status);
                    console.log(data)
                });

            },
            test3(){},
        }
    }
</script>

