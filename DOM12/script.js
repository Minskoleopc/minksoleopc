
let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


buttonOne.addEventListener('click',function(){
    let txt = inputText.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = txt // <li>Chikoo</li>
    createButtons(newElement)
    ulList.appendChild(newElement)
    inputText.value = ""

})


{/* <li>Banana
<button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button>
</li> */}


function createButtons(li){

    let r  = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class ="remove">Remove</button>
    li.appendChild(r)


    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up</button>
    u.classList.add('up') // <button class = "up">Up</button>
    li.appendChild(u) 

    
    let d = document.createElement('button') // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add('down') // <button class = "down" >Up</button>
    li.appendChild(d) 

}