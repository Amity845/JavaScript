//change event on select box
let selectedBox =document.querySelector(selector= '#lang-select');
selectedBox.addEventListener('change', function(){
   let selectedOption =selectedBox.value;
   let langOption =document.querySelector(selector='#lang-msg');
   langOption.innerHTML=selectedOption;
});