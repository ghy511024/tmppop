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
        array_pos[i] = -array_pos[i];
    }

};