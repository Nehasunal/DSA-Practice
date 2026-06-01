/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack = []
    let res = prices
    for(let i=0;i< prices.length;i++){
        while(prices[i]<= prices[stack[stack.length-1]]){
           let index = stack.pop()
           res[index] = prices[index] - prices[i]
        }
        stack.push(i)
    }
    return res
};