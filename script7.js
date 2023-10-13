
// for(intilization ; conditionCheck ; increment/decrement){
//     // statements
// }

// program 1
for(let i = 0 ; i <= 3 ; i++){ // 1 // 2 // 3 //4
    console.log(i) // 0  1  2  3
} 

// program 2 
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) //1 // 2 // 3 // 4 // 5
}

// program 3
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" , "hello" , "hello"
}

// program 4
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 5
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 ------- 22
    console.log(i) // 2 // 4 --------- 20
}

// program 6
// table of 5 in reverse 

for(let i = 50 ; i >= 5 ; i = i-5){ // 45  40  35 ---- 0
    console.log(i) // 50 // 45  // 40 ------ 5
}

//-----------------------------------------------

// break statement with for 
for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}



for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) // 1 // 2 //3
    if(i == 3){
        break
    }
}


for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 5 // 4

}

for(let i = 5 ; i >= 1 ; i--){  // 4 // 3
    console.log(i) // 5 // 4 // 3
    if(i == 3){
        break
    }
}

// continue with for 
for(let i  = 1 ; i <= 5 ; i++){ //2 // 3 // 4 //5 // 6
    if(i == 2){
        continue
    }
    console.log(i) // 1 // 3 // 4 // 5
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    if(i == 3){
        continue
    }
    console.log(i) // 5 // 4 // 2 //1
}


































