class User{
    constructor(email, password){
        this.email = email;
        this.password = password;

    }
    
    get password(){
  return this._password.toUpperCase();
    }
    set password(value){
        // the problem occur why becuase you are setting password in consturctor also in setter
        // both are in the race to set the value 
        // that why you are getting the error 
        //   Maximum call stack size exceeded error
        // this.password = value;
        //so we use 
        this._password = value.toUpperCase();
    }
}

// we have to hide our password 
const hitesh = new User("sarthak@gmail.com" , "abc")
// Cannot set property password of #<User> which has only a getter  
//at new User
// for this you also need to set password it is also known as setter
console.log(hitesh.password);