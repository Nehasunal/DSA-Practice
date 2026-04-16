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
var sumNumbers = function(root) {
    let sum =0;
    let res = ''
    function dfs(root, res){
        if(!root) return 0
        res =res + root.val
        if(!root.left && !root.right){
            sum = sum+ Number(res)
        }
        return dfs(root.left, res)|| dfs(root.right, res)
    }
    dfs(root, res)
    return sum
};