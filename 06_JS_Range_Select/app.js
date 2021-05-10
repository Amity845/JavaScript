//to format the number using , 
let formatNumber = (number)=> {
   let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
   return result;
}

//Range Select
let range= document.querySelector(selectors= '#range');
let amount= document.querySelector(selectors= '#amount');

range.addEventListener('input', function(){
   let selectedAmount =range.value;
   //amount.innerHTML=selectedAmount;
   amount.innerHTML= formatNumber(selectedAmount);
});