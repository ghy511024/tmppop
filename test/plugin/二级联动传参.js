/**
 * Created by ghy on 2018/4/20.
 */
var param = {
    title: "行业",
    pname_1: "hangye",
    pname_2: "zhonlei",
    option: [
        {
            "value": "511574",
            "text": "餐饮美食",
            option: [
                {"text": "餐馆", "value": "511589"}, {"text": "食堂", "value": "511590"}, {
                    "text": "面包店",
                    "value": "511591"
                }, {"text": "冷饮甜品店", "value": "511592"}, {"text": "咖啡馆", "value": "511593"}, {
                    "text": "茶艺馆",
                    "value": "511594"
                }, {"text": "小吃店", "value": "511595"}, {"text": "水果食品店", "value": "511596"}, {
                    "text": "凉茶店",
                    "value": "511597"
                }, {"text": "快餐店", "value": "511598"}
            ]
        },
        {
            "text": "美容美发",
            "value": "511575",
            "title": "种类",
            "option": [{"text": "美容院", "value": "511599"}, {"text": "美发店", "value": "511600"}, {
                "text": "美甲店",
                "value": "511601"
            }, {"text": "SPA馆", "value": "511602"}]
        }
    ]
}

this.$二级联动(param, function (ret, data) {
    // ret==0 点击确定
    // ret==1 取消

    data = [{
        paramname: "hangye",
        value: "",
        text: ""
    }, {
        paramname: "zhonlei",
        value: "",
        text: ""
    }]
})