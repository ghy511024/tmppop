/**
 * Created by ghy on 2018/4/17.
 */
;(function () {
    'use strict';

    if (!Date.now)
        Date.now = function () {
            return new Date().getTime();
        };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
        || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () {
                    callback(lastTime = nextTime);
                },
                nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

var Touch = function (target) {
    var _this = this;
    target.addEventListener("touchstart", this._start.bind(this))
    target.addEventListener("touchmove", this._move.bind(this))
    target.addEventListener("touchend", this._end.bind(this))

    watch(target, "translateY", function () {
        var trand = target.translateY;
        var transform = "translateY(" + trand + "px)"
        // console.log(trand, "current")
        target.style.transform = target.style.msTransform = target.style.OTransform = target.style.MozTransform = target.style.webkitTransform = transform;

    });
    this.target = target;
    this.target.translateY = 0;
    this.min = -405+45;
    setTimeout(function () {

    }.bind(this), 100)

}
Touch.prototype = {
    max: 0,
    step: 10,
    sensitivity: 1,//灵敏度
    deceleration: 0.0006,// 减速率
    maxRegion: 600,
    springMaxRegion: 60,// 弹性
    animationEnd: function () {
        console.log("动画结束")
    },
    _start: function (evt) {
        this.y1 = this.preY = evt.touches[0].pageY;
        cancelAnimationFrame(this.tickID);
        this.start = this.preY;
        this.isTouchStart = true;
        this.startTime = new Date().getTime();
        this._firstTouchMove = true;
        this._preventMove = false;
    },
    _move: function (evt) {
        if (this.isTouchStart) {
            var len = evt.touches.length,
                currentY = evt.touches[0].pageY;
            if (this._firstTouchMove) {
                this._firstTouchMove = false;
            }
            if (!this._preventMove) {
                var d = currentY - this.preY;
                var f = 0.7;
                d = d * f;
                this.target["translateY"] += d;
                this.preY = currentY;
            }
            evt.preventDefault();
            this.y2 = currentY;
        }
    },
    _end: function (evt) {
        if (this.isTouchStart) {
            this.isTouchStart = false;
            var self = this;
            var current = this.target["translateY"];
            console.log("touche end..", current, this.max)

            var triggerTap = (Math.abs(evt.changedTouches[0].pageX - this.x1) < 30 && Math.abs(evt.changedTouches[0].pageY - this.y1) < 30);
            if (current > this.max) {
                this._to(this.max, 200, ease, this.change, function (value) {
                }.bind(this));
            }
            else if (current < this.min) {
                this._to(this.min, 200, ease, this.change, function (value) {
                }.bind(this));
            }
            else if (!this._preventMove) {
                var dt = new Date().getTime() - this.startTime;
                if (dt < 300) {
                    var distance = (evt.changedTouches[0].pageY - this.start) * this.sensitivity;

                    var speed = Math.abs(distance) / dt;
                    var speed2 = 1 * speed;
                    if (this.hasMaxSpeed && speed2 > this.maxSpeed) {
                        speed2 = this.maxSpeed;
                    }
                    var destination = current + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);
                    var tRatio = 1;
                    // 持续时间
                    if (destination < this.min) {
                        if (destination < this.min - this.maxRegion) {
                            tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                            destination = this.min - this.springMaxRegion;
                        } else {
                            tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                            destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
                        }
                    } else if (destination > this.max) {
                        if (destination > this.max + this.maxRegion) {
                            tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                            destination = this.max + this.springMaxRegion;
                        } else {
                            tRatio = reverseEase((this.max + this.springMaxRegion * ( destination - this.max) / this.maxRegion - current) / (destination - current));
                            destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;
                        }
                    }

                    var duration = Math.round(speed / self.deceleration) * tRatio;
                    // console.log(destination, duration, "准本..")
                    self._to(Math.round(destination), duration, ease, self.change, function (value) {
                        if (self.target["translateY"] > self.max) {
                            cancelAnimationFrame(self.tickID);
                            self._to(self.max, 600, ease, self.change, self.animationEnd);

                        } else if (self.target["translateY"] < self.min) {
                            cancelAnimationFrame(self.tickID);
                            self._to(self.min, 600, ease, self.change, self.animationEnd);

                        } else {
                            if (self.step) {
                                self._correction()
                            } else {
                                self.animationEnd.call(self, value);
                            }
                        }
                    });

                } else {
                    self._correction();
                }
            } else {
                self._correction();
            }

        }
    },
    _to: function (value, time, ease, onChange, onEnd) {
        var beginTime = new Date();
        var el = this.target;
        var current = this.target["translateY"];
        value = this._getAutoScrollTo(value);
        var dv = value - current;
        var self = this;
        var toTick = function () {
            var dt = new Date() - beginTime;
            if (dt >= time) {
                el["translateY"] = value;
                onEnd && onEnd.call(self, value);
                return;
            }
            el["translateY"] = dv * ease(dt / time) + current;
            self.tickID = requestAnimationFrame(toTick);
        };
        toTick();
    },
    _correction: function () {
        var el = this.target;
        var value = el["translateY"];
        var rpt = Math.floor(Math.abs(value / this.step));
        var dy = value % this.step;
        if (Math.abs(dy) > this.step / 2) {
            this._to((value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, ease, this.change, function (value) {
                this.animationEnd.call(this, value);
            }.bind(this));
        } else {
            this._to((value < 0 ? -1 : 1) * rpt * this.step, 400, ease, this.change, function (value) {
                this.animationEnd.call(this, value);
            }.bind(this));
        }
    },
    _getAutoScrollTo(value){
        // if (value > this.max || value < this.min) {
        //     return value;
        // }
        var ret = value;
        console.log(ret, "before")
        this.item_h = this.target.offsetHeight / 9;
        var _val = Math.abs(value % 45);
        if (_val > 23) {
            ret = value + (45 - _val) * (value > 0 ? 1 : -1);
        } else {
            ret = value - _val * (value > 0 ? 1 : -1);
        }
        console.log(ret, "after")
        return ret;
        // console.log(this.item_h, "bbbbbb")
    }
}
function ease(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function watch(target, prop, callback) {
    Object.defineProperty(target, prop, {
        get: function () {
            return this["_" + prop];
        },
        set: function (value) {
            this["_" + prop] = value;
            callback();
        }
    });
}
function reverseEase(y) {
    return 1 - Math.sqrt(1 - y * y);
}

function touch(el) {
    el.addEventListener("touchstart", function (e) {
        console.log("touch start")
    })
    el.addEventListener("touchmove", function (e) {
        console.log("touch move")
    })
    el.addEventListener("touchend", function (e) {
        console.log("touch end")
    })
}
export  default Touch;