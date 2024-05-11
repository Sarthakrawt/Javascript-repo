
//advance object methods
// assigning new object using new constructor
const tinder = new Object();
const tinderUser ={};
//add properties
tinderUser.name = "sammy";
tinderUser.id ="sammy123";

console.log((tinderUser));

// object inside an object
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
// using of sperator operators
// obj3 contains both the properties in obj1, obj2
const obj3 ={...obj1, ...obj2};
console.log(obj3);


// second way to assgin both the object is by 
//assign{target ,object } where target element contain all the objet values
const obj4 = Object.assign({}, obj1,obj2);
console.log(obj4);

// arrays is also an object 
// inside which you can also store other object and data types
const arr=[
    {name: "sara",
email: "sara@gmail.com"
},
{name: "doe",
email: "doe@gmail.com"
}
]
// using these method you can print keys , values , entries 
console.log(Object.keys(arr));//index
console.log(Object.values(arr));// name, email and its values
console.log(Object.entries(arr));//index name , email and its values
console.log(Object.hasOwnProperty('name'));// true

 

// destructuring of objects
// destructure the object property 
const course = {
    coursename :"js in hindi",
    price: "12423",
    courseInstructor: "hitesh"
}
// this is destructuring of object
const {courseInstructor: Instructor} = course;
// console.log(courseInstructor);
//this is callled destructuring
console.log(Instructor);

