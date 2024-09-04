// call
function SetUsername(username){
    //complex Db calls
this.username = username;
console.log("called");
}
function CreateUser(username, email , password){
    SetUsername.call(this, username);
    //after giving this then it will give you the variable 
    // it just hold the reference 
    // but not give me the variable inside it 
    //
    this.email  = email;
    this.password = password;
}
const chai = new CreateUser("chai" , "chai@google", "123");
console.log(chai);