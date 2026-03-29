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
var findTilt = function(root) {
    let sum = 0
   function findSum(root){
    if(!root) return 0
    let left = findSum(root.left)
    let right = findSum(root.right)
    sum = sum + Math.abs(left-right)
    return left+right+root.val
   }
   findSum(root)
   return sum
};
