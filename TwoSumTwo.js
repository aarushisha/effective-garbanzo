/**
 * @param {number[]} numbers // sorted in non-decreasing order, find 2 numbers so that they add up to a specific target
 * @param {number} target
 * @return {number[]} // output is the array of 2 indexes (but adding 1 so no 0 index)
 */
var twoSum = function(numbers, target) {
    // numbers is sorted array
    // have to use constant extra space so cannot create an object or another array
    // have left pointer and right pointer, one on either end
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        let currSum = numbers[l] + numbers[r];
        if (currSum > target) {
            r--;
        } else if (currSum < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }
    return ;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));