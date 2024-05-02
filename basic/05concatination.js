// concatination
let a = "sam"+ "sat";
console.log(a);
//it will simply give you samsat;

// but if there are two different datatype then 
console.log("9"+1+ 1); // 911 output why because it will convert the 1 to string
// you can so see that javascript is using interpreter to compile the code
console.log(8+1+"2"); // 92

// pre and post increment 
let x = 10;
let y = ++x;//pre

console.log(`x: ${x} y: ${y}`);// 11 11

let m = 2;
let n = m++; //post
console.log(`m: ${m} n: ${n}`);// 3 2 