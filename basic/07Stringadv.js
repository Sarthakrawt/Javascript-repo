
//string advance

const name = "samaphone";

console.log(` name: ${name}`);

// this is call stringinterpolation which advance then the normal "quotes"

const gamename = new String('hemant-');

//string is an object 
// when we use new keyword mean it will create an object for us

console.log(typeof gamename);// object 

console.log(gamename[0]);// javascript start with 0 index

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(0));

console.log(gamename.indexOf('t'));

const newstr  = gamename.substring(0,6);

console.log(newstr);

const str1 = gamename.slice(0,4);

console.log(str1);

let n = "   hitesh    ";

console.log(n);

console.log(n.trim());// cut all the spaces



let url = "http://history%20choud";

console.log(url.replace('%','-'))

console.log(url.includes('history'));// true

let am = "sarth slafkj als ls";
let b = am.split(" ");//give you the array
b.push(1);
console.log(b);
