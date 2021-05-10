

let sayMsg = (msg, color) => {
    let h1Tag =document.querySelector(selectors = '#msg-1');
    h1Tag.innerHTML =msg;
    h1Tag.style.backgroundColor =color;
    h1Tag.style.padding ='15px';
    h1Tag.style.boxShadow ='0 0 10px black';
};

let gmbutton =document.querySelector(selectors='#gm-btn');
gmbutton.addEventListener(type='click',listener =function(){
    //alert('Gm button clicked');
    sayMsg(msg='Good morning',color='orange');
});

let gabutton =document.querySelector(selectors='#ga-btn');
gabutton.addEventListener(type='click',listener =function(){
    sayMsg(msg = 'Good Afternoon', color='green');
});

let gebutton =document.querySelector(selectors='#ge-btn');
gebutton.addEventListener(type='click',listener =function(){
    sayMsg('Good Evening','red');
});
let gnbutton =document.querySelector(selectors='#gn-btn');
gnbutton.addEventListener(type='click',listener =function(){
    sayMsg('Good Night','blue');
});