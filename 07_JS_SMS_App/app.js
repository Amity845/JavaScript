let textArea= document.querySelector(selector='#text-area');
let charCount= document.querySelector(selector='#char-count');

textArea.addEventListener('keyup', function(){
let textLength= textArea.value.length;
charCount.innerHTML=textLength;
});