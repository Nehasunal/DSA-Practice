/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sum =0
    for(let i=n;i>=1;i--){
        sum= sum+i
        let prev = (i*(i+1))/2
        if(sum === prev) return i
    }
    return -1
};