/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0;
    let j=0;
    let count = 0;
    if(s === ""){
        return true
    }
    while(i<s.length && j<t.length){
        while(s[i]!==t[j] && j<t.length){
            j++
        }
        while(s[i] === t[j] && i<s.length && j<t.length){
            i++
            j++
            count++
        }
        if(count === s.length){
            return true
        }
    }
    return false
};