
//    <h1 id = "one" class = "two" name = "nm">Chinmay</h1>


// Css selector

// by id 

let idOne = document.querySelector('#one')
console.log(idOne)

// by class 
let byClass = document.querySelector('.two')
console.log(byClass)

// by tagName 
let byTagName = document.querySelector('h1')
console.log(byTagName)

// by any attribute
// tagName[attribute = "value"]
let byName = document.querySelector('h1[name = "nm"]')
console.log(byName)




