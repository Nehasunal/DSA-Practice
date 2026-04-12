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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let level = 0
        let res = []
        function levels(root, level){
           if(!root) return
           if (!res[level]) res[level] = [];
           res[level].push(root.val)
           levels(root.left, level+1)
           levels(root.right, level+1)
        }
        levels(root, level)
        return res.reverse()
};