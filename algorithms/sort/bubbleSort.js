

function bubbleSort(arr) {
    let swapped 
    let length = arr.length - 1
    do{
        swapped =false
    for (let i = 0; i < length ; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
            swapped = true
        }
    }
    length -- 
} while(swapped)
}
const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]
// O(n^2)


// /////////////////////////////
// // another method
// const arr = [8, 20, -2, 4, -6]
// for (const val of arr) {
//     for (i=0;i<arr.length;i++) {
//         if (arr[i] > arr[i+1]) {
//             console.log(arr[i],arr[i+1])
//             let temp = arr[i]
//             arr[i]= arr[i+1]
//             arr[i+1] = temp
//         }
//     }
// }
