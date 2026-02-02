const name = "Vaibhav";
const age  = 21;

// console.log(name + age + "Value");

console.log(`Hello my name is ${name} and My age is ${age}`);

const gameName = new String ('vaibhav-raj-kumar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(1 , 4)
console.log(anotherString);

const newStringOne= "    vaibhav   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vaibhav.com/vaibhav%70raj"

console.log(url.replace('%70', '-'))

console.log(url.includes('vaibhav'))

console.log(gameName.split('-'))