/**
 * Created by ghy on 2018/4/17.
 */
var Touch = function (target) {
    var _this = this;
    target.addEventListener("touchstart", this._start.bind(this))
    target.addEventListener("touchmove", this._move.bind(this))
    target.addEventListener("touchend", this._end.bind(this))

    watch(target, "translateY", function () {
        var trand = target.translateY;
        var transform = "translateY(" + trand + "px)"
        target.style.transform = target.style.msTransform = target.style.OTransform = target.style.MozTransform = target.style.webkitTransform = transform;

    });
    this.target = target;
    this.target.translateY = 0;
}
Touch.prototype = {
    _start: function (evt) {
        this.x1 = this.preX = evt.touches[0].pageX;
        this.y1 = this.preY = evt.touches[0].pageY;
        // this.start = this.vertical ? this.preY : this.preX;
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
            var self = this
            var current = this.target[this.property];
            var triggerTap = (Math.abs(evt.changedTouches[0].pageX - this.x1) < 30 && Math.abs(evt.changedTouches[0].pageY - this.y1) < 30);
        }
    },
    _to:function(value, time, ease, onChange, onEnd){
        var beginTime = new Date();
        var el = this.target;
        var dv = value - current;
        var self = this;
        var toTick = function () {
            var dt = new Date() - beginTime;
            if (dt >= time) {
                el["translateY"] = value;
                return;
            }
            el["translateY"] = dv * ease(dt / time) + current;
            self.tickID = requestAnimationFrame(toTick);
        };
        toTick();
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
export  default Touch;