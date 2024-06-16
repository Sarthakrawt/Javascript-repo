// arrow function 

// arrow function is used to intialize the function faster
// it is mostly used in react 
const fun = (object) => {
    console.log(`object hai ye ${object.name}`);
}
fun({name: "sarthak"});

let obj = {
    name : "hitesh",
    age: 23,
    funct : ()=>{
        console.log(this.name);
    }
}

// const {name} = obj;
// console.log(name);

// implecit return 
const addtwo = (num1 , num2) => (num1 + num2);

addtwo(1,2);

// expresit return 
const addtwonum = (num1,num2) => {
    return num1 + num2;
}
addtwonum(1,2);