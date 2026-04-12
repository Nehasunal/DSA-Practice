/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let pSum = []
    pSum[0] = nums[0]
    for(let i=1;i < nums.length;i++){
      pSum[i] = nums[i] + pSum[i-1]
    }
    this.nums = pSum
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) return this.nums[right]
    else return this.nums[right] - this.nums[left-1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */