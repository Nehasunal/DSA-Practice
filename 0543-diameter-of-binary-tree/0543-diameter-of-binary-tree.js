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
var diameterOfBinaryTree = function(root) {
    let max= 0;
    function dia(root){
        if(!root) return 0
        let left = dia(root.left)
        let right = dia(root.right)
        let val = Math.max(Math.max(left,right), left+right)
        max = Math.max(val,max)
        return Math.max(left,right) +1
    }
    dia(root)
    return max
};