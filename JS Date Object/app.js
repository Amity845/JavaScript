//Date Object
let date = new Date();
console.log(date);

//proper date
let currentDate =new Date().toLocaleDateString();
console.log(currentDate);

//Proper time
let currentTime =new Date().toLocaleTimeString();
console.log(currentTime);

/*
//USA DAte 
let options = {timeZone = 'America/New_York'};
let usaDate = new Date().toLocaleDateString(locales = 'en-US', options);
console.log(usaDate);

//USA Time
options = {timeZone = 'America/New_York'};
let usaDate = new Date().toLocaleDateString(locales = 'en-US', options);
console.log(usaDate);

*/

let today = new Date().getDay();
console.log(today);

let month = new Date().getMonth();
console.log(month);

let c_date =new Date().getDate();
let c_month =new Date().getMonth();
let c_year = new Date().getFullYear();

console.log(`${c_date}-${c_month}-${c_year}`);