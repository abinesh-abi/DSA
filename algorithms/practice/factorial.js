function factorial(val) {
    let ftr = 1
   for(i=2;i<=val;i++){
    ftr = ftr * i
   } 
   return ftr
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

//  O(n)

function recursiveFactorial(n){
    if (n === 0) {
        return 1
    }
   return n*recursiveFactorial(n-1)
}

console.log('recursiveFactorial')
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(0))

//  O(n)

