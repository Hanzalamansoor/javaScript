//problem 1
//use a logical operator to  find weather  the age 
//of a person lies bw 10 and 20 

/*
let age = prompt("What is your age ?")
age = Number.parseInt(age)

if(age>10 && age<20) {
  console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age doesn't  lies between 10 and 20")
}
    */

//bear in mind that prompt will not work in vs code , it will only work on a browser or html script tag


//problem 2


/*
let age = 10;

switch(age) {
    case 12 :
        console.log("You are age is 12");
        break
    case 13 :
        console.log("You are age is 13");
        break
    case 14 :
        console.log("You are age is 14");
        break
    case 15 :
        console.log("You are age is 15");
        break
    default:
        console.log("Your age is not special")
}

*/

// problem 3
//Write a Js program to  find out that a number is divisible by 2 and 3


/*
let num = 12
num = Number.parseInt(num)

if(num%2 == 0 && num%3 == 0){
    console.log("Your number is divisible by 2 and 3")
}
else {
    console.log("The number is not divisble by 2 and 3")
}
    */


//problem 4

//Write a Js program to  find out that a number is either  divisible by 2 or 3

/*
let num = 2
num = Number.parseInt(num)

if(num%2 == 0 || num%3 == 0){
    console.log("Your number is divisible by 2 or 3")
}
else {
    console.log("The number is not divisble by 2 and 3")
}
    */



// problem 5

//Print "You can drive" or you cannot drive based on age being greater than 18 using ternary operator


let age = 25;
const drive = age >=18 ? "You can drive" : "You cannot drive";
console.log(drive)


