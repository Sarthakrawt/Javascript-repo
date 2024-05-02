// Dates and its methods 

let myDate = new Date();
console.log(myDate);// it will give you date and time but it is not in readable format
console.log(myDate.toString());// give you the String value in IS indian standard format
console.log(myDate.toISOString());// just the type is converted into string 
 console.log(myDate.toTimeString());//show you time 
console.log(myDate.toLocaleString());// date and time 
console.log(myDate.toLocaleDateString());// date 
console.log(myDate.getDate());// only give you the date 
console.log(myDate.getFullYear())//year
console.log(myDate.getTime());// time in milliseconds 

let mycreatedDate = new Date(2023, 0, 23)// you can also make your own date 
console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);// it will give you time in miliseconds            

 Date.toLocaleString('default',{
    weekday: "long",
 });