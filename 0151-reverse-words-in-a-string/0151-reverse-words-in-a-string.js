/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = ""
    let right = s.length-1
    while(right>=0){

        let rev =""
        while(s[right]!== " " && right >= 0 ){
            rev= s[right]+rev
            right --
        }
        while(s[right] === " "){
            right --
        }
        str = str + " " +rev
    }
    return str.trim()
};