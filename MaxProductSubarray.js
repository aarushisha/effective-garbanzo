/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxProduct = Math.max(...nums);
    // 1 is a neutral value
    let currentMin = 1;
    let currentMax = 1;
    for (let value of nums) {
        if (value === 0) {
            currentMin = 1;
            currentMax = 1;
            continue;
        } else {
            let temp = currentMax * value;
            currentMax = Math.max(value * currentMax, value * currentMin, value);
            currentMin = Math.min(value * currentMin, temp, value);
            maxProduct = Math.max(maxProduct, currentMax);
        }
    }
    return maxProduct;
};