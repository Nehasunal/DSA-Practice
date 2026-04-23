/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let sum = 0;
    for(let i=0; i < customers.length;i++){
        if(grumpy[i] === 0){
            sum = sum + customers[i]
        }
    }
    for(let i=0; i < minutes;i++){
        if(grumpy[i] === 1){
            sum = sum + customers[i]
        }
    }
    let max =sum
    for(let i=minutes; i < customers.length;i++){ 
        if(grumpy[i-minutes] === 1){
            sum = sum - customers[i - minutes] 
        }
        if(grumpy[i] === 1){
          sum = sum+customers[i]
        }
        max = Math.max(sum,max)
    }
    return max
};