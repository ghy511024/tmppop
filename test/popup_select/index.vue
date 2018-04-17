<style lang="scss">
    body {
        margin: 0px;
    }
</style>
<template>
    <div class="main">
        <button @click="test1">测试</button>
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
                let data={
                    title:"选择您的身份",
                    //type：radio checkbox
                    selec_type:"checkbox",
                    //list_type： singletext textvalue
                    list_type:"multi",
                    list:[
                        {"text": "房东", "content": "房屋所有者，具备认证房本资质",value:"1"},
                        {"text": "转租", "content": "转让自己承租的房子",value:"2"},
                        {"text": "房东", "content": "房屋所有者，具备认证房本资质",value:"3"},
                        {"text": "转租", "content": "转让自己承租的房子",value:"4"},
                        {"text": "经纪人", "content": "房产中介，拥有专业的展示空间",value:"5"},
                        {"text": "职业房东", "content": "公寓经营者/多房源管理者",value:"6"},
//                        {"text":"商铺产品"},
//                        {"text":"商铺产品"},
//                        {"text":"商铺产品"},
//                        {"text":"商铺产品"},
//                        {"text":"商铺产品"},
                        ],
                };
                this.$popup_select(data);
            }
        }
    }
</script>