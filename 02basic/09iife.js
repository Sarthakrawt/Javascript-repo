// Immediately Invoked Function Expression(IIfE)
var b  = 12;
(function chai(){
    
    console.log('DB COnnected'+b)
})();
//it will directly invoke the function 
// it used becuase global scope polution polute the function somestime
(function aurcode(){
   console.log("run this function") 
   console.log(a);
}
)();

((name)=>{
    console.log("arrowfunction",name) 
})("hitesh")