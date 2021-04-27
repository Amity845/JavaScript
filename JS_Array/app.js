let numbers =[10, 20, 30];
console.log(numbers);
console.log(numbers[2]);

//non exisiting
console.log(numbers[4]);

//Iteration of Array element
//for loop

let colors=['white', 'black', 'yellow', 'red']
let result ='';
for(let i=0; i<colors.length; i++){
    result+='${colors[i]}';
}
console.log(result);

//for-in(index will print)
for(let a in colors){
    console.log(a);
}

//for-of (element will print)
for(let a of colors){
    console.log(a);
}

//for-eacch
result='';
colors.forEach(function(color){
    result+='S{colors}';
});

//for with arrow funtion from ES6
result='';
colors.forEach(color => result+='S{colors}');
console.log(result);



 
//Array of Object
let employees = [
    {
        id: 1,
        Name : 'John',
        age: 40,
        designation:'Software engineer',
        isActive:true
    },
    {
        id: 2,
        Name : 'Rajesh',
        age: 38,
        designation:'Software engineer',
        isActive: false
    },
    {
        id: 3,
        Name : 'Swapna',
        age: 46,
        designation:'engineer',
        isActive: false
    },
    {
        id: 4,
        Name : 'Amit',
        age: 34,
        designation:'engineer',
        isActive: true
    }
];

console.log(employees);

console.log(employees[0]);

console.log(employees.Name)


//iteration of array of object 
result ='';
for(let employee of employees){
    result += `${employee.Name} `;
}
console.log(result);

//Filter the employees  age >40
let filteremp =[];
for(let employee of employees){
    if(employee.age>=40){
        filteremp.push(employee);
    }
}
console.log(filteremp);
