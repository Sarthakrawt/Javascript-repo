// javascript execution context
// javascript is single threaded
//global execution context
// function execution context
//eval execution context`
//memory creation phase
// execution phase
let val1 = 12;
let val2 = 13;
function addNum(num1, num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val1, val2);
let result2 = addNum(1,3);
// in this source code first 
// creation phase will happen mean memory will allocate from top to bottom line by line 
/* let val1 = undefined , val2 = undefined 
addNum() = {}; function reference 
, result = undefined  , result2 = undefined 
this is first cycle 

execution phase 
val1 = 12 , assign the value 
val2 = 13
skip function 
addNum = new exexcution context 
new variable enviroment + execution thread 

mean repeat execution phase and creation phase 
val1 = undefined , val2 = undefied 
total = undefined
execution phase 
num1 = 10 
num2 = 5
total = 15
total varialbe will return to global exuction context 
then after exuction it will deleted 
then again it will repeat for the result2


*/