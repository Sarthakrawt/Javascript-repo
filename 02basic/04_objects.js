const tinder = new Object();
const tinderUser ={};
tinderUser.name = "sammy";
tinderUser.id ="sammy123";

console.log((tinderUser));

const regularUser = {
    email: " some@gmail.com",
    fullname: {
        firstname: "John",
        lastname: "Doe"
    }
}
console.log(regularUser.fullname.firstname);

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
const obj2={
    name:"saara",
    age:23
}
const obj3 ={...obj1, ...obj2};
console.log(obj3);


// second way to assgin both the object is by 
//assign{target ,object } where target element contain all the objet values
const obj4 = Object.assign({}, obj1,obj2);
console.log(obj4);


const arr=[
    {name: "sara",
email: "sara@gmail.com"
},
{name: "doe",
email: "doe@gmail.com"
}
]
console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(Object.entries(arr));
console.log(Object.hasOwnProperty('name'));

 

// destructuring of objects
const course = {
    coursename :"js in hindi",
    price: "12423",
    courseInstructor: "hitesh"
}
const {courseInstructor: Instructor} = course;
// console.log(courseInstructor);
//this is callled destructuring
console.log(Instructor);

