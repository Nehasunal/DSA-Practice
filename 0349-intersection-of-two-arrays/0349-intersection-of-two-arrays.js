/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let newArr= [];
    let map1=new Map()
    for(let i=0;i<=nums1.length-1;i++){
       map1.set(nums1[i],(map1.get(i)|| 0) +1)
    }
    for(let i=0;i<=nums2.length-1;i++){
      if(map1.has(nums2[i])){
        newArr.push(nums2[i])
      }
    }
    return [... new Set(newArr)]
};