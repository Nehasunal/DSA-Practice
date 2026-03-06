/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let slength =  word1.length>word2.length ? word2.length:word1.length
    let word =''
    for(let i=0;i<slength;i++){
       word = word+ word1[i] + word2[i]
    }
    let substring = word1.length > word2.length ? word1.substring(slength,word1.length) : word2.substring(slength,word2.length)
    return word+substring
};