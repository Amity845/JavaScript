let EmpName = 'Amit';
let EmpNum= 63;
let EmpAddress = "Solapur";

let Employee ={
    name :"Amit",
    number: 63,
    address : "Solapur"
};

console.log(Employee);

console.log(Employee.name);

//non existing property
console.log(Employee.office);

//access by [] notation
console.log(Employee['number']);


//For Dynamic properties dot, [] notation

let office="address";

console.log(Employee.office);

console.log(Employee[office]);

//nested object
let student={
    name:'Allu Arjun',
    age: 37,
    address:{
        state: "telanga state",
        city : "Hyderabad"
    }
}

console.log(student);
console.log(student.address);
console.log(student.address.city);

//CRUD Operations with object

let laptop ={};
laptop.company='HP';
laptop.price=45000;
laptop.ram='8GB';

console.log(laptop);
console.log(laptop.price);
delete laptop.price;

console.log(laptop);