/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
    let max = 0;
    let i = 0;
    let j=0;

    // for (let right = 0; right < s.length; right++) {
    //     let char = s[right];

    //     if (map.has(char)) {
    //         left = Math.max(map.get(char) + 1, left);
    //     }

    //     map.set(char, right);
    //     max = Math.max(max, right - left + 1);
    // }
    while(j < s.length){
       while(map.has(s[j])){
        map.set(s[i], map.get(s[i])-1)
        if(map.get(s[i])===0){
            map.delete(s[i])
        }
        i++
       }
       map.set(s[j], (map.get(s[j]) || 0)+1)

       max = Math.max(max, j-i+1)
       j++
    }

    return max;
};