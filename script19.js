
// object literal
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare",
    age:33
}
let ram = {
    firstName:"ram",
    lastName:"dani",
    rollNo:34
}

// function constructor
function Person(fn,ln,rn){
    this.firstName = fn 
    this.lastName = ln 
    this.rollNo = rn
}

let amol  = new Person('amol','rao',45)
let chinmaye = new Person("chinmay","deshpande",45)
console.log(amol)
console.log(chinmaye)


chinmaye.rollNo = 45
chinmaye.city = "pune"
console.log(chinmaye['rollNo'])
delete chinmaye.firstName
console.log(chinmaye)

// Es6 class 




// Object.create()




