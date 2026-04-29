/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let map=new Map()
    let maxFreq= 0
    let max = 0;
    let left=0
    for(let i=0;i<answerKey.length;i++){
       map.set(answerKey[i], (map.get(answerKey[i])||0)+1)
       maxFreq = Math.max(maxFreq, map.get(answerKey[i]))
       while((i-left+1) - maxFreq > k){
        map.set(answerKey[left], map.get(answerKey[left])-1)
        left++
       }
       max= Math.max(max, i-left+1)
    }
    return max
};