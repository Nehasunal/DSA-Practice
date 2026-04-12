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
var goodNodes = function(root) {
        let count = 0
        let max= root.val
        function sums(root, max){
           if(!root) return 0
           if(max <= root.val) count++
           max= Math.max(root.val, max)
           return sums(root.left, max) || sums(root.right, max)
        }
        sums(root, max)
        return count
};