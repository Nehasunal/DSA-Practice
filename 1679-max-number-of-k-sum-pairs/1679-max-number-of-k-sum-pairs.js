/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let map= new Map();
    let target = 0;
    let count=0
    for(let i=0;i< nums.length;i++){
       target = k-nums[i]
       if(map.has(target)){
        count++
         map.set(target, (map.get(target))-1)
         if(map.get(target)<=0){
            map.delete(target)
         }
       } else{         
         map.set(nums[i],(map.get(nums[i])||0)+1)
       }
    }
    return count

};