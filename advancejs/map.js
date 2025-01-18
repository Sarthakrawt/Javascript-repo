// const coding = ['js', 'css', 'jsx', 'cssx', 'py']
// const value = coding.forEach((item) =>{
//     console.log(item);
//     return item;
// }
// );
// console.log(value);// for each don't return a value just return undefined

const myNums = [1,2,3,4,5,6,7];
const a = myNums.map(val => val);
 console.log(a) // will give you all the element in the array 
const newNums = myNums.filter((num)=> num > 5);// it will give you number greater than 5
console.log(newNums);

