/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) {
//     let count = 0
//     let max = 0
//     let left =0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0) count++
//         while(count>1){
//             if(nums[left]===0) count--
//             left++
//         }
//         max= Math.max(max, i-left)
//     }
//     if(count === 0) return nums.length-1
//     return max
// };
var longestSubarray = function(nums) {
    let left = 0;
    let max_length = 0;
    let last_zero = -1;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            left = last_zero + 1;
            last_zero = right;
        }

        max_length = Math.max(max_length, right - left);
    }

    return max_length;    
};