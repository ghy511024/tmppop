/**
 * Created by lipan04 on 2018/4/18.
 */
let min_instance = function (total, number, a) {
    if (total == 0 || number == 0) {
        return false;
    }
    let capacity = Math.abs(total / number);
    let array_pos = new Array(number);
    let array_neg = new Array(number);
    for (let i = 0; i < number; i++) {
        array_pos[i] = (i + 1) * capacity;
        array_neg[i] = -array_pos[i];
    }
    array_neg.reverse();
    array_neg.push(0);
    let array = new Array(2 * number + 1);
    array = array_neg.concat(array_pos);
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (a == array[0]) {
            return array[0];
        }
        if (a <= array[i]) {
            if (Math.abs(array[i] - a) <= Math.abs(array[i - 1] - a)) {
                return array[i];
            } else {
                return array[i - 1]
            }
        }
    }
    return false;
};
function t2(_perval, value) {
    var ret = value;
    var _val = Math.abs(value % _perval);
    if (_val >= _perval / 2) {
        ret = value + (_perval - _val) * (value > 0 ? 1 : -1);
    } else {
        ret = value - _val * (value > 0 ? 1 : -1);
    }
    return ret;
}
// var ret = min_instance(10, 5, 5.5);
// var ret2 = t2(2, 5.5);
// var ret3 = t2(2, 6.1);
// var ret4 = t2(2, 4.9);
// var ret5 = t2(2, -1.1);
// var ret6 = t2(2, -2.9);
// var ret7 = t2(2, -3.1);

console.log(ret, ret2, ret3, ret4, ret5, ret6, ret7);