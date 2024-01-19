function additionA() {
    console.log('A')
}

function additionB() {
    console.log('B')
}

additionB()
additionA()

// program 2

function additionC() {
    setTimeout(function () {
        console.log('C executed')
    }, 3000)
}

function additionD() {
    console.log("D executed")
}

//additionC()
//additionD()

// Program 3
// 1)create user  2) id assign user 3) get user info by id 
function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("get info by id")
    }, 1000)

}
//getInfo()

// program 4  - async ----- execution ----- sync 
// call back hell

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info by id")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// Promises 
// program 4
let pro = new Promise(function(resolve,reject){
    let a = 10 
    let b = 5

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})


let proA = new Promise(function(resolve,reject){
    let first_name = "Shivani"

    if(first_name.startsWith('s')){
        resolve([11,22,33,44])
    }
    else {
        reject([-22,-33,-44,-55])
    }
})

proA.then(function(q1){
    console.log(q1[0])
},function(q2){
    console.log(q2[2])
})

// program 6

let pro2 = new Promise(function(resolve,reject){
    let a = 50
    let b = 50
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro2
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

// program 7

let pro7 = new Promise(function(resolve,reject){
    let students = ["rasika","sarika","poorva","rahul","ram"]
    if(students.length >= 6){
        resolve("all present")
    }
    else {
        reject("all not present")
    }
})

pro7
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always executed")
})














