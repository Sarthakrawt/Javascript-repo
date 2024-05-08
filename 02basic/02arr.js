const marvel_heros =['spiderman' , 'ironman','captianamerica']
const dc_heros = ['deadpool','superman','batman']
// marvel_heros.push(dc_heros);// wil not merge the arrays
// it will jsut make a value array inside array 
// console.log(marvel_heros);
// console.log(marvel_heros[0][1]);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);// concat will merge both the arrays

// sperator operator ...
const all_heroes = [...marvel_heros, ...dc_heros];

const another_array = [1,2,3 [3,4,5,5] , 7 , [2,4,[4,5]]];
const merge_another_array = another_array.flat(Infinity);
console.log(merge_another_array);

Array.isArray("hitesh"); // for checking the array
Array.from("hitesh"); // it will convert into array
console.log(Array.from({name: "hitesh"}));// intersting case 

let s1 = 100;
let s2 = 200; 
let s3 =300;
console.log(Array.of(s1, s2, s3));