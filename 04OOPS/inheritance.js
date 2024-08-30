class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    // now you can access the above class functions and properties
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course add by ${this.username}`)
    }
}
const chai = new Teacher("chai " , "chai@gmail.com","123")
chai.addCourse();
const tea = new User("sam");
tea.logMe();
console.log(chai instanceof User);

