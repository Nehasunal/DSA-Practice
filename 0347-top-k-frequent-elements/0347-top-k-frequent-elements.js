/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let i=0;i< nums.length;i++){
        map.set(nums[i], (map.get(nums[i])||0)+1)
    }
    let res = []
    for(let i=0;i<k;i++){
    let maxVal =-1;
    let maxIndex = -1
        for(let [key,value] of map){
            let val = map.get(key)
            maxVal = Math.max(maxVal, val)
            if(maxVal <= val){
                maxIndex = key
            }
        }
        res.push(maxIndex)
        map.delete(maxIndex)
    }
    return res
};