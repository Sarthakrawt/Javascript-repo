class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

static createId(){
    return `234`;
}
}

class Teacher extends User{
    constructor(username , email){
        super(username);
        this.email = email;
    }
}

// it will give you the error 
// const chai = new User("chai");
// console.log(chai.createId());

// also child class cannot call it 