// shopping cart 
// there is a stuiation when we have multiple 
// argument to pass in one function

function calculateCartPrice(val1,val2,...num1){//val1 - 1 val2 - 3
    return num1;
     // ... this is rest operator and it give you a power to take multiple arguments

}
console.log(calculateCartPrice(1,3,4,5));// it will give you a array

const user={
    username: "hitesh",
    price: 19,
    func: function sarth(){
        // in object if you want to print or using it property
        // inside the object use this keyword
        console.log(this.username);
    }
}
// this is how you can call the function inside the object
console.log(user.func());
console.log(this.username);// it will give you undefined
function handleObject(anyobject){// passing object as argument 
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    // you can call its properties inside a function
}
handleObject(user);

const arr = [1,2,3,4];

// passing array as argument
function handleArray(array){
    console.log(array[1]);
}
handleArray(arr);