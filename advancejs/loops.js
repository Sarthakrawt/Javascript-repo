// iterations 
for(let i =0 ; i< 10 ; i++){
    const elem = i ;
    if(elem == 5){
        console.log(`${elem} is here`);
    }
    console.log(elem);
}
for(let i = 0 ; i <5; i++){
    for(let j  = 0 ; j< 4 ;j++){
        console.log(`inner loop value ${j} and outer loop value ${i}`)
    }
}
const myarray = ['superman', 'batman'];
for(let i = 0 ; i<myarray.length ; i++){
    console.log(myarray[i]);
}

// break and continue 
for(let i = 0 ; i< 10 ; i++){
    if(i == 3){
        console.log(i);
        break;
    }
    console.log(i);// this will not exucute becuase we use break statement 
}
for(let i = 0 ; i< 10 ; i++){
    if(i == 6){

        continue;
    }
    console.log(i);// this will exucute and skip 3 ;
}
