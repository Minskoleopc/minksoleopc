// method -- action and return type 

let city = "pune"

// length 
let a1 = city.length
console.log(a1)

// toUpperCase()
let a2 = city.toUpperCase()
console.log(a2)

// toLowerCase()
let city2 = "Nagpur"
let a3 = city2.toLowerCase()
console.log(a3)

// includes()
let city3  = "jaipur"
let a4 = city3.includes('r')
let a5 = city3.includes('pur')
let a6 = city3.includes('R')
console.log(a4)
console.log(a5)
console.log(a6)

// indexOf()

let city4 = "chandrapur"
// 0   1    2   3   4   5   6   7  8   9
// c   h    a   n   d   r   a   p   u   r
//-10 -9   -8  -7  -6  -5  -4  -3   -2  -1

let a7 = city4.indexOf('a')
let a8 = city4.indexOf('A')
console.log(a7)
console.log(a8)

console.log(city4.slice(5))
console.log(city4.slice(1,5))
console.log(city4.slice(-9,-2))
console.log(city4.slice(2,-2))
console.log(city4.slice(-9,5))
console.log(city4.slice(-5))
console.log(city4.slice(-1,-5))

// program 4

//startsWith()

let city5 = "wardha"
let a9 = city5.startsWith('w')
let a10 = city5.startsWith('war')
let a11 = city5.startsWith('D')
console.log(a9)
console.log(a10)
console.log(a11)

//endsWith()
let city6 = "nashik"
let a12 = city6.endsWith('k')
let a13 = city6.endsWith('hik')
let a14 = city6.endsWith('Hik')
console.log(a12)
console.log(a13)
console.log(a14)

//trim()

let city7 = " goa "
console.log(city7.length)
let a15 = city7.trim()
console.log(a15.length)


//trimStart()
city7 = " goa "
let a16 = city7.trimStart()
console.log(a16.length)

//trimEnd()
city7 = "goa "
let a17 = city7.trimEnd()
console.log(a17.length)

//split()

let info = ["chinmay","deshpande","7709192441"]
let a18 = info.join('-')
console.log(a18)

let a19 = a18.split('-')
console.log(a19)
//["chinmay","deshpande","7709192441"]



// -------------------------------> 

// toUpperCase() , to Lower()
let str = "Hello world !"
a  = str.toUpperCase()
console.log(a)
b = str.toLowerCase()
console.log(b)

// concat()

let  firstName = "chinmay"
let  lastName = "deshpande"
c = firstName.concat(" ").concat(lastName)
console.log(c)

//trimStart() , trimEnd() , trim()

let cityE = " goa "
console.log(cityE.trimStart().length)
console.log(cityE.trimEnd().length)
console.log(cityE.trim().length)

// repeat()
let str2 = "abc" 
let d = str2.repeat(3)
console.log(d)

// charAt() , charCodeAt()

let city11 = "Nagpur"
let e = city11.charAt(2)
let g = city11.charCodeAt(0)
console.log(e)
console.log(g)

// startsWith() , endsWiths() ,includes()
let city12 = "chennai"
city12.startsWith("c")  // true 
city12.startsWith("che") // true
city12.endsWith("nai")  // true
city12.endsWith("i") // true
city12.includes("nn") // true
city12.includes("n") // true

// replace() , replaceAll()
let info2 = "I am learning javascript and javascript is nice !"
let h = info2.replace("javascript","python")
let i = info2.replaceAll("javascript","python")
console.log(h)
console.log(i)


// join()
// split()

let info3 = "chinmay shirish deshpande"
let k = info3.split(' ')
let ka = info3.split('a')
console.log(k)
console.log(ka)

let info4 = ["chinmaydeshpande","gmail.com"]
let l = info4.join('@')
console.log(l)

// ["chinmay","shirish","deshpande"]
//["chinm,"y shirish deshp","nde"]

let strQ = '25'
let m = strQ.padStart(4,'0')
console.log(m)


let strQM = '25'
let n = strQ.padEnd(8,'I')
console.log(n)

// slice()

// 8.00 pm , 8:30 pm python , 9.00 pm java
// 7:30 pm typescript
// seleniumJava seleniumPython  Cypress   Playwright






















