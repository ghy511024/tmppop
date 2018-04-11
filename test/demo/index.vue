<style lang="scss">
    body {
        margin: 0px;
    }
</style>
<template>
    <div class="main">
        <button @click="test1">测试1</button>
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
                    content:"haha"
                });
            }
        }
    }
</script>

