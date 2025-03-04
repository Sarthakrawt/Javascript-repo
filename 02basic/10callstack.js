// javascript execution context
// javascript is single threaded

// execution phase
// 1. Execution Context (Context)
//An Execution Context is the environment in which 
//JavaScript code is executed. It determines how functions and variables are accessible during execution.
//type of execution context
//global execution context
// function execution context
//eval execution context`
let val1 = 12;
let val2 = 13;
function addNum(num1, num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val1, val2);
let result2 = addNum(1,3);
// 2. Phases in JavaScript
//A Phase refers to a stage in the execution process.

/* Two Major Phases in Execution
1️⃣ Creation Phase (Memory Allocation)

The JavaScript engine allocates memory for variables and functions.
Variables declared with var are initialized with undefined.
Functions are hoisted (moved to the top).
2️⃣ Execution Phase (Code Execution)

The JavaScript engine executes the code line by line.
Variables get assigned values.
Function calls are executed.*/
//memory creation phase
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
