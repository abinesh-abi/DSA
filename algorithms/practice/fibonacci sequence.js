function fibonacci(n) {
    const fib = [0,1]
    for(i=2;i<n;i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib
}

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(6))

// o(n)

function recursivefibonacci(n) {
  if (n < 2)return n
  return recursivefibonacci(n - 1) + recursivefibonacci(n - 2)
}

let val =7
let result =[]
for (let i = 0; i < val; i++) {
    result[i] = recursivefibonacci(i)
}
console.log(result)


// console.log(recursivefibonacci(0)) // 0
// console.log(recursivefibonacci(1)) // 1
 
 console.log(recursivefibonacci(7)) // 13  ===> // num|left|right| value|   
                                                // ----------------------
                                                // 7  | 8  |  5  |  13  |                
                                                // 6  | 5  |  3  |   8  |                
                                                // 5  | 2  |  2  |   5  |                
                                                // 4  | 2  |  1  |   3  |                
                                                // 3  | 1  |  1  |   2  |                
                                                // 2  | 1  |  0  |   1  |                
                                                // 1  | 1  |  0  |   1  |                
                                                // ---------------------

// o(2^n)

// function fibo(val) {
//     if (val < 2)return val
//     return fibo(val)
// }

// console.log(fibo(2))
