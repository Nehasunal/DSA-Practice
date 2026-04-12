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
var averageOfSubtree = function(root) {
   let count = 0
   function sumOfAll(root){
      if(!root) return [0,0]
      let [l1, s1] = sumOfAll(root.left)
      let [l2, s2] = sumOfAll(root.right)
      let level= l1+l2+1
      let sum= s1+s2+root.val
      if(Math.floor(sum/level) === root.val) count++
      return [level,sum]
   }
   sumOfAll(root)
   return count
};