const month = 3;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}

// truthy value and falsey value
const userEmail = "h@hitesh.com";
if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}
// flasy value 
/* false  , 0 , -0 , BigInt 0n , "" , null, undefined , NaN  these are falsy value*/
// turthy value
/* "0" , 'flase', " ", [],{},function(){}*/

let val1;
val1 = 5?? 10;
val1 = null ?? 21;
val1 = undefined ?? 10 ?? 10;

console.log(val1);

const iceTeaPrice = 10;
iceTeaPrice <=80 ? console.log("ice tea is less than 80"): console.log("ice tea is greateer than 80 ")
