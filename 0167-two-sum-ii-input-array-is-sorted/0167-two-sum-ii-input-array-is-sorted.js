/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let map = new Map()
   for(let i=0;i<numbers.length;i++){
    let val = target - numbers[i]
      if(map.has(val)){
        return [map.get(val), i+1]
      }
      map.set(numbers[i], i+1)
   }
   return []
};