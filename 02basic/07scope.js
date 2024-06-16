
if(true){
let a = 12;
const b = 20;
var c = 30;
}
console.log(c);//it will give you output that the proplem with var type so we use let and const to assign the value 


function one(){
    const username ="hitesh";
    function two(){
        const website = "youtube";
        console.log(username);// for function two function one is a global variable it will print hitesh username 
    }
    //console.log(website);//this willgive you error why becuase website scope is inside two function 
    two();
}
one();


// +++++++++++intersting +++++++++++++++++

addone(4);// hoisting 
// hoisting it nothing but call the function after declaring 
function addone(val){
    return val+1;
};
console.log(addone(5))

addTwo(5);// it will not excessable 
const addTwo = function(num){
    return num+2;
}
