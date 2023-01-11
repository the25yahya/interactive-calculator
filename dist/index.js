//variables

//input
const input = document.querySelector('.input');

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
   const equals = document.getElementById('equals');
   console.log(equals);
   const minus = document.getElementById('minus');
   const plus = document.getElementById('plus');
   const del = document.getElementById('delete');
   const times = document.getElementById('times');
   const division = document.getElementById('division');
   const c = document.getElementById('c');
   const root = document.getElementById('root');
   const fac = document.getElementById('fac');
   const log = document.getElementById('log');
   const exp = document.getElementById('exp');



   //event listeners

c.addEventListener('click',function(){
    input.innerText=''
})


num1.addEventListener('click',function(){
    input.innerText += 1
})
num2.addEventListener('click',function(){
    input.innerText += 2
})
 
num3.addEventListener('click',function(){
    input.innerText += 3
})
num4.addEventListener('click',function(){
    input.innerText += 4
})
num5.addEventListener('click',function(){
    input.innerText += 5
})            
num6.addEventListener('click',function(){
    input.innerText += 6
})
num7.addEventListener('click',function(){
    input.innerText += 7
})
num8.addEventListener('click',function(){
    input.innerText += 8
})
num9.addEventListener('click',function(){
    input.innerText += 9
})
num0.addEventListener('click',function(){
    input.innerText += 0
})
plus.addEventListener('click',function(){
    input.innerText += '+'
})
minus.addEventListener('click',function(){
    input.innerText += '-'
})
fac.addEventListener('click',function(){
    input.innerText+='!'
})
times.addEventListener('click',function(){
    input.innerText += '*'
})
division.addEventListener('click',function(){
    input.innerText += '/'
})
equals.addEventListener('click',function(){
    try{
        const value = input.innerText;
        const result = eval(value);
        input.innerText = result
    } catch (error) {
        input.classList.add("error");
        setTimeout(() => {
          input.classList.remove("error");
        }, 2000);
      }
    });

del.addEventListener('click',function(){
    if (input.innerText.length > 0) {
        input.innerText = input.innerText.substring(0, input.innerText.length - 1);
    }
})