/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
    let max = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (map.has(char)) {
            left = Math.max(map.get(char) + 1, left);
        }

        map.set(char, right);
        max = Math.max(max, right - left + 1);
    }

    return max;
};