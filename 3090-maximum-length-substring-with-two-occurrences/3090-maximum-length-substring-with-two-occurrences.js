/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let left = 0
    let maxv = 0
    let map = new Map()
    for(let i =0;i < s.length; i++){
        map.set(s[i], (map.get(s[i])||0)+1)
        while(map.get(s[i])>2){
           map.set(s[left], map.get(s[left])-1)
           left++
        }
        maxv = Math.max(maxv, i-left+1)
        
    }
    return maxv;

};