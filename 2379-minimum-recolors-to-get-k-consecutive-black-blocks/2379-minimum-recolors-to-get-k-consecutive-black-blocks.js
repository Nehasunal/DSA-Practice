/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let count = 0
    let minVal = Infinity
    for(let i=0;i< blocks.length;i++){
        if(blocks[i] === 'W') count++
        if(i-left+1 === k){
            minVal = Math.min(minVal, count)
            if(blocks[left] === 'W'){
                count--
            }
            left++
        }
    }
    return minVal
};