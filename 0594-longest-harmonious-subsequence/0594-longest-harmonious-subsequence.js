/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a,b)=> a-b)
    let map= new Map()
    let count  =0
    let max=0
    for(let i=0;i< nums.length;i++){
        map.set(nums[i], (map.get(nums[i])||0)+1)
        if(map.has(nums[i]-1)){
           count = map.get(nums[i]-1) + map.get(nums[i])
        }
        max= Math.max(count,max)
    }
    return max
};