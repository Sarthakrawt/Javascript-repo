// Numbers and  its methods ,Maths library

const score = new Number(12);
console.log(score);
console.log(score.toString());
//toString methord is for convert the number into string 
//after you make it string you can use all the methods of string also 
console.log(score.toString().length);
const a = 12.34343;
console.log(a.toFixed(2));//you wil get precision value  after point 
const other = 34.36343;
console.log(other.toPrecision(3));// 34.4
const hundreds = 10000;
console.log(hundreds.toLocaleString('en-IN'));// convert into indian standard 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


// Math is a library which is inbuilt in js 
console.log(Math.random());// it will give you the value btw 0 and 1
console.log(Math.abs(-4));// absolute value mean it will convert - to + 
console.log(Math.round(4.3));// give the round off value 
console.log(Math.ceil(4.2));// it will give us ceil or highest value 
console.log(Math.floor(4.9));//it will give us floor or lowest value
console.log(Math.sqrt(4));//it for square root 
console.log(Math.max(1,2,3,4));// max value
console.log(Math.min(1,2,3,4));// min value

const min = 10 ;
 const max = 20 ; 
 console.log(Math.floor(Math.random() * (max-min+1)));