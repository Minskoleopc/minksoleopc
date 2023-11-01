

// array 

let names = ["chinmay","sarika","poorva","ram"]
//retrive 
console.log(names[0])
//add
names.push("kajal")
names.unshift("pooja")
console.log(names)
//update 
names[1] = "sameer"
console.log(names)
//delete

names.pop()
names.shift()
names.splice(2,1)
console.log(names)


// loop 
let cities = ["pune","nagpur","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    ///console.log(i)
    console.log(cities[i])
}

let  t = cities.length
let i = 0 

while(i < t){
    console.log(cities[i])
    i ++
}


// program 3

let info3 =  ["satish","desmukh",34,67]

let info4 = {
    //key:value
    //property:value
    firstName:"satish",
    lastName:"desmukh",
    age:34,
    rollNo:67
}

// retrive  (dot notation and bracket)
console.log(info4.firstName)
console.log(info4['firstName'])

// update (dot notation and bracket)
info4.firstName = "ram"
info4['lastName'] = "dani"

// add (dot notation and bracket)

info4.city = "pune"
info4['language'] = "hindi"
console.log(info4)

info4.city = "nagpur"
info4['language'] = "marathi"

// delete (dot notation and bracket)

delete info4.firstName
delete info4['lastName']


let vehicle = {
    color:"red",
    type:"sedane"
}

//console.log(vehicle[0])
console.log(vehicle.color)
vehicle.color = "blue"
vehicle.reg = 345
delete vehicle.color 

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['reg'] = 345
delete vehicle['color'] 

vehicle = {
    color:"red",
    type:"sedane",
    regNo:123
}

// dot notation  ------ bracket notation
for(let prop in vehicle){
    console.log(prop,vehicle[prop])
}











