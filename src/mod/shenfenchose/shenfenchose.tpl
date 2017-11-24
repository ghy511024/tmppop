<style type="text/scss">
    @import "shenfenchose.scss";
</style>

<template name="shenfen" fout>
    <div class="shenfen-page">
        <div class="shenfen-banner">
            <p class="title">请选择您的身份</p>
            <p class="desc">我们会对每种身份设定合理的发帖权限</p>
        </div>
        <div class="shenfen-list">
            <ul>

            </ul>
        </div>
        <div class="next-btn disable" id="shenfen-next">下一步</div>
    </div>
</template>

<template name="shenfenitem">
    <li shenfen-id="">
        <div class="shenfen-title"></div>
        <div class="shenfen-desc"></div>
        <div class="shenfen-arrow"></div>
    </li>
</template>

