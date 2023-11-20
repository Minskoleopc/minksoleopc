

// selection of elements 
let headOne = document.querySelector('h1')
let buttonChange = document.querySelector('button')

// based on user action , changing the styles
buttonChange.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.textContent = "red"
})