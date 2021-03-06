/**
 * Created by ghy on 2018/4/20.
 */
var type = {
    "ObjectType": {
        "paramname": "ObjectType",
        "title": "类型",
        "option": [{"text": "商业街商铺", "value": "511572"}, {"text": "写字楼配套", "value": "511573"}, {
            "text": "社区底商",
            "value": "3"
        }, {"text": "档口摊位", "value": "2"}, {"text": "其他", "value": "4"}, {
            "text": "临街门面",
            "value": "5"
        }, {"text": "购物百货中心", "value": "6"}]
    },
    "danwei": {
        "paramname": "danwei",
        "title": "单位",
        "option": [{"text": "元/㎡/天", "value": "1"}, {"text": "元/月", "value": "2", "selected": true}]
    },
    "hangye": {
        "paramname": "hangye",
        "title": "行业",
        "option": [{
            "text": "餐饮美食",
            "value": "511574",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "餐馆", "value": "511589"}, {"text": "食堂", "value": "511590"}, {
                "text": "面包店",
                "value": "511591"
            }, {"text": "冷饮甜品店", "value": "511592"}, {"text": "咖啡馆", "value": "511593"}, {
                "text": "茶艺馆",
                "value": "511594"
            }, {"text": "小吃店", "value": "511595"}, {"text": "水果食品店", "value": "511596"}, {
                "text": "凉茶店",
                "value": "511597"
            }, {"text": "快餐店", "value": "511598"}]
        }, {
            "text": "美容美发",
            "value": "511575",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "美容院", "value": "511599"}, {"text": "美发店", "value": "511600"}, {
                "text": "美甲店",
                "value": "511601"
            }, {"text": "SPA馆", "value": "511602"}]
        }, {
            "text": "服饰鞋包",
            "value": "511576",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "服装店", "value": "511603"}, {"text": "内衣店", "value": "511604"}, {
                "text": "童装店",
                "value": "511605"
            }, {"text": "鞋店", "value": "511606"}, {"text": "箱包店", "value": "511607"}, {
                "text": "饰品店",
                "value": "511608"
            }]
        }, {
            "text": "休闲娱乐",
            "value": "511578",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "网吧", "value": "511611"}, {"text": "酒吧", "value": "511612"}, {
                "text": "足浴",
                "value": "511613"
            }, {"text": "水疗", "value": "511614"}, {"text": "球馆", "value": "511615"}, {
                "text": "麻将馆",
                "value": "511616"
            }, {"text": "瑜伽馆", "value": "511617"}, {"text": "歌舞厅(ktv)", "value": "511618"}, {
                "text": "养生馆",
                "value": "511619"
            }, {"text": "夜总会", "value": "511620"}, {"text": "桌球城", "value": "511621"}, {
                "text": "健身房",
                "value": "511622"
            }, {"text": "游泳馆", "value": "511623"}, {"text": "休闲中心", "value": "511624"}, {
                "text": "棋牌室",
                "value": "511625"
            }, {"text": "电玩城", "value": "511626"}, {"text": "溜冰场", "value": "511627"}, {
                "text": "儿童乐园",
                "value": "511630"
            }, {"text": "婴儿游泳馆", "value": "511628"}, {"text": "度假山庄", "value": "511629"}]
        }, {
            "text": "百货超市",
            "value": "511579",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "超市", "value": "511631"}, {"text": "便利店", "value": "511632"}, {
                "text": "小卖部",
                "value": "511633"
            }, {"text": "精品店", "value": "511634"}, {"text": "干货杂货店", "value": "511635"}, {
                "text": "烟酒茶叶店",
                "value": "511636"
            }, {"text": "母婴用品店", "value": "511637"}, {"text": "玩具店", "value": "511638"}, {
                "text": "文具店",
                "value": "511639"
            }, {"text": "书店", "value": "511640"}, {"text": "音像店", "value": "511641"}, {
                "text": "眼镜店",
                "value": "511642"
            }, {"text": "化妆品店", "value": "511643"}, {"text": "乐器店", "value": "511644"}, {
                "text": "工艺品店",
                "value": "511645"
            }, {"text": "珠宝首饰", "value": "511646"}, {"text": "床上用品", "value": "511647"}, {
                "text": "体育用品店",
                "value": "511648"
            }]
        }, {
            "text": "生活服务",
            "value": "511580",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "干洗店", "value": "511649"}, {"text": "花店水族", "value": "511650"}, {
                "text": "公话超市",
                "value": "511651"
            }, {"text": "彩票店", "value": "511652"}, {"text": "报刊亭", "value": "511653"}, {
                "text": "送水送气店",
                "value": "511654"
            }, {"text": "宠物店", "value": "511655"}, {"text": "照相馆", "value": "511656"}, {
                "text": "婚纱摄影店",
                "value": "511657"
            }, {"text": "婚介所", "value": "511658"}, {"text": "职介所", "value": "511659"}, {
                "text": "家政中心",
                "value": "511660"
            }, {"text": "打字复印", "value": "511661"}, {"text": "美鞋修鞋店", "value": "511662"}]
        }, {
            "text": "电器通讯",
            "value": "511581",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "手机店", "value": "511663"}, {"text": "电脑店", "value": "511664"}, {
                "text": "电器店",
                "value": "511665"
            }, {"text": "维修店", "value": "511666"}, {"text": "通讯用品店", "value": "511667"}]
        }, {
            "text": "汽修美容",
            "value": "511582",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "汽修厂", "value": "511668"}, {"text": "汽配店", "value": "511669"}, {
                "text": "轮胎店",
                "value": "511670"
            }, {"text": "汽车美容店", "value": "511671"}, {"text": "车场", "value": "511672"}]
        }, {
            "text": "医疗器械",
            "value": "511583",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "医院", "value": "511673"}, {"text": "诊所", "value": "511674"}, {
                "text": "药店",
                "value": "511675"
            }, {"text": "保健品店", "value": "511676"}, {"text": "成人用品店", "value": "511677"}]
        }, {
            "text": "家居建材",
            "value": "511584",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "五金店", "value": "511678"}, {"text": "建材店", "value": "511679"}, {
                "text": "家具店",
                "value": "511680"
            }, {"text": "灯饰店", "value": "511681"}, {"text": "家居饰品店", "value": "511682"}, {
                "text": "装饰装修材料店",
                "value": "511683"
            }]
        }, {
            "text": "教育培训",
            "value": "511585",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "学校", "value": "511684"}, {"text": "幼儿园", "value": "511685"}, {
                "text": "培训机构",
                "value": "511686"
            }, {"text": "家教中心", "value": "511687"}, {"text": "早教中心", "value": "511688"}]
        }, {
            "text": "酒店宾馆",
            "value": "511586",
            "paramname": "zhonglei",
            "title": "种类",
            "option": [{"text": "旅馆", "value": "511689"}, {"text": "宾馆酒店", "value": "511690"}, {
                "text": "招待所",
                "value": "511691"
            }, {"text": "公寓房", "value": "511692"}]
        }, {"text": "其他", "value": "511588"}]
    }
};