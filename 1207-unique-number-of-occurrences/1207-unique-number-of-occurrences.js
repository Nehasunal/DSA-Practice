/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        map.set(arr[i], ((map.get(arr[i])||0)+1))
    }
    let freqmap = new Map()
    for(let [key,value] of map){
       if(freqmap.has(value)){
         return false
       }
       freqmap.set(value, 1)
    }
    return true
};