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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;

    let stack = [];
    stack.push([root.left, root.right]);

    while (stack.length > 0) {
        let [p, q] = stack.pop();

        if (!p && !q) continue;

        if (!p || !q || p.val !== q.val) {
            return false;
        }

        stack.push([p.left, q.right]);
        stack.push([p.right, q.left]);
    }

    return true;
};