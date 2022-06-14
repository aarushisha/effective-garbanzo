/**
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them 
 * is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let [rob1, rob2] = [0, 0];
    // [rob1, rob2, n, n+1]
    for (let number of nums) {
        temp = Math.max(number + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));