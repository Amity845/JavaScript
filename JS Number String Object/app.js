
//max
console.log(Number.MAX_SAFE_INTEGER);
//Min
console.log(Number.MIN_SAFE_INTEGER);

//Negative Infinity
console.log(Number.NEGATIVE_INFINITY);

//Parse Int
let str= '100';
let num=Number.parseInt(str);
console.log(`${typeof str} ==> ${typeof num}`);

//toString 
let num1 =100;
let str1= num1.toString();

//tofixed
let amount =520;
console.log(amount.toFixed(fractionDigits = 2));

//String Related Operation 
let msg = new String(value = 'Good Morning');
console.log(msg.length);

//lower case
console.log(msg.toUpperCase());

//Substring 
console.log(msg.substring(start =5, end=msg.length));

console.log(msg.substring(from =0, length=4));

//charAt
console.log(msg.charAt(5));

//charCodeAT()
console.log(msg.charCodeAt(5));

//JSON Object
/*
String => Object :parse()
OBject => String : Stringify()
*/

let student ={
    name : 'Amit',
    age : 24,
    course : 'CSE',
    college : 'NKOCET'
};
console.log(student);

let studentstr =JSON.stringify(student);
console.log(studentstr);


//String to Object
let newStudent = JSON.parse(studentstr);
console.log(newStudent);

