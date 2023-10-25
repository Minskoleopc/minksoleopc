
let firstName = 'chinmay'
let lastName = "deshpande"
let middleName = `shirish`

console.log(firstName)
console.log(lastName)
console.log(middleName)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

// program 2 
let fname = "chinmay"
let lname = "deshpande"

//"My firstName is chinmay and lastName is deshpande"
console.log("My firstName is "+fname+" My lastName is "+lname)
console.log(`My firstName is ${fname} My lastName is ${lname}`) 

// program 3 

// string + string =======> string 
// number + string =======> string 
// string + number =======> string 
// number + number =======> number

let a = 10
let b = 20 
let c = "hello"

console.log(a + b + c)
// number + number + string 
//      number + string
//        30  + "hello" -------> '30hello'

console.log(c + a + b)
// string + number + number       ===> 'hello10'  
     // string  + number     ===> 'hello10'+20
            // string      =====> 'hello1020'

console.log(a+c+b)

// program 4 
let firstNamee = "chinmay"
// String stores the value by index
// 0   1   2   3   4   5   6
// c   h   i   n   m   a   y
console.log(firstNamee[0])

for(let i = 0 ; i < firstNamee.length ; i++){
    //console.log(i)
    console.log(firstNamee[i])
}

// print char in reverse 

for(let  i = firstNamee.length - 1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(firstNamee[i])
}

// Program 5 
// String --- object ---- properties and methods
//  0   1   2   3   4
//  s   a   m   a   y
let fn = "Samay"
console.log(fn.length)

// toUpperCase()
let q1 = fn.toUpperCase()
console.log(q1)

// toLowerCase()

let q2 = fn.toLowerCase()
console.log(q2)

// includes()

let q3 = fn.includes('may')
let q4 = fn.includes('s')
let q5 = fn.includes('S')

console.log(q3)
console.log(q4)
console.log(q5)

// indexOf()

let q6 = fn.indexOf('S')
console.log(q6)
let q7 = fn.indexOf('s')
console.log(q7)

































