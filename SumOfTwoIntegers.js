//Given two integers a and b, return the sum of the two integers without using the operators + and -.
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b) {
        let temp = (a & b) << 1; // want to use old value of a
        a = a ^ b;
        b = temp; // want to use old value of a
    }
    return a;
};

getSum(2, 3);