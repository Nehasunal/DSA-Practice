/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for(let i=1;i<prices.length;i++){
        let sellPrice = prices[i] - prices[i-1]
        if(sellPrice > 0){
            maxProfit = maxProfit+sellPrice
        }
    }
    return maxProfit
};