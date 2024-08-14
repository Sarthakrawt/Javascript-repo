const userloggedin = true;
const debitcard = false;
if(userloggedin && debitcard){
    console.log("Allow to buy course");
}
else if(userloggedin || debitcard){
    console.log("not allowed to buy course")
}