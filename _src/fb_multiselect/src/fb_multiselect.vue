<template>
    <div class="dialogMask" v-show="show">
        <div class="dialog">
            <p v-if="title" class="dialog-title">{{ title }}</p>
            <p  class="dialog-content" v-for="item in output" :key="item" ref="content" :class="{left:longContent}">{{item}}</p>
            <div class="btn-container" :class="{double:cancelBtn}">
                <div v-if="cancelBtn" @click="btnClick('cancel')">{{ cancelBtn }}</div>
                <div class="confirmBtn" @click="btnClick('confirm')">{{ confirmBtn }}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                show: false,
                title: '',
                content: '',
                confirmBtn: '',
                cancelBtn: '',
                confirmCallback: ()=>{},
                cancelCallback: ()=>{},
                longContent: false,
            };
        },
        mounted() {},
        computed: {
            output() {
                if (typeof this.content == 'string') {
                    return [this.content];
                } else {
                    return this.content;
                }
            },
        },
        methods: {
            btnClick(btnType) {
                this.show = false;
                this[btnType+'Callback']();
            },
        },
        watch: {
            content() {
                this.$nextTick().then(()=>{
                    let contents = this.$refs.content;
                    if ( contents.length == 1 ) {
                        let item = contents[0];
                        let pWidth = item.offsetWidth;
                        let pHeight = item.offsetHeight;
                        let rate = ( pHeight/ pWidth );
                        if ( rate > 0.079 ) {
                            this.longContent = true;
                        } else {
                            this.longContent = false;
                        }
                    }
                });
            },
        },
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

