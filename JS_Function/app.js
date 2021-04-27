//ISolated funtion
function greetings(){
    console.log('Good night Sweet dream');
}

let greetingsMsg = function greetings(){
    console.log('Good morning');
}

greetings();
greetingsMsg();


//funtion with parameter but doesnot return any parameter
let printNums =function (first, last){
    let result='';
    for(let i=first; i<=last; i++){
        result += `${i} `;
    }
    console.log(result);
}

printNums(1,20);
printNums();

let twoSum =function (a, b){
    let result=a+b;
    return result;
};

let output = twoSum(20, 45);
console.log(output);


//Funtion with an object as parameter
let printObj = function(obj){
    console.log(obj);
}
//printObj(obj : {Name : 'amit', age:20});

let mobile ={
    brand : 'Redmi',
    color : 'blue',
    price : 15000
};
printObj(mobile);

//funtion with an array as a parameter

let printArr =function(array){
    let result='';
    for(let index in array){
        result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
    }
    console.log(result);
}

//printArr(array:[10,20,30]);
let arr=[10,20,30,40];
printArr(arr);


//funtion inside an object
let student ={
    fName : 'Amit',
    lName : 'Silam',
    fullName : function(){
        return `${this.fName} ${this.lName}`;
    }
};

console.log(student.fullName());


//Nested funtion
let outerFun =function(){
    //innerFun();   --> will through error 
    console.log('I am outer function');
    let innerFun =function(){
        console.log('I am inner function')
    }
    innerFun();
};

outerFun();


//Twisted Function
let twistedFun = function(){
    let name ='John';
    let printStudent = function(){
        let student ={
            name : 'Amit',
            age : 24,
            course : 'CSE'
        };
        return student;
    };
    return printStudent;
}

//console.log(twistedFun.printStudent.student.name);
let innerfun = twistedFun();
let studentObj = innerfun();
console.log(studentObj.name);



//chicken_curry with funtion
let glassbowl=function(rawchicken, masala){
    let marinatedChicken = `Mixing : (${rawchicken} + ${masala})`;
    return marinatedChicken;
}

let cookingbowl =function(marinatedChicken, water){
    //cooking Logic
    let cookedChicken = `COOKING : ( ${marinatedChicken} + ${water})`;
    return cookedChicken;
}
let eatingPlate =function(cookedChicken, rice){
    let eatingChicken= `EATING : (${cookedChicken} + ${rice})`;
    console.log(eatingChicken);
}

let rawChicken='1kg chicken';
let masala = '10 gm';
let marinatedChicken= glassbowl(rawChicken, masala);

let water = '1 ltr water';
let cookedChicken= cookingbowl(marinatedChicken, water);

let rice = '1 kg';
eatingPlate(cookedChicken, rice);