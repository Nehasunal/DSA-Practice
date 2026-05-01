/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let i=0
   let j=height.length -1
   let max = 0
   while(i<j){
    let res = (Math.min(height[i], height[j]) * (j-i))
    max = Math.max(max, res)
     if(height[i]<height[j]) i++
     else if(height[j]<height[i]) j--
     else i++   
   }
   return max 
};