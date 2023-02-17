// function isPowerOfTwo(n) {
//    if (n<1) {
//     return false;
//    } 
//    while (n>1) {
//     if (n%2 !==0) {
//        return false; 
//     }
//     n= n/2
//    }
//    return true;
// }

// console.log(isPowerOfTow(1))
// console.log(isPowerOfTow(2))
// console.log(isPowerOfTow(5))
// console.log(isPowerOfTow(8))

// // O(logn)

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n-1) === 0)
}