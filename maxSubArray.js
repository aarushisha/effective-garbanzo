/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currentSum = 0;
    let totalSum = 0;
    for (let value of nums) {
        currentSum += value;
        totalSum += value;
        if (value > maxSum && value > currentSum) {
            maxSum = value;
            currentSum = value;
        }
        if (value > currentSum) {
            currentSum = value;
        } else {
            maxSum = Math.max(maxSum, currentSum, value, totalSum);
        }
    }
    return maxSum;
};