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
 * @return {number[]}
 */
var rightSideView = function(root) {
        let res = []
        let max = -1
        let count=0
        function dfs(root, count){
            if(!root) return 0
            count++
            if(count > max){
                res.push(root.val)
                max = Math.max(count, max)
            }
            dfs(root.right, count)
            dfs(root.left, count)
        }
        dfs(root, count)
        return res
};