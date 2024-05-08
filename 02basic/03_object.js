// singleton  constructor se banta h 
// object literals
// Object.create this is how we make using consturctor
const mysymbol = Symbol("key1");
const JsUser ={
    name: "hitesh",
    age : 30,
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"],
    [mysymbol] : "sam"// this is Symbol
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log( JsUser[mysymbol]);

JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser); freeze is for object freeze
JsUser.email = "thsi iwll not occur";
console.log(JsUser.email);

JsUser.greeting = function (){
    console.log(`this is ${this.name}`);
}
JsUser.greeting();



