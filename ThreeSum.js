/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // nums is unsorted, can have duplicates but do not want duplicates in the result set -> so sort the input array
    // skip if neightbor was the same value
    // a + b + c = 0 return [ [ a, b, c] ]
    let solution = [];
    let sortedNums = nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < sortedNums.length; i++) {
        // skip over duplicates
        let num = sortedNums[i];
        if (i > 0 && num === sortedNums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = sortedNums.length - 1;
        while (l < r) {
            let threeSum = num + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                solution.push([num, nums[l], nums[r]]); 
                 // update the pointers
                 l++;
                 while (nums[l] === nums[l - 1] && l < r) {
                     l++;
                 }
            }
        }
    }
    return solution;
};

console.log(threeSum([-1,0,1,2,-1,-4]));