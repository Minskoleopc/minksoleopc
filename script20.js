// class People {
//     firstName= "chinmay"
//     lastName = "deshpande"
//     age= 14
//     rollNo = 56

// }

// let amol  = new People()
// let chinmay = new People()

// console.log(amol)
// console.log(chinmay)



// program 2

class Person {  
    // property and methods 
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag
        this.rollno = rn
        this.display = function(){
            console.log("hello")
        }
    }

}
let amol = new Person("chinmay","deshpande",34,5)

// program 3

// setter and getter method

// class PersonB {
//     setFirstName(fn){
//         this.firstName  = fn
//     }

//     getFirstName(){
//         return this.firstName
//     }

//     setLastName(ln){
//         this.lastName  = ln
//     }

//     getLastName(){
//         return this.lastName
//     }

// }


// let amolm = new PersonB()
// console.log(amolm)
// amolm.setFirstName("chinmay")
// amolm.setLastName("deshpande")
// console.log(amolm)
// console.log(amolm.getFirstName())
// console.log(amolm.getLastName())




// class PersonC {

//     set first_name(fn){
//         this.firstName = fn
//     }

//     get first_name(){
//         return this.firstName
//     }

//     set last_name(ln){
//         this.lastName = ln
//     }

//     get last_name(){
//         return this.lastName
//     }

// }
// let amolK  = new PersonC()

// amolK.first_name = "amolk"
// console.log(amolK.first_name)
// amolK.last_name = "raoo"
// console.log(amolK)



// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// chinmay.city = "pune"


class Bank {
    constructor(fullN,bal){
        this.fullName  = fullN
        this.bal = bal
        this.transaction = []
    }

    withDrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt 
            this.transaction.push(-amt)
            return this.bal
        }
        else {
            console.log('Insufficient fund')
        }
    }

    deposit(amt){
        this.bal = this.bal + amt
        this.transaction.push(amt)
        return this.bal
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }   

}

let chinmayF  = new Bank("chinmay deshpande",10000000)
//chinmayF.withDrawl(10000000000000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)

console.log(chinmayF.lastFiveTransaction())