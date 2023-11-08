
// push pop shift unshift


let names = ["chinmay","ninad","satish","kailas"]

names.push("samay")
names.unshift("mahesh")
names.pop()
names.shift()

// map , filter , reduce , forEach , find , findIndex, some , every

let a = [11,22,33,44,55,66,77,88,99]
let aa = a.map(function(el,index,arr){
        return el + 1
})
console.log(aa)

let bb = a.filter(function(el,index,arr){
    return el > 30
})
console.log(bb)

let cc = a.reduce(function(acc ,el,index,arr){
        return el + acc
},0)
console.log(cc)

a.forEach(function(el,index,arr){
    console.log(el + 1)
})

let marks = [99,100,101,102,103,104,77,33]

let dd = marks.filter(function(el){
    return el > 100
})
console.log(dd)

let ee = marks.find(function(el){
    return el > 100
})
console.log(ee)

let ff = marks.findIndex(function(el){
    return el > 100
})
console.log(ff)


marks = [99,100,101,102,103,104,77,33]

let gg = marks.every(function(el){
    return el > 10
})
console.log(gg)


let kk = marks.some(function(el){
    return el > 100
})
console.log(kk)


let cities  = ["pune","banglore","kolkata"]
let ll = cities.indexOf('Pune')
let mm = cities.includes('pune')

console.log(mm)
console.log(ll)

let info = ["chinmay","shirish","ninad"]
let nn = info.join("-")
console.log(nn)
cities  = ["pune","banglore","kolkata"]


let yy = cities.concat(["wardha","chandrapur"])
console.log(yy)


let h  = [[11,22,33],[44,55,66],[77,88,99]]
let rr = h.flat()
console.log(rr)

let h1 = [33,44,55,66,33,44]
let h2 = h1.fill("a",1,5)
console.log(h2)

//               0         1          2          3
let country = ["india","pakistan","srilanka","bangladesh"]
console.log(country)
let zz = country.sort()
console.log(zz)

let qq = country.reverse()
console.log(qq)

// slice()
// splice()

let haa  = "chinmay";
let rev = "";
// "yamnihc"

// 0  1  2  3  4  5  6
// c  h  i  n  m  a  y

for(let i = 0 ; i < haa.length ; i++){
    // console.log(i)
    // console.log(haa[i])
    rev  =  haa[i] + rev
            //  c     + ""  ==> c
            //  h     + c  ==> hc 
            //  i     + hc  ==> ihc
    
}
console.log(rev)

// 9.00 am (Git / Postman)
// 8.00 pm (Git / Postman)



