//Document

console.log(document);


//head
console.log(document.head);

//body
console.log(document.body);

//nav bar
console.log(document.querySelector(selectors='nav'));

//nav inside anchor tag
let anchortag =  document.querySelector(selectors='nav a');
console.log(anchortag);

//anchor tag test
let text = anchortag.innerHTML;
console.log(text);

// to change text in anchor tag
anchortag.innerHTML='DOM intro modified';

// to change title
document.title ="Title chnged by JS  : JS DOM Intro"

let h1tag =  document.querySelector(selectors = 'h1');
h1tag.innerHTML="Good evening";
h1tag.style.backgroundColor="blue";
h1tag.style.color='white';
h1tag.style.textAlign='center';
h1tag.style.padding='15px';
h1tag.style.fontSize='45px';
h1tag.style.boxShadow='0 0 10px black';