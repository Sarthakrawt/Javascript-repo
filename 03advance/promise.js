// Promise object represent future tasks completion 
// it take an call back inside a promise  
// there is a function inside a promise and two variable resolve and reject 

const promise = new Promise((resolve , reject)=>{
    // Do an async task
    // Db calls , cryptography , network
    setTimeout(()=>{
        console.log('Async task is complete')
        // for connecting to then we use reslove then promise consumed will run 
        resolve();
    },1000)
});

// then for consumtion of promise
promise.then(()=>{
    console.log('Promise consumed');
})


// creating promise object
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async task two')
        resolve();
    },1000)
}).then(()=>{
    console.log('async two resolved');
})



const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({username: "chai", email:"chai@ex.com"})
    },1000)
})
// resolve is directly connected to then 
promise1.then((user)=>{
    console.log(user);
    // then you can get the data form resolve
})


const promise2 = new Promise((resolve, reject)=>{
     setTimeout(()=>{
      let error = false; 
      if(!error){
        resolve({username: "sarthak", password: "1243"})

      }
      else{

        // it error show then the reject will show 
        reject(('Error Something went wrong'))
      }
     },1000)
})
//this is called chainning 
 promise2.then((user)=>{
     console.log(user);
     return user.username;
}).then((username)=>{
     console.log(username);
}).catch((error)=>{
    // it is connected will reject 
     console.log(error);
}).finally(()=>{
    // finally will run when all the task is completed it will always print after resovle or rejected
    console.log('the promise is either be resolved or rejected')
})


const promise4 = new Promise((resolve, reject)=>{
setTimeout(()=>{
    let error  = true;
    
    if(!error){
        resolve({username: "javascript"})
    }
    else{
        reject('Error: js went wrong')
    }
},1000)
})

// async also works like then 
async function consumePromise4(){
  // async does not handle error using try and catch we can handle errors
    try{
    // await is for wait for the promise 
        const response = await promise4;
    console.log(response);
    }
 catch(error){
console.log(error);
 }
}
   consumePromise4();


// async function getAllUser(){
//     try{
//         const response = await fetch("https://api.github.com/user");

// response will also take some time to run to the we use await
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("Error", error);
//     }
// }
// this will take time to complete
// getAllUser();

 
// fetch is used for fetch data
fetch("https://api.github.com/users/Sarthakrawt")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error", error);
})

async function  getAllusers() {
    try{
       const response = await fetch("https://api.github.com/users/Sarthakrawt");

       const data = await response.json();
       console.log(data);
    }catch(error){
         console.log("Error:" , error);
    }

}
// getAllusers();
fetch("tps://api.github.com/users/Sarthakrawt").then((a)=>{
    return a.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})