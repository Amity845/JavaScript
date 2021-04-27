//if-else
let age = 10; 
if(age<10){
    console.log('child');
}
else if(age>=10 && age <=18){
    console.log('Early adult');
}
else if(age>18){
    console.log("adult");
}

// switch statement

let day =new Date().getDay();
let today='';
switch(day){
    case 0 :
        today="Sunday";
        break;
    case 1 :
        today="Monday";
        break;
    case 2 :
        today="Thuesday";
        break;
    case 3 :
        today="Wednesday";
        break;
    case 4 :
        today="Thurday";
        break;
    case 5 :
        today="Friday";
        break;
    case 6 :
        today="Saturday";
        break;
}
console.log("Today is "+today);

//for loop
for(let i=0; i<10; i++){
    console.log(i);
}
let out='';
for(let i=0; i<10; i++){
    out +=i;
}
console.log(out);

//Star Pattern
result='';
for(let i=1; i<5; i++){
    for(let j=1; j<=i; j++){
        result+='*'
    }
    result+='\n';
}
console.log(result);

//number pattern
for(let i=1; i<5; i++){
    for(let j=1; j<=i; j++){
        result+=j;
    }
    result+='\n';
}
console.log(result);

for(let i=1; i<5; i++){
    for(let j=1; j<=i; j++){
        result+=i;
    }
    result+='\n';
}
console.log(result);

for(let i=5; i>0; i--){
    for(let j=1; j<=i; j++){
        result+=i;
    }
    result+='\n';
}
console.log(result);

for(let i=5; i>0; i--){
    for(let j=1; j<=i; j++){
        result+=j;
    }
    result+='\n';
}
console.log(result);


//While loop 
console.log("------While loop------");
let i=1;
result='';
while(i<6){
    let j=1;
    while(j<i){
        result+=j;
        j++;
    }
    result+='\n';
    i++;
}
console.log(result);

//Do While loop 
console.log("------Do While loop------");
i=1;
result='';
do{
    let j=1;
    do{
        result+=j;
        j++;
    }while(j<=i)
    result+='\n';
    i++;
}while(i<6)
console.log(result);