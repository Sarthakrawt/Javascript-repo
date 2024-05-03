// array

// you can put every data type in an array 
const array = [0,4,'histesh',5,6];
// array is resizable 
// to check every element in array you can use array[index]
console.log(array[0]);

// array also have some methods because it is an object
const hero = ['shaktiman' , 'spiderman']
// push and pop method used for add and remove a value form end /last;
// hero.push('ironman');
// hero.push('ironman');
//  hero.pop();


// shift and unshift method used for add and remove a value form first/front
hero.unshift(9);// push the value in front
 hero.shift();
console.log(hero);
const arr = [32,4,5,6]
const newarr = arr.join();
// change the array into string 
console.log(newarr);;

//slice and splice
const arr1 = [2,3,4,5,6];
const myarr1 = arr1.slice(0,3);
console.log(`${myarr1} orginal array : ${arr1}`);
// slice just take the copy of the array

// splice
const arr2 = [2,3,4,5,6];
const myarr2 = arr2.splice(1,3);
console.log(`${myarr2} orginal array : ${arr2}`);
// splice will cut the array element from original array
