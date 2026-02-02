// Primitive

// 7 types : string, Numbers, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 567890345678945678n

// Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["chota bheem", "shaktiman", "hero"];
let myObj = {
    name:"vaibhav",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


// *******************************************************************

// Stack (Primitive), Heap (Non-Primitive)
