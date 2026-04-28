/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let j=0;
  let map=new Map()
  let max=0
  for(let i=0;i<s.length;i++){
    while(map.has(s[i])){
        map.set(s[j], map.get(s[j])-1)
        if(map.get(s[j]) === 0)  map.delete(s[j])
        j++
    }
    map.set(s[i], (map.get(s[i])|| 0)+1)
    max = Math.max(max, i-j+1)
  }
  return max
};