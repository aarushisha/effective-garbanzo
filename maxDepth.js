/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) { // using recursive Depth First Search, Time: O(N), Space O(N)
    if (!root) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthBFS = function(root) { // using recursive Breadth First Search, Time: O(N), Space O(N)
    if (!root) {
        return 0;
    }
    let level = 0;
    let queue = [root];
    while (queue.length) {
        // get all items in q at this point, remove them, add children and increase level
        let length = queue.length;
        for (let i = 0; i < length; i++) { // traverse entire level and add next level
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        level++;
    }
    return level;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthIterativeDFS = function(root) { // using iterative DFS
    let stack = [[root, 1]]; // add the node and level
    let result = 0;
    while (stack.length) {
        let [node, depth] = stack.pop();
        if (node) {
            res = max(res, depth);
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return result;
};