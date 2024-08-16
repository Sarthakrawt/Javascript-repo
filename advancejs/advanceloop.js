// for of loop
const arr = [1,2,3,4];
//  for (const iterator of object){} but it not oblicable for objects
for(let i of arr){
console.log(i);
}
for(let i in arr){
    console.log([i],arr[i]);
    console.log(typeof i);
}// this will give index
// and type will be string 


//Map 
const map = new Map();
map.set(1, "sarthak");
map.set(2,"sam");
map.set(4,"sarth");
map.set(1,"saa");
for(const [key ,value ] of map){
    console.log(`key : ${key} , value: ${value}`);
}
let obj = {
    javascript : "javascript",
    python : "py",
      java :"java",
      html : "html",
      css: "css"
}
// for in work to iterate through over the objects
for(const key in obj){
    console.log(`${key} key : ${obj[key]}`);
}

const arra = ['sa','re','ga','ma'];
for(const key of arra){
    console.log(key);
}
for(const key in arra){
    console.log(arra[key]);
}