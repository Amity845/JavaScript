//1. Find the number of 'o' in the given String
let msg = 'Good Morning';

let findZeros = (str) => {
    let count =0;
    for(let i=0; i<=str.length-1; i++){
        let char =str.charAt(i);
        if(char === 'o' || char === '0'){
            count++;
        }
    }
    return count;
};

console.log(`The zeros is Strings is : ${findZeros(msg)}`);

//2. Reverse String

msg = 'Good Morning';
let revString =(str) => {
    let tempStr =""
    for(let i=str.length-1; i>=0; i--){
        tempStr +=str.charAt(i);
    }
    return tempStr;

}

console.log(`Reverse msg of String : ${revString(msg)}`);

//Check string is Palindrome or not
msg = 'AmimA';
let checkPalindrome =(str) => {
    if(str===revString(str)){
        return true;
    }
    else
        return false;

}

console.log(`Given String is Palindrome : ${checkPalindrome(msg)}`);

//Pattern Display 1
msg = 'Good Morning';
let pattern =(msg) => {
   let count =1;
   let tempStr =''; 
   for(let i=1; i<msg.length+1; i++){
       tempStr += `${msg.substring(from = 0, i)} \n`;
       
       // console.log(msg.substring(0, count))
       //count++;
    }
    return tempStr;
}
//pattern();
console.log(pattern(msg));

//Pattern Display 1
/*
Good
 ood
  od
   d
*/
let pattern1 =(msg) => {
    let count =1;
    tempStr =''; 
    for(let i=0; i<msg.length-1; i++){

        tempStr += `${addSpace(i)}${msg.substring(i)} \n`;
     }
     return tempStr;
 }

 let addSpace = (number) => {
     let tempSpace ='';
     for(let i=0; i<number; i++){
        tempSpace += ' ';
     }
     return tempSpace
 }

 console.log(pattern1(msg));

 //Pattern Display
 /*
 Good
 Goo
 Go
 G
 */
 let pattern2 =(msg) => {
    tempStr =''; 
    for(let i=msg.length-1; i>=0; i--){

        tempStr += `${msg.substring(from = 0, i)} \n`;
     }
     return tempStr;
 }
 
 console.log(pattern2(msg));

 //Pattern Display
 /*
     d
    od
   ood
  Good  
 */

  let pattern3 =(msg) => {
   
    tempStr =''; 
    for(let i=msg.length; i>=1; i--){

        tempStr += `${addSpace(i)}${msg.substring(i)} \n`;
     }
     return tempStr;
 }
 console.log(pattern3(msg));