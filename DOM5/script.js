

//   <h1 id = "one" class = "two" name = "nm">Heading</h1> 
// css selector
// by id 
let byId = document.querySelector('#one')
console.log(byId)
// tagName 
let byTagName = document.querySelector('h1')
console.log(byTagName)
// className
let byClassName = document.querySelector('.two')
console.log(byClassName)
// atrribute
// tagName[attribute = "value"]
let byAttribute = document.querySelector("h1[name='nm']")
console.log(byAttribute)
// html element -------> object ------ properties and methods


// console.log(byAttribute.textContent)
// byAttribute.textContent = "bhavesh"
//byAttribute.style.color = "red"

byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "bhavesh"
    byAttribute.style.color = "red"

})




// example 

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// dot notation and bracket notation 
// console.log(info.firstName)
// info.firstName = "tanmay"


// let familyInfo = {
//     fullName:"chinmay deshpande",
//     parent:{
//         mother:"kanchan deshpabde",
//         father:"shirish deshpande"
//     }

// }
familyInfo.parent.mother = "kanchan s deshpande"










