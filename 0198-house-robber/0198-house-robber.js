/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let arr =[]
    if(nums.length === 1){
        return nums[0]
    }
    arr[0] = nums[0]
    arr[1] = Math.max(nums[0], nums[1])
    for(let i=2;i<nums.length;i++){
        let max = Math.max(arr[i-2]+nums[i], arr[i-1])
        arr.push(max)
    }
    return arr[arr.length-1]
};