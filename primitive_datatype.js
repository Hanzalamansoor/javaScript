//There are total 7 primitive data types in js
//Null
//Number
//Symbol
//String
//Boolean
//Bigint
//Undefined 


//Object is a key value pair and non-primitive data type

// let person { name = 'John'} name is key and john is value


let a = null;
let b = 345;
let c = Symbol("I am a nice symbol")
let d = "Harry"
let e = true;
let f = BigInt("599") + BigInt("8")
let g = undefined
console.log(a,b,c,d,e,f,g)

//objects
const items = {
    "Harry" : true,
    "Ali" : true,
    "James": false,
    "Lovely" : 67,
    "Rohan" : undefined
}

console.log(items["Harry"])
