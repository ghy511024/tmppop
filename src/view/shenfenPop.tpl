<style type="text/scss">
    @import "../css/shenfenPop/shenfenPop";
</style>

<template name="shenfenPop" fout>
    <div class="shenfenPop-page">
        <div class="pop-wrap">
            <div class="pop-title">
                选择您的身份
                <div class="pop-sure" id="pop-sure">确定</div>
                <div class="pop-cancel" id="pop-cancel">取消</div>
            </div>
            <div class="pop-list">
                <ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<template name="shenfenitem">
    <li shenfen-id="">
        <div class="pop-info"></div>
        <div class="pop-desc"></div>
        <div class="pop-arrow"></div>
    </li>
</template>

