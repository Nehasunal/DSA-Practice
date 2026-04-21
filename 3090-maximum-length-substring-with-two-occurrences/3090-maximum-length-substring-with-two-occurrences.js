/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let left = 0
    let maxv = 0
    let count = 0
    let map = new Map()
    for(let i =0;i < s.length; i++){
        while(map.has(s[i]) && map.get(s[i])>1){
           map.set(s[left], map.get(s[left])-1)
           count--
           left++
        }
        maxv = Math.max(maxv, count)
        map.set(s[i], (map.get(s[i])||0)+1)
        count++
    }
    return maxv+1;

};