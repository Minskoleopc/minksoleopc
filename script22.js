// Program 1

// Encapsulation 
// lexical scope
function addition() {
    let a = 10
    let b = 5
    //console.log(s+t)
    console.log(a + b)
    function additionB() {
        let s = 8
        let t = 3
        console.log(a + b + s + t)
        // console.log(a1+b1)
        function additionC() {
            let a1 = 10
            let b1 = 5
            console.log(a + b + s + t + a1 + b1)
        }
        additionC()
    }
    additionB()
}
addition()

// Program 2
function additionD(x,y){
    console.log(x+y) // 15
    return x + y    
    console.log("hello")
}
let q2 = additionD(12,3)
console.log(q2)

// program 3
// number as parameter and number as a return type 
function addA(x,y){
    return x + y
}
let q3 = addA(12,4)
console.log(q3)

// string as a parameter and string as a return 
function greet(word){
    return "Hello "+ word
}
let q4 = greet("chinmay")
console.log(q4)

// boolean as a parameter and boolean as return type
function cabDrive(age, haveVehicle){
    if(age >=18 && haveVehicle){
        return true
    }
}
let q5 = cabDrive(21,true)
console.log(q5)

// array as parameter and array as a return type
let cities = ["pune","mumbai","bangalore"]
function addCity(arr){
    arr.push("nagpur")
    return arr
}
let q6 = addCity(cities)
console.log(q6)

//object as parameter and object as return type 
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}

function addCity(obj){
    obj.city =  "pune"
    obj['city2'] = "wardha"
    return obj
}
let q7 = addCity(info)
console.log(q7)

// function as a return 
function addN(){
    return function(){
        console.log("hello")
    }
}
let q8 = addN()
console.log(q8)
// let q8 = function(){
//     console.log("hello")
// }

q8()

// function as a parameter and closures
// 9pm - sat   -------->    AJAX  
// 9pm - sun   -------->    AJAX






