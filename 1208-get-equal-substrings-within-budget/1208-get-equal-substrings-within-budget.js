/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left = 0
    let max = 0
    let sum = 0
    for(let i=0;i<s.length;i++){
       sum = sum + Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
       while(sum > maxCost){
        sum = sum - Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
        left++
       }
       max = Math.max(max, i-left+1)
    }
    return max
};