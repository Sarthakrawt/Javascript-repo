//object and classes

//oops is used for optimize our code 
// before this our code is look like a spegatty code 
//object oriented programming 
// js have an clasees there no classes techincally  this feature is introduce in ES6 
// prototye based language is js
//its classses iareprimary syntatic sugar over existing prototype

// simple it is an object 
     const user = {
        username : "sarthak",
        email : "sarthak@gmail.com",
        password : "123",
        getUserDetails : (()=>{
          // this give you the current context
            console.log("got user details", this.username);
        })
     }
     console.log(user.getUserDetails())
     console.log(user.username)
      console.log(this);
      // new function is a constructor 
      function User(username , loginCount, isLoggedIn){ 
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        //return this;
      }
      const userOne = new User('hitesh', 12 , true);
      const userTwo = new User('chaiAurCode',12 , false);
      // this will over ride the code of userOne that's why we use new keyword
      console.log(userOne);
      //that why we use new keyword 
      // when you make a new keyword object is created
      // constructor call in second step
      // all the arguments are go in the object 