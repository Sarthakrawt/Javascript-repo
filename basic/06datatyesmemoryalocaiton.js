// primative datatype
/* 
Number , null , boolean , string , undefined ,symbol, bigint
*/
const id = Symbol('123');
const id2 = Symbol('123');
console.log(typeof id2)
console.log(id === id2);// give false 
const bigintvar= 124555323452452343n;
console.log(typeof bigintvar);

// non= primitive(reference type)
// object , array , function

object = {
    name: 'sam',
    age: 23 ,
    fun: function(){
        console.log(this.name)
    }};
 
    arr = [1,'2' , "helo " ];
    
/****************************************************************************/
// memory allocaiton
// primitive (stack), heap(reference(non-primitive))
//let's check for primitive
let val = "sarthakname";
let val2 = val;
console.log(`val: ${val} val2: ${val2}`);
console.log(val === val2);
val2 ="ayushname";
console.log(`val: ${val} val2: ${val2}`);

// in upper statment where we assign the copy of the val to val2 
// which we further change and what we see that the val value not changed and val2 value is changed 
// it is becuase when we assign val2 = val it contains a copy of that value in stack
 


// let check another case for non primitive
let obj = {
    acc : "sar",
    mail: "sar@gmail"
}
let obj2 = obj;
obj2.mail ="sart1243@gmial.com";
console.log(obj.mail);//"sart1243@gmial.com
// why becuase when we assign obj and it properties the obj is in stack memory 
// but the values are in heap memory 
//so when we assign a copy of the object we are giving the reference to the variable
// so when we change the value using obje2 then it will automatically change the values in heap memory

