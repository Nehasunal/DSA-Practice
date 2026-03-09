/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefixSum = 0
    let maxSum = 0
    for(let i=0;i < gain.length;i++){
        prefixSum = prefixSum + gain[i]
        maxSum = Math.max(maxSum, prefixSum)
    }
    return maxSum
};