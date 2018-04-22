/**
 * Created by ghy on 2018/4/20.
 */
var def = {
    defaultType: "single",//single,multi 单层|多层
    datasouce: ['-2,99', '-2,99', '1,99'],
    unit: ['%d层', '%d层', '共%d层'],
    suggest: "请选择楼层",
    title: "楼层",
    defaultselect: "-1,5,8",
    placeholder: "请选择"
}
this.$lou_picker(def, (ret, data) => {

    console.log('返回数据为：', res);
    data = {defaultType: "", value: "2,3,13", text: "2-3层/共13层"}
});
