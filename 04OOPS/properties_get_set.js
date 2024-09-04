function User(email , password){
    this.email = email;
    this.password = password;

    // past we used 
    Object.defineProperty(this, 'email' , {
        get: function(){
         return this._email.UpperCase();
        },
        set: function(value){
         this._email = value;
        }
    })
}
let user1 = new User("sarhta@gmail.com" , "abc");
console.log(user1.password);


// using object
obj = {
    _email: "gmai.com",
    _password:"abc",
    //_ mean private properties you cannot directly get it
     
    get password(){
        return this._password;
    },
    set password(value){
     this._password = value;
    }
}

const tea = Object.create(obj);
console.log(tea.password);
// output abc 
// we don't have password property we have _password property so why it giving you the password


const obj2 ={
    _username : "sarthak",
    _roll : 12
}
