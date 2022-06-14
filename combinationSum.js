/**
 * @param {number[]} candidates // array of DISTINCT integeters, can use each integer as many times as needed but each combo in return must be unique
 * @param {number} target // 
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // use recursion
    let solutions = [];

    var depthFirstSearch = function(i, current, totalSum) { // maintain which of the candidates can still be chosen and which ones are in current combination and the totalSum
        if (totalSum === target) { // base case if succeed
            solutions.push(Object.assign([], current));
            return;
        }
        if (i >= candidates.length || totalSum > target) { // base case when have to return immediately because no combination
            return;
        }
        // 1st decision - add same value AGAIN
        // add current index value to current combination
        current.push(candidates[i]);
        // RECURSION - keep i the same, now updated current with i value, and updated total
        depthFirstSearch(i, current, totalSum + candidates[i]);
        // 2nd decision - add the next value
        // pop candidates[i] before going down other decision tree
        current.pop(candidates[i]);
        depthFirstSearch(i + 1, current, totalSum);
    }
    depthFirstSearch(0, [], 0); // starting index, empty array, currSum
    return solutions;
};

console.log(combinationSum([2, 3, 6, 7], 7));