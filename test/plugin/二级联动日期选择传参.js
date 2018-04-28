/**
 * Created by ghy on 2018/4/20.
 */
// 组件内部使用jsonp 请求 http://m.58.com/sublocals/?cityname=bj
var param = [
    {
        title: "区域",
        key: "bj",
        url: "http://m.58.com/sublocals/?cityname=",
        pname_1: "quyu",
        pname_2: "diduan",

    }
]
// 请求接口示例
var ret = [{
    "city": "bj",
    "bj": [
            {"listname": "chaoyang", "name": "朝阳", "id": "1142"},
            {"listname": "dongcheng", "name": "东城", "id": "1138"}
        ],
    "chaoyang":
        [
            {"listname": "guomao", "name": "国贸", "id": "1195"},
            {"listname": "cbd", "name": "CBD ", "id": "6834"},
            {"listname": "dawanglu", "name": "大望路", "id": "5785"},
            {"listname": "bjsihui", "name": "四惠", "id": "5786"}
        ],
    "dongcheng":
        [
            {"listname": "dongzhimen", "name": "东直门", "id": "1156"}
        ]
}];


this.$riqixuanze(param, function (ret, data) {
    // ret==0 点击确定
    // ret==1 取消
    data = [{
        paramname: "quyu",
        name: "chaoyang",
        value: "1142",
        text: "朝阳"
    }, {
        paramname: "diduan",
        name: "chaoyanggongyuan",
        value: "5999",
        text: "朝阳公园"
    }]
})