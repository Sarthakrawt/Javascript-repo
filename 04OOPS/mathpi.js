// Object.getOwnPropertyDescriptor(Math)
console.log(Math.PI);
// it will not change it you try it to change 
// Math.PI = 5
// console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI" );
console.log(descriptor);

const chai ={
    name: "giner chai",
    price: 235,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
