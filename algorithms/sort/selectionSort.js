// https://stackabuse.com/selection-sort-in-javascript/

let arr = [6,7,4,33,2,66,44,0,-2,8]
let length = arr.length

for(let i = 0;i<length;i++){
    let min = i
    for(h=i+1;h<length;h++){
        if(arr[h] < arr[min]) min = h
    }
    if(arr[min]<arr[i]) [arr[min],arr[i]]=[arr[i],arr[min]]
}

console.log(arr)