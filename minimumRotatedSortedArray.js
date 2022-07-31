// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function (nums) {
//     let min = nums[0];
//     if (nums.length === 1) {
//         return min;
//     }
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         if (nums[left] > nums[left + 1]) {
//             return nums[left + 1];
//         } else if (nums[right] < nums[right - 1]) {
//             return nums[right];
//         } else if (nums[left] < nums[right]) {
//             return nums[left];
//         }
//         left++;
//         right--;
//     }
// };



// video way of doing it

const findMin = function (nums) {
    let result = nums[0];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] < nums[right]) {
            return Math.min(result, nums[left]);
        }
        let midpoint = Math.ceil((left + right) / 2);
        result = Math.min(result, nums[midpoint]);
        if (nums[midpoint] >= nums[right]) {
            left = midpoint + 1;
        } else {
            right = midpoint - 1;
        }
    }
    return result;
}

console.log(findMin([11, 13, 15, 17]));