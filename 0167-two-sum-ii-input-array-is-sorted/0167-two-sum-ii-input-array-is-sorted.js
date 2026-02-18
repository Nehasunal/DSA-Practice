/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let left = 0;
   let right = numbers.length-1
   while(left<right){
   let val = numbers[right]+numbers[left]
     if(val>target){
        right --
     }else if(val===target){
       return [left+1, right+1]
     }
     else{
        left++
     }
   }
   return []
};