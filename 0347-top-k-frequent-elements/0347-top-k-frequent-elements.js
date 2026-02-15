/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let bucket = []
    for(let i=0;i< nums.length;i++){
        map.set(nums[i], (map.get(nums[i])||0)+1)
        bucket[i] = []
    }
    bucket[nums.length] = [] 
    for(let [key,val] of map){
        bucket[val].push(key)
    }
    let res = []
    for(let i=bucket.length-1;i>=0;i--){
        if(bucket[i].length >0){
            
            res.push(...bucket[i])
            if(res.length === k){
                return res
            }
        }
    }
    return res
    
};