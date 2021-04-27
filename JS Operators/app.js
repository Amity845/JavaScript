/*

Javascript Opeartors

->Assignment Operators
->Arithmetic Operators
->Short Hand Math Operators
->Conditional Opearators
->Unary Opeartor
->Logical Operator
->Ternary Opeartor
->Equality Operator
*/

//Assignment
let n=1;
console.log(n);

//Arithmatic 
let n1=10, n2=20;
let sum=n1+n2; // also like %,+,-,*,/
console.log(sum);

//Shot hand Math;
let a=20;
let b=30;
let add=0;
add+=a;//add=add+a;
let sub=0
sub-=b;//sub=sub-b;
console.log(add);
console.log(sub);

//Conditional Opearator
let age=19;
if(age>=18){
    console.log("Eligible");
}
else{
    console.log("not eligible");
}

//Unary Operator : ++, --;
a++;
b--;
console.log(a);
console.log(b);

//Logical Operator : && , ||, ^
/*
ADD => T && T -> T
OR =>F||F ->F
XOR => T^F, F^T->
*/

let money=true;
let happy=false;
if(money && happy){
    console.log("Happyb life");
}else{
    console.log("wait");
}

//Turnary Opearator
let marks=80;
let msg= "";
(marks<80 ? msg="You have less than 80" : msg= "More than 80 marks");
console.log(msg);

//Quality Operator
a=10;
b='10';
if(a==b){
    console.log("A and B are equal");
}
else{
    console.log("Both are not equal");
}
if(a===b){
    console.log("A and B are equal");
}
else{
    console.log("Both are not equal");
}
