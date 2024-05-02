//Strings 

let a = "22";// string should be in btw double quotes
console.log(typeof a); 
// Type Conversion String to number 
let typeConversion = Number(a);
console.log(typeof typeConversion);// Number


let b = "31abc";
let typeConver = Number(b);
console.log(typeof b);// it gives you NaN Not a Number

let c = undefined;
let typeConverundefine = Number(c);
console.log(typeof typeConverundefine);// it will also give you NaN Not a Number

let d= null;
let typeConvernull = Number(d);
console.log(typeof typeConvernull);// it will also give you 0 

let e = true;
let typeConboolean = Number(e);
console.log(typeof typeConboolean);// it will give you 1 for true and 0 for false 


