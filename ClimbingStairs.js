/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 
 */

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function(n) { // my solution - not great, times out for large n
//     let ways = 0;
//     if (n > 0) {
//         if (n > 2) {
//             ways += climbStairs(n - 2);
//         }
//         if (n > 1) {
//             ways += climbStairs(n - 1);
//         }
//         if (n === 2) {
//             ways++;
//         }
//         if (n === 1) {
//             ways++;
//         }
//     }
//     return ways;
// };

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [one, two] = [1, 1];

    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        console.log(one, two);
        one = one + two;
        two = temp;
    }
    return one;
}



console.log(climbStairs(5));