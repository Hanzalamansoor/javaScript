//i = 0 means initializing statement 
// i < 5 it will keep checking that i is less then 5 until it become 5 or grater than 5
// i++ means increment by 1 

//example initialize that i = 0 
// i++ means i = 1 then 2 and 3 so on till 4 
//when i will become 5 the condition will be false and program will exit
/*
for(let i = 0; i < 50; i++) {
    console.log(i) 
}
    */


/*
let num = 5
num = Number.parseInt(num)
for (let i = 0; i <50; i++){
    console.log(num * i)
}
*/


//Program to add first n natural number 
/*
let sum = 0
let n = 3
n = Number.parseInt(n)
for(i =0; i< n; i++){
    sum += (i+1)
}

console.log("sum of first" + n + "natural number is" + sum)
*/


// Finding the factorial in the for loop
/*
let sum = 1
let n = 3
n = Number.parseInt(n)
for(i =0; i< n; i++){
    sum = sum * (i+1)
}


console.log("factorial of first" + n + "natural number is" + sum)
*/


let obj = {
    harry: 90,
    subhan: 45,
    sahrukh : 56,
    rohan : 57,
    salman : 23
}
//for in loop 
//for...in: Gives you the property names (keys).
for (let a in obj){
    console.log("Marks of"  + a  +  "are"   +   obj[a])
}


//for of loop 
//for...of: Gives you the values directly.
for (let b of "harry"){
    console.log(b)
}
