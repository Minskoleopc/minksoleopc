// program 1
// class Person {

//     firstName = "chinmay"
//     lastName = "deshpande"
//     age = 34
//     rollNo = 7

// }

// let amol = new Person()
// let chinmay = new Person()

// console.log(amol)
// console.log(chinmay)

// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 23
// amol.rollNo = 34
// console.log(amol)

// program 2 
class PersonE {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
}
let amol2 = new PersonE("amol","rao",34,66)
let chinmay2 = new PersonE("chinmay","deshpande",34,66)
let kajal2 = new PersonE("kajal","dule2",27,66)

let students = [amol2,chinmay2,kajal2]
students.forEach(function(el){
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})


// program 3 

class PersonF {
    setFirstName(fn){
        this.firstName = fn
    }
    getFirstName(){
        console.log(this.firstName)
    }
    
    setLastName(ln){
        this.lastName = ln
    }
    getLastName(){
        console.log(this.lastName)
    }
}

let kajal3 = new PersonF()
kajal3.setFirstName("kajal")
kajal3.setLastName("dule")
console.log(kajal3)

kajal3.getFirstName()
kajal3.getLastName()


