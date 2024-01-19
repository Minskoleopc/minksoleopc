
// let add = function(x,y){
//     return x + y
// }


// let x = 10 
// console.log(x)
// console.log(add) // function expression 
// add(12,4)  // function call

function additionE(x,y){
    return function(){
        console.log(x + y)
    }
}
let q1 = additionE(12,3)
console.log(q1)
// let q1 = function(){
//     console.log(x + y)
// }

q1()

// program  2

let x = 10 
console.log(x)

let sub = function(x,y){
    return x - y 
}

function subtraction(fn ,x,y){
    // let fn = function(x,y){
    //     return x - y 
    // }

    let s = fn(x,y)
    return s
}
let s2 = subtraction(sub,12,4)
console.log(s2)