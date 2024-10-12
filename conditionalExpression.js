//prompt ask you questions 
//Alert gives you the message 
// const prompt = require('prompt-sync')();

// let a = prompt("Hey whats your age ?")
// a = Number.parseInt(a) //Converting string into integer 
// if(a>0){
//     alert("This is a valid age");
// }

// else{
//     alert("This is an invalid age");

// }


// if (a<0){
//     alert("This is a valid age")
// }

// else if (a < 9){
//     alert("You are a kid and you can not even think of driving")
// }
// else if (a > 18 && a<9){
//     alert("You are a kid and you can  think of driving after 18")
// }

// else{
//     alert("You can now drive as you are above 18")
// }

//Home work explore switch 


//switch 

const dayNumber = 4;

let day;

switch(dayNumber){
    case 1:
        day = 'Monday';
        break;
    case 2 :
        day = 'Tuesday'
        break;
    case 3 :
        day = 'wednesday'
        break;
    case 4 :
        day = 'Thursday'
        break;
    case 5 :
        day = 'Friday'
        break;
    case 6 :
        day = 'Saturday'
        break;
    case 7 :
        day = 'Sunday'
        break;
    default:
        day = "Invalid day number";
}   

console.log(`The day is ${day}`)


//Ternary operator

// condition ? valueIfTrue : valueIfFalse;

//ex

const age = 4
const canVote = age >=18 ? "Yes,you can vote." : "No, you cannot vote.";



console.log(canVote);

