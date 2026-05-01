/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let min = Infinity
    nums.sort((a,b)=> a-b)
    for(let i=0;i<nums.length;i++){
        let j = i+1
        let k = nums.length-1
        while(j<k){
            let total = nums[i]+nums[j]+nums[k]
             if (Math.abs(total - target) < Math.abs(min - target)) {
                min = total;
            }
            if(total < target){
                j++
            }else if(total > target){
                k--
            } else{
                return target
            }
        }
    }
    return min

    
};