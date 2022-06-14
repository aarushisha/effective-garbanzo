/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lengths = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                lengths[i] = Math.max(lengths[i], 1 + lengths[j]);
            }
        }
    }
    return Math.max(...lengths);
};

console.log(lengthOfLIS([7,7,7,7,7,7,7]))