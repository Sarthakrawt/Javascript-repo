const coding = ['js','css','ruby','swift','cpp'];
coding.forEach((val)=>{
  console.log(val);
})
coding.forEach((item , index , arr) => {
  console.log(item , index , arr);}
);
const myCoding = [ 
  {
  languageName : "javascript",
  languageFileName: 'js'
},
  {
  languageName : "python",
  languageFileName: 'py'
},
  {
  languageName : "java",
  languageFileName: 'java'
}
]
myCoding.forEach((item) => {
  console.log(item.languageFileName)
})