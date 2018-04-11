<template>
    <div class="dialogMask" v-show="show">
        <div class="dialog">
            <button @click="btnClick">关闭</button>
            <h1>{{content}}</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                show: false,
                content: ""
            };
        },
        mounted() {
        },
        computed: {},
        methods: {
            btnClick(btnType) {
                this.show = false;

            },
        },
        watch: {},
    };
</script>


<style lang="scss" type="text/scss">
    .dialogMask {
        /*opacity: .6;*/
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
    }
</style>

