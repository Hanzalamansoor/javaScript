//OPERATORS AND EXPRESSIONS
//Operators and operands 
//1 + 2  , i and 2 are operands and + is an operator 
// !true = false ! is operator and true is an operands and false is our result
let a = 45
let b = 5
//ARTHEMATIC OPERATORS
console.log("a + b = ",a+b)
console.log("a - b = ",a-b)
console.log("a * b = ",a*b)
console.log("a / b = ",a/b)
//This means 45 power 5 45^5
console.log("a ** b = ",a**b)
//This will show the remainder
console.log("a % b = ",a%b)
//Increment operator
//Will increment the value of a 
console.log("a++ = ",a++) // a = 45 or if we use console.log("++a  = ",++a) this will increment the value in the first log
console.log("a" , a) // now a = 46
//Decreament operator
console.log("--a = ", --a) //44
console.log("a-- = ", a--) //45
console.log("a = ", a) //44
console.log("a-- = ", a--) //44



//(explanation)
let c = 9
console.log("++c", ++c) // means 9 + 1 = 10
console.log("c++ = ", c++) // 10 will be output but 11 is saved
console.log("--c = ", --c) // as 11 was stored so 11-1 = 10 wil be the output
console.log("c-- = ", c--) // 10 will be the output but 9 is stored
console.log("c = ", c) // c = 9
console.log("c++", c++) // 9 as an output but 10 is stored 



//ASSIGNMENT OPERATORS
a = 45
// a = a + 5 is same as a+=5 
a+=5
console.log(a)

a-=5
console.log(a)
a*=5
console.log(a)
a/=5
console.log(a)
a%=5
console.log(a)
a**=5
console.log(a)




//Comparision operators 

// == equals to 
// != not equal
// === equal value and type 
// ! == not equal value or not equal type
// > greater than
// >= greater than or equal's to 
// <= less than or equals to
// ? ternary operator


let comp1 = 5
let comp2 = "5"
console.log("comp1 == comp2", comp1 == comp2) // output = false
console.log("comp1 != comp2", comp1 != comp2) //output = true
console.log("comp1 === comp2", comp1 === comp2) //output if 5 === "5" then it is false becuase type rhs of 5 is string but in == it will be true 
console.log("comp1 !== comp2", comp1 !== comp2) // same formula of === that they both are not equal so it is true


let comp3 = 4
let comp4 = 3
console.log("comp3 > comp4", comp3 > comp4) //true
console.log("comp3 < comp4" , comp3 < comp4) //false



//LOGICAL OPERATORS

// && logical and 
// || logical or
// !  logical not 

let x = 5;
let y = 6;

// && (end operator)
console.log(x>y && x ==5) //In end operators both sides should be true 
console.log(x < y && x == 5) //output true bcs true | true
console.log(x > y && x == 6) // output false bcs false | false


// or (or operator)

console.log(x>y || x==5) //In or operator only one side should be true 
console.log(x<y || x==5) // true
console.log(x>y || x==6) //false


// ! (not operator)
console.log(!false) // means true
console.log(!true) // means false 

//MULTI LINE COMMENT 
 /* This 
 is
 how
 multi line comment is 
 written 
 */
