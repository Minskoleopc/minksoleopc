// Oops 


// Encapsulation 
// Inheritance 
// Polymorphism

// program 1 // incorrect way
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }

// }

// let amol = new Student("amol","rao",34)
// console.log(amol)

// class Teacher {

//     constructor(fn,ln,adharNo,salary){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//         this.salary = salary
//     }
// }

// let amolT = new Teacher("amolt","raoT",124,100000)


// program 2
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 10000
// }

// let chinmayT = new Teacher("chinmayT","deshpandeT",233)

// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.adharNo)
// console.log(chinmayT.salary)
// chinmayT.displayName()


// program 3


class Student {
    constructor(fn, ln, adharNo) {

        this.firstName = fn
        this.lastName = ln
        this.adharNo = adharNo

    }

    displayName() {
        console.log(this.firstName + this.lastName)
    }

}

class Teacher extends Student {

    constructor(fn, ln, adharNo, salary) {
        super(fn, ln, adharNo)
        this.salary = salary
    }

    displaySalary() {
        console.log(this.salary)
    }

}

let shakti = new Teacher("shakti", "sharma", 123, 123213123123)

console.log(shakti.firstName)
console.log(shakti.lastName)
console.log(shakti.adharNo)
console.log(shakti.salary)

shakti.displayName()
shakti.displaySalary()


// program 4
// single  interitance

class GrandFather {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayGName() {
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather {

    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }

    displayFName() {
        console.log(this.fnam + this.lastName)
    }

}

let shirish = new Father("Manohar", "Deshpande", "Shirish")

console.log(shirish.firstName)
console.log(shirish.lastName)
console.log(shirish.fname)

shirish.displayFName()
shirish.displayGName()


// program 5
// Multi-level inheritance

class GrandFatherB {

    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayGName() {
        console.log(this.firstName + this.lastName)
    }

}

class FatherB extends GrandFatherB {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }

    displayFName() {
        console.log(this.fname + this.lastName)
    }
}

class SonB extends FatherB {
    constructor(fn, ln, ffn, ssn) {
        super(fn, ln, ffn)
        this.sname = ssn
    }
    displaySName() {
        console.log(this.sname + this.lastName)
    }

}

let chinmay = new SonB("manohar","deshpande","shirish","chinmay")

chinmay.firstName
chinmay.lastName
chinmay.fname
chinmay.sname

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySName()

// herarchial inheritance 

// class Mother {  
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayMName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Son extends Mother {
//     constructor(fn,ln,sn){
//         super(fn,ln)
//         this.sname = sn
//     }

//     displaySName(){
//         console.log(this.sname + this.lastName)
//     }

// }

// class Daughter extends Mother {
    
//     constructor(fn,ln,dn){
//         super(fn,ln)
//         this.dname = dn
//     }

//     displayDName(){
//         console.log(this.dname + this.lastName)
//     }
// }

// let chinmaye = new Son("kanchan","deshpande","chinmay")
// let gauri   = new Daughter("kanchan","deshpande","gauri")


// chinmaye.firstName
// chinmaye.lastName
// chinmaye.sname

// chinmaye.displayMName()
// chinmaye.displaySName()


// gauri.firstName
// gauri.lastName
// gauri.dname

// gauri.displayMName()
// gauri.displayDName()












