// javascript and classes
// object collection of properties and methods
// toLowerCase toUpperCase
// we use these concept to make it more organized

// constructor function

// prototypes 
// prototypes is just a behaviour what you can do with the variable give you the properties or method to use 

// instances(new , this)
// const user = {
//     username : "sarthak",
//     loginCount: 1,
//     fun : function(){
//         console.log(this.loginCount);
//     }
//     // it you directly print loginCount then it will give you the error 
//     //this is used to acess the properties inside the object 
//     // it only works when you make the function inside and object
//     // if you directly print this it will give you the object values and properties

// }
// user.fun();

// const num = new Number();
// // new keyword is a contructor function 

// function User(username , loginCount, isLoggedIn){
//     this.username = username;
//     this.isLoggedIn = isLoggedIn;
//     return this;
// }
// const user1 = new User("sam" , 2, true);

// //without new keyword user2 over ride the user1 
// // that why we use new keyword 
// const user2 = new User("samkj" , 56, true);

// console.log(user);


// function multiby5(num){
//     return num*5;
// }
// multiby5.power = 12;
// // you can add different properties into the function it mean it is also an  object
// // javascript all the vlaues are object 
// console.log(multiby5.power);


function createUser(username , score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = ()=>{
    this.score++
};
createUser.prototype.printMe = ()=>{
    console.log(`it is ${this.score}`)
};
// you can also inject new properties inside the prototype 
const chai = new createUser("chai",123);

chai.printMe();
