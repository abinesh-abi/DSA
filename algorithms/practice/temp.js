// leet code
// var containsNearbyDuplicate = function(nums, k) {
//     let temp = new Set()
//    for (let i = 0; i < nums.length; i++) {
//        if(!temp.has(nums[i])){
//            temp.add(nums[i])
//        }else temp.delete(nums[i])
//    }
//     console.log(temp.has(k),'hi')
//     console.log(temp.size ===1,'hi')
//     return temp.has(k)?true :false
// };
// console.log(containsNearbyDuplicate([1],1))

//////////
var moveZeroes = function (nums) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = 0; j < nums.length - 1; j++) {
      if (nums[j] === 0) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
moveZeroes([0, 0, 1]);
