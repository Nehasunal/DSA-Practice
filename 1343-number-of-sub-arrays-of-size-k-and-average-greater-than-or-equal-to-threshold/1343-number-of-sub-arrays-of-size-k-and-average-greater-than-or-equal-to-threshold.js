/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0
    let sum = 0
    for(let i=0;i< arr.length;i++){
        sum = sum + arr[i]
        if(i >= k-1){
            let avg = sum /k
            if(avg >= threshold) count++
            sum = sum - arr[i+1-k]
        }
    }
    return count
};