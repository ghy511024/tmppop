<style type="text/scss">
    @import "louchoose";
</style>

<template name="louhao" fout>
    <div class="lou-select-wrap">
        <div class="louselect-item page-louhao" ptype="louhao">
            <div class="ipt-wrap">
                <div class="ipt-panel">
                    <div class="icon-search"></div>
                    <input type="text" placeholder="请输入楼号" id="louhao-ipt" class="lou-ipt">
                    <div class="btn btn-sure disable" id="sure-louhao">确定</div>
                </div>
            </div>
            <div class="list-title-wrap">
                <div class="list-title">请选择楼号</div>
            </div>
            <div class="list-wrap louhao-list">
                <div class="sc_body" id="s1">
                    <ul>
                    </ul>
                    <div class="list-footer">
                        <span class="jump-btn" ptype="louhao">没有楼号，直接跳过></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="louselect-item page-danyuanhao" ptype="danyuanhao">
            <div class="ipt-wrap">
                <div class="ipt-panel">
                    <div class="icon-search"></div>
                    <input type="text" placeholder="请输入单元号" id="danyuanhao-ipt" class="lou-ipt">
                    <div class="btn btn-sure disable" id="sure-danyuanhao">确定</div>
                </div>
            </div>
            <div class="list-title-wrap">
                <div class="list-title">请选择单元号</div>
            </div>
            <div class="list-wrap danyuanhao-list">
                <div class="sc_body">
                    <ul>
                    </ul>
                    <div class="list-footer">
                        <span class="jump-btn" ptype="danyuanhao">没有单元号，直接跳过></span>
                    </div>
                </div>
            </div>

        </div>
        <div class="louselect-item page-menpaihao" ptype="menpaihao">
            <div class="ipt-wrap">
                <div class="ipt-panel">
                    <div class="icon-search"></div>
                    <input type="text" placeholder="请输入门牌号" id="menpaihao-ipt" class="lou-ipt">
                    <div class="btn btn-sure disable" id="sure-menpaihao">确定</div>
                </div>
            </div>
            <div class="list-title-wrap">
                <div class="list-title">请选择门牌号</div>
            </div>
            <div class="list-wrap menpaihao-list">
                <div class="sc_body">
                    <ul></ul>
                    <div class="list-footer">
                        <span class="jump-btn" ptype="menpaihao">没有门牌号，直接跳过></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<template name="liitem">
    <li></li>
</template>
