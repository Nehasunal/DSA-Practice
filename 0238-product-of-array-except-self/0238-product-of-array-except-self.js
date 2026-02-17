/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let leftarr = [1]
   let rightarr =  new Array(nums.length).fill(1)

   for(let i=1;i<nums.length;i++){
     leftarr[i] = leftarr[i-1] * nums[i-1]
   }
   for(let i = nums.length-2;i>=0;i--){
     rightarr[i] = rightarr[i+1] * nums[i+1]
   }
   let res=[]
   for(let i=0;i<nums.length;i++){
     res[i] = leftarr[i] * rightarr[i]
   }
   return res
};