var currentNumberWrapper= document.getElementById('currentNumber')
var currentNumber = 0;

// currentNumber.addEventListener(currentNumber=10,currentNumberWrapper)

// document.getElementsByName('subtrair').disable = false;
// document.getElementsByName('adicionar').disable = false;

//cria um event listener que escuta mudanças no input
// document.getElementsById("currentNumber").addEventListener("currentNumber", function(event){
    
//     var currentNumberWrapper= document.getElementById('currentNumber')
// if (currentNumberWrapper = 0){
//     document.getElementsByName('subtrair').disable = true;
// }else {
//     document.getElementsByName('subtrair').disable = false;
// }

// if (currentNumberWrapper = 10){
//     document.getElementsByName('adicionar').disable = true;
// }else {
//     document.getElementsByName('adicionar').disable = false;
// }
// }

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// let count = 0;

// const CURRENT_NUMBER = document.getElementById('currentNumber');

// document.getElementsByName('subtrair').disable = true;
// document.getElementsByName('adicionar').disable = true;

// //cria um event listener que escuta mudanças no input
// // document.getElementsById("currentNumber").addEventListener("currentNumber", function(event){
    
// //     var currentNumberWrapper= document.getElementById('currentNumber')



// document.getElementById("currentNumber").addEventListener("currentNumber", function(){
//     var e = count;
// if (e.value = 0){
//     document.getElementsByName('subtrair').disable = true;
// }else {
//     document.getElementsByName('subtrair').disable = false;
// }
// })

// document.getElementById("currentNumber").addEventListener("currentNumber", function(){
//     var e = count;
// if (e.value = 10){
//     document.getElementsByName('adicionar').disable = true;
// }else {
//     document.getElementsByName('adicionar').disable = false;
// }
// })



// function increment() {
// 	count++;
// 	CURRENT_NUMBER.innerHTML = count;
// }



// function decrement() {
// 	count--;
// 	CURRENT_NUMBER.innerHTML = count;
// }

// function test() {
// 	kdowkdpo;
// }