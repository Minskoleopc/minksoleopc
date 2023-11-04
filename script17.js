let students = [
    {
        firtsName:"chinmay",
        lastName:"deshpande",
        age:23,
        rollNo:14,
        skills:["html","css","javascript"],
        city:"pune"
    },
    {
        firtsName:"amol",
        lastName:"rao",
        age:25,
        rollNo:37,
        skills:["html","python","javascript","css"],
        city:"jaipur"
    },
    {
        firtsName:"poorva",
        lastName:"vyas",
        age:21,
        rollNo:31,
        skills:["css","django","python"],
        city:"ujjain"
    },
    {
        firtsName:"sarika",
        lastName:"pansare",
        age:33,
        rollNo:37,
        skills:["html","css","javascript","cypress"],
        city:"pune"
    }

]
// program 1 
// print firstName for all users 

students.forEach(function(el){
    console.log(el.firtsName)
})

// program 2 
// print name:numberofSkills 
// poorva:3

students.forEach(function(el){
    console.log(el.firtsName +":"+ el.skills.length)
})

// program 3 
// print user with python
students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firtsName)
    }
})

// program 4 
// print user with python and django 
students.forEach(function(el){
    if(el.skills.includes("python") && el.skills.includes("django")){
        console.log(el.firtsName)
    }
})

// program 5
// print user with 'o' as subtring in firstName 
students.forEach(function(el){
    if(el.firtsName.includes("o")){
        console.log(el.firtsName)
    }
})
// program6
// prompt engineer skills added to all users 
students.forEach(function(el){
    el.skills.push("prompt engineer")
})
console.log(students)

// program 7
// average age of all students 

let q3 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(q3/students.length)

// program 8
// user fullname with rollNo above 30
let q4 = students.filter(function(el){
    return el.rollNo > 30
})
console.log(q4)

q4.forEach(function(el){
    console.log(el.firtsName)
})









