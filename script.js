// program 1
let x = 10 
console.log(x)
x = 400
console.log(x)

// program 2
const h = 100
console.log(h)
//h = 900

// program 3
// Arithmetic operation ---> + , - , * , / , %

let c = 10
let d = 5

console.log(c+d)
console.log(c-d)
console.log(c*d)
console.log(c/d)
console.log(c%d)

let s = 9
let t = 3

console.log(s-t)
console.log(s+t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// program 3
// function 
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(4,2)

// program 4
// function without parameter and without return type 
function add(){
    console.log(9+9)
}
add()
add()
add()
add()

// function with parameter and without return 
function addB(x,y){
    console.log(x+y)
}
addB(16,4)
addB(5,4)
addB(15,5)

// function with parameter and with return type
// 100 given  // 100 + 100 , 100 - 50 , 100 * 0.10 , 100 / 5
// 100 shown // no use
function addC(x,y){
    return x + y
}
let q2 = addC(4,2)
console.log(q2)
console.log(q2 + q2)
console.log(q2 * 0.10)
console.log(q2 + 2)


































