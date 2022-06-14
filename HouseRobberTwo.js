/**You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
 * All houses at this place are arranged in a circle. 
 * That means the first house is the neighbor of the last one. 
 * Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var helper = function(nums) { // this is the solution from HouseRobber
    let [rob1, rob2] = [0, 0];
    // [rob1, rob2, n, n+1]
    for (let number of nums) {
        temp = Math.max(number + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    return Math.max(nums[0], helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)));
};

console.log(rob([1]))