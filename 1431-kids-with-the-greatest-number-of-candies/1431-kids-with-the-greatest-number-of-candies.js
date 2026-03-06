/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxc = candies[0]
    for(let i=0;i<candies.length;i++){
       maxc = Math.max(maxc, candies[i])
    }
    let result = []
    for(let i=0;i<candies.length;i++){
        (candies[i]>= (maxc-extraCandies)) ? result.push(true): result.push(false) 
    }
    return result
};