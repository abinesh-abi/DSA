// https://replit.com/@Codevolution/JavaScript-Algorithms#sorting/quick-sort.js

function quickSort(arr) {
    if (arr.length<2) return arr
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
// const arr = [8, 20, -2, 4, -6]
// console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]
// worst case -  O(n^2)
// avg case - O(nlogn)


/////////////////////////////////////////////////////////////////////

// https://www.digitalocean.com/community/tutorials/js-quick-sort

const unsortedArr = [4, 1, 3, 8, 2, 7, 4, 3, 10,3];

quickSort(unsortedArr)
console.log('out',unsortedArr)

function quickSort(arr,start =0,end = arr.length){
    let pivotIndex = pivot(arr,start,end)
    if(start >= end)return arr
    quickSort(arr,start,pivotIndex)
    quickSort(arr,pivotIndex + 1,end)

    return arr
}

function pivot(arr,start,end){
    let pivot = arr[start]
    let pointer = start
    for(let i =start;i<end;i++){
        //iterrate value less than pivot 
        if(arr[i]<pivot){
            pointer++
            [arr[pointer] ,arr[i]]=[arr[i],arr[pointer]]
        }
    }
    [arr[pointer] ,arr[start]] = [arr[start],arr[pointer]]
    return pointer
}


////////////////////////////////////////////////////////////////////////////////
// jenny's lecture
// quick sort
// another method

let arr = [4, 1, 3, 8, 2, 7, 4, 3, 10];
let lb = 0;
let ub = arr.length - 1
function partition(arr, lb, ub) {
  let pivot = arr[lb];
  let start = lb;
  let end = ub;
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start < end) {
      //   [arr[start], arr[end]] = [arr[end], arr[start]];
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
  let temp = arr[lb];
  arr[lb] = arr[end];
  arr[end] = temp;
  return end;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let loc = partition(arr, start, end);
    quickSort(arr, start, loc - 1);
    quickSort(arr, loc + 1, end);
  }
}
// quickSort(arr, lb, ub);

// console.log(arr);

