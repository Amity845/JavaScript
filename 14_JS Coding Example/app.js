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