/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map=new Map()
    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0) +1)
    }
    let minIndex=Infinity
    for(let [key,value] of map){
      if(value === 1){
         minIndex = Math.min(minIndex, s.indexOf(key))
      }
    }
    return minIndex === Infinity? -1: minIndex
};