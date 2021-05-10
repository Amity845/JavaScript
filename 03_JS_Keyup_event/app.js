// keyup event example
let textbox= document.querySelector(selectors = '#username');

textbox.addEventListener(type= 'keyup', listener= function(){
    let textentered= textbox.value;
    let msgelement= document.querySelector(selectors = '#msg');
    msgelement.innerText=textentered;
});

