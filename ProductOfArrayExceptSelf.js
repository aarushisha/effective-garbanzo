// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const productExceptSelf = function(nums) { // this one isn't very space effective because it creates 2 arrays
//     let prefixProducts = [];
//     let postfixProducts = [];
//     let result = [];
//     // first loop to calculate prefix
//     for (let i = 0; i < nums.length; i++) {
//         let prefixProduct = i === 0 ? 1 : prefixProducts[i - 1];
//         prefixProducts[i] = prefixProduct * nums[i];
//     }
//     // reverse loop to calculate postfix
//     for (let j = nums.length - 1; j >= 0; j--) {
//         let postfixProduct = j === nums.length - 1 ? 1 : postfixProducts[j + 1];
//         postfixProducts[j] = postfixProduct * nums[j];
//     }
//     for (let k = 0; k < prefixProducts.length; k++) {
//         let prefix = k === 0 ? 1 : prefixProducts[k - 1];
//         let postfix = k === postfixProducts.length - 1 ? 1 : postfixProducts[k + 1];
//         result[k] = prefix * postfix;
//     }
//     return result;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let j = nums.length - 1; j > -1; j--) {
        result[j] *= postfix;
        postfix *= nums[j];
    }
    console.log(result);
    return result;
}

productExceptSelf([-1,1,0,-3,3]);

