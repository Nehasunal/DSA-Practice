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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sum = 0
    function findsum(root, sum){
        if(!root) return 0
        sum = sum + root.val
        if(!root.left && !root.right){
            if(sum === targetSum){
                return true
            }
            sum = sum - root.val
        }
        let lh = findsum(root.left, sum)
        if(lh){
            return true
        }
        let rh = findsum(root.right, sum)
        if(rh){
            return true
        }
        return false
    }
    let val = findsum(root, sum)
    console.log(val)
    return val
};