// // document.querySelector('#first').onclick= ()=>{
// //     console.log('hellowwewe');
// // } but it's not the optimal way it the old way 

// // there other way like attachEvent()
// //jQuery - on 
// const button = document.getElementById('first');
// button.addEventListener('click', (e)=>{
//    console.log(`hello`);
// }, true)
// const button2 = document.getElementById('second');
// button.addEventListener('click', (e)=>{
//    console.log(`hello`);
// }, false)
// //flase which is defalt value is the event prapogation
// //which is like a bubbling

// // event (e) study more about its feature

// //type, timestamp, defaultPrevented
// // target , toElement , srcElement , currentTarget
// // clientX, clientY , screenX, screenY
// //altkey ,ctrlkey ,shiftkey , keyCode


// //preventDefault 
// document.querySelector('#google').addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google clicked');
// },false)

document.querySelector('button').addEventListener('click',(e)=>{
    // parentNode is parent of that node 
    // tagName is simple the tage name write in capital letter if you want to compare 
    console.log(e.target.tagName);
    let removeit = e.target;
    removeit.remove();
})