function SetUsername(username){
    // this method will not call 
    this.username = username;
    console.log("called");
}
function createUser(username , email , password){
    // if you need to call it use this keyword 
    SetUsername.call(this, username)
    // when you use call method then the function called 
    this.email = email
    this.password = password
}
const chai = new createUser(
    "chai" , "chai@gmail.com" , "123"
)
console.log(chai)