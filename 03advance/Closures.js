function init(){
    let name = "mozilla";
    function displayname(){
        // you can access the variable name in inner function 
        // this is called lexical scoping 
        // function inside the function can access the parent function variable 
        console.log(name);
    }
    displayname();
}
init();

//closures

function makeFunc(){
    const name = "me";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();