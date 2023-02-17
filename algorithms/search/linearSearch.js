

function lenearSearch(array,target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
           return i 
        }
    }
        return -1
}
console.log(lenearSearch([-5,2,10,4,6],10))
console.log(lenearSearch([-5,2,10,4,6],6))
console.log(lenearSearch([-5,2,10,4,6],22))
// O(n)
