
// Object 

// Properties and method
// Human --- amol
// Properties  --- weight , color , height , gender
// Methods ----- walk(), talk(),sleep()

// Gym - method
// action - Excercise 
// return - health 


// program 
//              0       1         2        3
let cities = ["pune","nagpur","mumbai","banglore"]
let q1 = cities.length
console.log(q1)

// push() => new length

let fruits = ["apple","mango","banana"]
let q2 = fruits.push("chikoo")
console.log(q2)
console.log(fruits)


// unshift() => new length
let fruits2 = ["apple","mango","banana"]
let q3 = fruits2.unshift('papaya')
console.log(q3)
console.log(fruits2)


// pop()
let animals = ["tiger","lion","rabbit","snake"]
let q4 = animals.pop()
console.log(animals)
console.log(q4)

// shift()
let animals2 = ["tiger","lion","rabbit","snake"]
let q5 = animals2.shift()
console.log(q5)
console.log(animals2)

// includes()

let animals3 = ["tiger","lion", "leopard","rabbit"]
let q6 = animals3.includes('rabbit')
console.log(q6)

// indexOf()
//                  0          1        2         3
let vegetables = ["cabbage","tomato","potato","brinjal"]
let q7 = vegetables.indexOf("tomato")
let q8 = vegetables.indexOf("tomato2")
console.log(q7)
console.log(q8)

// at()
//           0   1 2  3  4
let marks = [11,22,33,44,55]
let q9 = marks.at(3)
console.log(q9)

// reverse()

let flowers = ["jasmine","rose","lily"]
let q10 = flowers.reverse()
console.log(q10)

// join()
let info = ["chinmay","deshpande",7709192441]
let q11 = info.join("-")
let q12 = info.join(" ")
let q13 = info.join("@")
console.log(q13)

// concat()
let array = [11,22,33]
let arrayB = [44,55,66]
let arrayC = array.concat(arrayB)
console.log(arrayC)


// python - 8:30 pm 
// java - 9pm
// javascript - 8.00pm

