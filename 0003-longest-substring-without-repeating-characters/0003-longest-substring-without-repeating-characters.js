/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let j=0
  let maxCount = 0
  for(let i=0;i< s.length;i++){
    let char = s[i]
    while(map.has(char)){
       map.delete(s[j])
       j++
    }
    map.set(char, true)
    maxCount = Math.max(maxCount, i-j+1)
  }
  return maxCount
};