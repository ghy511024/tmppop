(function () {
    __inline ('shenfenchange.tpl');
    __inline ('shenfenchange_rp.js');
    var call_list = [];

    var chose_call = function () {
    };
    var SFPOP = {
        chose_id: null,
        init_id: null,// 初始化身份1
        chose_name: null,
        jjrchose: 0,
        init: function (data) {
            data = data || {};
            var optionlist = data["option"] || []
            this.layout (optionlist);
            this._initEvent ();
        },

        layout: function (list) {
            var _this = this;
            $ (".shenfenPop-page").on ("touchmove", function (e) {
                e.preventDefault ();
            });
            //
            list = list || [];
            for (var i = 0; i < list.length; i++) {
                var option = list[i]
                var item = $ (TPL.getTpl ("shenfenitem") || ""); // 获取字符串
                var desc = _this.getDesc (option["text"])

                $ (item).attr ("shenfen-id", option["value"]);
                $ (item).find (".pop-info").html (option["text"]);
                $ (item).find (".pop-desc").html (desc);

                $ (".pop-list ul").append ($ (item));
            }


        },
        _initEvent: function () {
            var _this = this;
            $ ("#pop-sure").on ("click", function () {
                var type = _this.chose_id;
                var name = _this.chose_name;
                var ret = 2;
                if (_this.chose_id != this.init_id) {
                    ret = 0;
                }
                SFPOPRP.rp ("sure");
                _this.close (ret, type);
            })
            $ ("#pop-cancel").on ("click", function () {
                SFPOPRP.rp ("cancel");
                _this.close (2);
            })
            $ (".pop-list li").on ("click", function () {
                var _id = $ (this).attr ("shenfen-id");
                _this.chose_id = _id;
                _this.chose_name = $ (this).find (".pop-info").html ();
                $ (".pop-list li").removeClass ("active");
                $ (this).addClass ("active");
                SFPOPRP.rp (_id);
                chose_call (_id);
            })
            $ (".pop-wrap", ".shenfenPop-page").on ("click", function (e) {
                e.stopPropagation ();
            })
            $ (".shenfenPop-page").on ("click", function () {
                _this.close (2);
            })
        },
        show: function () {
            SFPOPRP.rp ("show");
            $ (".shenfenPop-page").addClass ("beforeActive");
            setTimeout (function () {
                $ (".shenfenPop-page").addClass ("active");
            }, 10)

            // $(".shenfenPop-page").show();
        },
        changeSF: function () {

        },
        /*
         * @param ret
         * 0： 成功
         * 1：失败
         * 2：取消
         * **/
        close: function (ret, _id) {

            $ (".shenfenPop-page").removeClass ("active");
            setTimeout (function () {
                $ (".shenfenPop-page").removeClass ("beforeActive");
            }, 600)

            this.init_id = null;
            this.chose_id = null;
            for (var i = 0; i < call_list.length; i++) {
                var fun = call_list[i];
                if (typeof fun == "function") {
                    fun (ret, _id)
                }
            }
            call_list = [];
        },
        getDesc: function (name) {
            var desc = "";
            if (/房东/gi.test (name)) {
                if (/职业/.test (name)) {
                    desc = "公寓经营者/多房源管理者"
                } else {
                    desc = "房屋所有者，具备认证房本资质"
                }
            } else if (/经纪人/gi.test (name)) {
                desc = "房产中介，拥有专业的展示空间";
            } else if (/转租/.test (name)) {
                desc = "转让自己承租的房子";
            }
            return desc;
        }

    }


    var API = {
        init: function (data) {
            // var data = {
            //     "paramname": "HouseUserType",
            //     "title": "房产用户类型",
            //     "option": [{ "text": "房东", "value": "683037" }, { "text": "转租", "value": "683038" }, {
            //         "text": "经纪人",
            //         "value": "683039"
            //     }]
            // }
            SFPOP.init (data);
        },
        action: function (sfid) {
            SFPOP.chose_id = sfid;
            SFPOP.init_id = sfid;
            $ (".pop-list li").removeClass ("active");
            $ (".pop-list li[shenfen-id='" + sfid + "']").addClass ("active");
            SFPOP.show ();
        },
        registCall: function (fun) {
            if (typeof fun == "function") {
                call_list.push (fun);
            }
        },
        // 点击一次回调一次
        choseCall: function (fun) {
            if (typeof fun == "function") {
                chose_call = fun;
            }
        }
    }
    return API;
}) ()