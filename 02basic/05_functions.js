//function basics
// using variable
// but it not support hoisting when you use variable
const function1 = function(){
    console.log("function call");
}
function1; //if you print this then it will give you a reference  of that function
function1() ;// function call


//this function will support hoisting 
function addTwoNumbers(a,b){//paramenters
    return a+b
    console.log("this will not execute becuase after return type you can not print anything");
    //this will not execute becuase after return type you can not print anything
}

//passing arguments to function
console.log(addTwoNumbers(12,34));

const result = addTwoNumbers(2,3);
console.log(`Result: ${result}`);// result =undefined 


// parameter will work when you assign it value in a function 
function loginUserMsg(username="sam"){
    if(!username){ 
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMsg());// it will work 


