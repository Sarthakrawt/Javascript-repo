// let a = [12,344,34,123];
// for(arr of a){
//     l
//     if(count%2 === 0){
//       console.log(arr);
//     }
    // javascript is prototype language 
    //it give multiple method 
    // it further give multiple prototype it also known as multi inheritance 
// }
function multipleBy5(num){
  return num*5;
}
//  multiplyBy5.power = 2;
console.log(multipleBy5(5));
// console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username , score){
  this.username = username ;
  this.score = score;
}
createUser.prototype.increment = function(){
  score++;
}
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}
const chai = new createUser("chai" , 25);
// but there is some problem we don't know what is calling the prototype increment
const tea = new createUser("tea " , 350);
chai.printMe();
// new keyword make new keyword 
// let myName ="hitesh     ";
// we have to make a method which we can trim the string 
// console.log(myName.truelength());

let myHeros = ["thor" , "blackpanther", "nova"]
let heroPower = {
  thor : "hammer",
  spiderman : "sling",
  getSpiderPower : function(){
    console.log(`Spiderman power is ${this.spiderman}`);
  }
}

Object.prototype.sarthak = function(){
  console.log(`sarthak present in all object`);
}
heroPower.sarthak();
myHeros.sarthak();

const Teacher = {
  makeVideo : true
}
const teachingSupport = {
  isAvailable : false,
}
const TaSupport = {
  makeAssignment : 'Js Assignment',
  fullTime : true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode  "
String.prototype.trueLength = function(){
  console.log(`${this}`);
console.log(`${this.trim().length}`);
}
anotherUsername.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()