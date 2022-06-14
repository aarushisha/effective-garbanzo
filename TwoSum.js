/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} // indexes whose values add up to target, any order
 */
var twoSum = function(nums, target) {
    let prevMap = {}; // val: index
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let difference = target - value;
        if (prevMap[difference] > -1) {
            return [prevMap[difference], i];
        }
        prevMap[value] = i;
    }
    return;
};

console.log(twoSum([2, 7, 11, 15], 9));