class User{
    constructor(username, age,mail){
 this.username = username;
 this.age = age;
this.mail = mail;
    }
    encryptPassword(){
        return `${this.username} of age ${this.age} and email ${this.mail}`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
const chai = new User("chai" , "34" , "chai@gmail.com")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
 