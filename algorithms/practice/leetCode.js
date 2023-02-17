////////// #1
// let two = function(nums,target) {
// const previousValues = {}
// for (let i = 0; i <nums.length; i++) {
//    const currentNumber = nums[i]
//    const needeValue = target - currentNumber
//    const index2 = previousValues[needeValue]
//    console.log(previousValues)
//    if (index2 != null) {
//       return [index2,i]
//    }else{
//       previousValues[currentNumber]=i
//    }
// }
// }
// console.log(two([2,4,11,7,15],9))

// function check(num,target) {
//    for (let i = 0; i < num.length; i++) {
//      for (let j = 0; j < i; j++) {
//       if(num[i]+num[j] == target)
//          return [j,i]
//      }
//    }
// }
// console.log(check([2,4,11,7,15],9))

//////// #35
// var searchInsert = function(nums, target) {
//     for(i=0;i<nums.length;i++){
//         if(nums[i]===target){
//             return i
//         }
//         else if (nums[i] > target) {
//          return i
//         }else if(nums[nums.length-1]< target){
//             return nums.length
//         }
//     }

// };
// console.log(searchInsert([1,3,5,6],2))

//////////// #58
// var lengthOfLastWord = function(s) {
//     let trimWord  = s.trim()
//     let wordArray = trimWord.split(' ')
//     let lastWord = wordArray[wordArray.length-1].trim()
//     return lastWord.length
// };
// console.log(lengthOfLastWord("   fly me   to   the moon  "))

////////// #66
// var plusOne = function(digits) {
//   let str = digits.join('')
//   let num = String( BigInt(str)+1n)
//     let final = []
//     for(let i = 0 ; i < num.length; i++){
//         final[i] =Number(num[i])
//     }
//   return final

// };

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

/////// 27
// var removeElement = function(nums, val) {
//   for( i=nums.length; i>=0 ; i--){
//     if (nums[i]===val) {
//       for(h= i;h<nums.length;h++){
//         nums[h]=nums[h+1]
//       }
//         nums.length --
//     }
//   }
//     return nums

// };

// console.log(removeElement([3,2,2,3],3))

////////// #12 number to roman number
// var intToRoman = function(num) {
//   let ONES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
//   let TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
//   let HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//   let THOUSANDS = ['M', 'MM', 'MMM', 'MMMM'];
//   let str = ''
//   let ones = num%10
//   let tens = Math.floor(num/10)%10
//   let hundreds = Math.floor(num/100)%10
//   let thousands = Math.floor(num/1000)%10

//   if (thousands > 0) {
//     str += THOUSANDS[thousands-1]
//   }
//   if (hundreds > 0) {
//    str += HUNDREDS[hundreds -1]
//   }
//   if (tens > 0) {
//    str += TENS[tens -1]
//   }
//   if (ones >0) {
//    str += ONES[ones -1]
//   }
//   return  str
// };
// console.log(intToRoman(1994))

////////// #12 roman to number
// var romanToInt = function(s) {

//   const converter ={
//     "I":1,
//     "V":5,
//     "X":10,
//     "L":50,
//     "C":100,
//     "D":500,
//     "M":1000,
//   }

//   let number = 0
//   for (let i = 0; i < s.length; i++) {
//     let current = converter[s[i]]
//     let next = converter[s[i+1]]
//     if (current < next) {
//       number += next - current
//       i++
//     }else{
//       number += current
//     }
//   }

//   return number
// };
// console.log(romanToInt("MCMXCIV"))

////////// #704 binary search
// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (nums[mid] === target) {
//     return mid;
//   }
//   if (target < nums[mid]) {
//     end = mid -1
//   }else{
//     start = mid +1
//   }
// }
//   return -1;
// };
// console.log(search([-1, 0, 3, 5, 9, 12], 9));

//////////// # 9 palindrome Number
// var isPalindrome = function(x) {
//   let str = String(x)
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length-1-i]) {
//      return false
//     }
//   }
//   return true
// };

// console.log(isPalindrome(1521))

/////////////// #26
// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i - 1]) {
//       for (let h = i; h < nums.length; h++) {
//         nums[h] = nums[h + 1];
//       }
//       nums.length--;
//       i--
//     }
//   }
//   return nums;
// };

// // console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([,1,1,2]));

// /////////// 441 Arranging coins
// var arrangeCoins = function(n) {
//   let state = 0
//   let num =n
//    for (let i = 0; i < n; i++) {
//     num--
//     if (num == 0) {
//      return state
//     }
//    }
// };

// console.log(arrangeCoins(5))

// ///////////27. Remove Element
// var removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] == nums[i - 1]) {
//         for (let h = i; h < nums.length; h++) {
//           nums[h] = nums[h + 1];
//         }
//         nums.length--;
//         i--
//       }
//     }
//     return nums.length;

// //   let l;
// //   let r = 1;
// //   while (r < nums.length && nums[r] !== nums[r - 1]) {
// //     r++;
// //   }
// //   l = r;
// //   r++;
// //   while (r < nums.length) {
// //     if (nums[r] != nums[r - 1]) {
// //       nums[l] = nums[r];
// //       l++;
// //     }
// //     r++;
// //   }
// //   return l;
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // ////////14. Longest Common Prefix
// var longestCommonPrefix = function (strs) {
//   let cur = strs[0];
//   temp = ''
//   let final = "";
//   for (let i = 0; i < cur.length; i++) {
//     for (let j = 0; j < strs.length; j++) {
//         temp =''
//       if (cur[i] == strs[j][i]) {
//         temp = cur[i];
//       } else {
//         break;
//       }
//     }
//     if (temp == '') {
//        break
//     }
//     final += temp;
//   }
//   return final;
// };

// console.log(longestCommonPrefix(["cir","car"]));

// 20. Valid Parentheses
// var isValid = function (s) {
//     const stack = []
//     const openig = ['(','{','[']
//     for (let i = 0; i < s.length; i++) {
//         const currentChar = s[i]
//         if(openig.includes(currentChar)){
//             stack.push(currentChar)
//         }else{
//             if (stack.length == 0 ) return false
//             const lastChar = stack[stack.length-1]
//             if (lastChar == '(' && currentChar == ')' || lastChar == '{' && currentChar == '}' || lastChar == '[' && currentChar == ']') {
//                 stack.pop()
//             }else return false
//         }
//     }
//     return stack.length === 0? true:false
// };

// console.log(isValid("{[]}"));


// var merge = function(nums1, m, nums2, n) {
    
// };

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
