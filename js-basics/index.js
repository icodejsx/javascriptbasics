//variable in js we us let or var

let x = 'kenny';
console.log(x);

//constant
const intrestRate = 240;
console.log(intrestRate);

// type of value you can sign to a variable
let name = 'kenny'; //string
let age = 20; // 20 years old number
let isApproved = false; //boolean literal
let firstName = undefined; //
let selectedColor = null // 

//java dynamic languages

// object array Functions
// object


let person ={
    name: 'John',
    lastName: 'kenny',
    age: 20,
};
console.log(person);

// ways to access the object 1. using doth
person.name = 'kenzy';
//bracket notation

// arryas squre bracket is used to arrays is a dta structure that we used to represntes a list of items 

let selectedColors = ['rad', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

// functions is a statement that perform a task or a keywork 
 function greet (knny){
    
    console.log('hello' + knny)
 }
 greet('keny'); //kenny is an argument in a function.. afunction can also have mulitple parametter  

// type of functions
// performing atask
//  callculaing a value 
function squre(number){
    return number * number * number
}
console.log(squre(4));

// operators 
// aritimatic , assignment , logic,comparison, bitwise operator

//  aritimatic
 let b = 10;
 let y = 20

console.log(b+ y);
// console.log(b - y);
// console.log(b * y);
// console.log(b / y);
// console.log(b % y); 
// console.log(b ** y);

// increment (++)
console.log(b++);
console.log(b);
//decrement
console.log(--b);

// asginment operator
 let n = 10;
 n = n * 3;
 console.log(n);

// comparsion operator
 console.log(n > 70)
 console.log(n < 70);
 console.log(n >= 70);
 console.log(n <= 70);

 console.log(n === 30);
 console.log(n !== 70);

//  conditional operators
 let points = 90;
 let type = points > 100 ? 'gold': 'silver'; 
 console.log(points);  

//  logical operators 3 types 
// logical AND (&&)it returns true if both operands are true
console.log(true && false); 

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// logical Or (||)it returns true if both operands are true


let elgibleForLoan = highIncome ||goodCreditScore;
console.log(elgibleForLoan);

// logical not (!)
let applicationRefused = !eligibleForLoan; 
console.log(applicationRefused);

// exercises

let a ='red';
let c ='green';

let d = a;
a = c;
c = d;

console.log(a);
console.log(c);

// if and else statment

// if (contdition){
//     statement
// }
// else if (anotherCondition){
//     statement
// }
// else if (anotherCondition){
//     statement
// }
// else
//     stament 

let hour = 11;

if (hour >=6 && hour <12) 
    console.log('Good Morning');

else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon');
else if (hour >=18 && hour < 24)
    console.log('Good Evening');
else 
    console.log('time INput is not correct')

//switch and case

let role = 'guest';

switch(role){
    case 'guest':
    console.log('guest user')
    break;

    case 'moderator':
        console.log('moderator uster');
    break;
     
    default:        
     console.log('Unknow User'); 
}

if(role === 'guest')
    console.log('Guest User')

else if(role === 'moderator')
    console.log("moderator User")
else 
    console.log('Unknow User')

//loops fro loop while, do..while loop for in and for ou loop

// // for(initialExpres; condition){
//     statment
// }

for (let i = 0; i <= 5; i++){
    if(i % 2 !== 0) console.log(i)
}

// let i = 0;
// while (i <=5){
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

//do while loop

// let i = 9;
//  do {
//     if(i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

//for inloop
// const person ={
//     name: 'kenny',
//     age: 30
// };

// for (let ky of person)
//     console.log(ky);
  
 let i =0;
 while (i <=10){
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i)
    i++;
 } 

 function max (a,b){
    if (a > b) return a;
    else return
 }














