//                 0    1   2    3
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    let a = 2023 - birthYear[i] //
    ages.push(a)
}
console.log(ages)

let q1 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2023 - el
})
console.log(q1)

let n = [11,22,33,44,55]
let q2 = n.map(function(el,index,arr){
    return el + 1
})
console.log(q2)



// filter()
let j = [11,22,33,44,55,66,11,22] // [44,55,66]
let above40 = []
for(let i = 0 ; i < j.length ; i++){
    if(j[i] > 40){
        above40.push(j[i])
    }
}
console.log(above40)

let q3 = j.filter(function(el,index,arr){
    return el > 40
})
console.log(q3)


let transactions = [100,-90,55,66,88,-99,88,99,-199]
let withDrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withDrawl)
let deposit = transactions.filter(function(el,index,arr){
    return el >0 
})
console.log(deposit)

// program 3

let tl = [11,22,33]
let total = 0

for(let i = 0 ; i < tl.length ; i++){
    // console.log(i)
    //console.log(tl[i])
    total = tl[i] + total
}
console.log(total)

let q4 = tl.reduce(function(acc,el,index,arr){
    return acc + el // acc ---- 11
},0)
console.log(q4)


// forEach() 

let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})


// some() , every() , find() , findindex()


























