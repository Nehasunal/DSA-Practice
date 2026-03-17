/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let map1 = new Map()
    let map2 = new Map()
    for(let i=0; i< nums1.length;i++){
        map1.set(nums1[i], ((map1.get(nums1[i]) || 0)+1))
    }
    for(let i=0; i< nums2.length;i++){
        map2.set(nums2[i], ((map2.get(nums2[i]) || 0)+1))
    }
    let res = []
    res[0] = []
    res[1] = []
    
    for(let [key, value] of map1){
        if(!map2.has(key)){
            res[0].push(key)
        }
    }
    for(let [key, value] of map2){
        if(!map1.has(key)){
            res[1].push(key)
        }
    }
    res[0] = [...new Set(res[0])]
    res[1] = [...new Set(res[1])]
    return res

};