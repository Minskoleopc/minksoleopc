

// program 1

// id
let htmlOne = document.querySelector('#one')
let getElementById = document.getElementById('one')

console.log(htmlOne)
console.log(getElementById)

// program 2

// class 

let byclassName = document.querySelector('.two')
console.log(byclassName)

let allElementNodeList = document.querySelectorAll('.fruits')
console.log(allElementNodeList)

// selecting the element 

let addButton = document.querySelector('button')
addButton.addEventListener('click',function(){
    for(let i = 0 ; i < allElementNodeList.length ; i++){
        // console.log(i)
        console.log(allElementNodeList[i])
        allElementNodeList[i].style.color = "green"
     }
})

let allElementHtmlCollection = document.getElementsByClassName('fruits')
console.log(allElementHtmlCollection)

// program 3 
// tagName
//    <h1 id = "one">Hello</h1>
let byTagName = document.querySelector('h1')
let allELementWithTagLi = document.querySelectorAll('li')
console.log(allELementWithTagLi)

let allELementWithTagLiHtmlCollection =  document.getElementsByTagName('li')
console.log(allELementWithTagLiHtmlCollection)

// program 4 
let byClassName = document.querySelector('[name="fr"]')
console.log(byClassName)

let byNameNodeList = document.querySelectorAll('[name="fr"]')
console.log(byNameNodeList)

let byNameNodeList2 = document.getElementsByName('fr')
console.log(byNameNodeList2)