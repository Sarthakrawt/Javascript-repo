// chaining using high order function 
let Nums = [1,4,5,23,434,54];
let newNums = Nums.map((num)=> num+10)
                  .map((num)=> num+1)
                  .filter((num)=> num>=20);
console.log(newNums);

//reduce 
let value = [1,2,4,5];
let newval = value.reduce((accu, curval) =>{
console.log(accu)
return  accu+curval}, 0);
console.log(newval);
