let arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]]


function flatten(ar) {
    let out = [];
    for(let i = 0;i< ar.length;i++) {
        if(Array.isArray(ar[i])){
            out = out.concat(flatten(ar[i]))
        } else {
            out.push(ar[i])
        }
    }
    return out;
}

console.log(flatten(arr));


