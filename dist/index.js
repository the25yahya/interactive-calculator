//variables

//input
const input = document.querySelector('.input');
let value = input.innerHTML


/////////////////////////////////
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');
//////////////////////////////////
   //operations variables
   const equales = document.getAnimations('equales');
   const minus = document.getElementsByClassName('minus');
   const plus = document.getElementsByClassName('plus');
   const del = document.getElementById('delete');
   const times = document.getElementById('times');
   const division = document.getElementById('division');
   const c = document.getElementById('c');
   const root = document.getElementById('root');
   const fac = document.getElementById('fac');
   const log = document.getElementById('log');
   const exp = document.getElementById('exp');



   //event listeners
num1.addEventListener('click',function(){
    input.innerHTML += 1
})
num2.addEventListener('click',function(){
    input.innerHTML += 2
})
 
num3.addEventListener('click',function(){
    input.innerHTML += 3
})
num4.addEventListener('click',function(){
    input.innerHTML += 4
})
num5.addEventListener('click',function(){
    input.innerHTML += 5
})            
num6.addEventListener('click',function(){
    input.innerHTML += 6
})
num7.addEventListener('click',function(){
    input.innerHTML += 7
})
num8.addEventListener('click',function(){
    input.innerHTML += 8
})
num9.addEventListener('click',function(){
    input.innerHTML += 9
})
num0.addEventListener('click',function(){
    input.innerHTML += 0
})