// print sid
console.log('sid');

// print age
let age = 25;
console.log(age);

//print salary
const salary = 20000;
console.log(salary);

//Datatypes
const name = 'sidhu';

//Object datatype
const person ={
    firstName: 'radhi',
    lastName: 'sid',
}
console.log(person.firstName);

const primeNumber= [1, 3, 5]
console.log(primeNumber[2]);

//Operators
const isEven = 10 % 2 == 0 ? true : false
console.log(!isEven)

//Implicit & Explicit
console.log('5' + '5')
console.log(Number('5'))
console.log(Boolean(""))

//Equality
const car = 5
const car2 = '5'
console.log(car == car2)
console.log(car === car2)

//conditional statement
const num = -5
if (num > 0){
    console.log('number is positive')
}
else{
    console.log('number is negative')
}

const animal = 0

switch(animal) {
    case 'tiger':
        console.log('animal is tiger')
        break
    case 'elephant':
        console.log('animal is elephant')
        break
    case 'monkey':
        console.log('animal is monkey')
        break
    default:
        console.log('not a animal')
        break
}

//Functions
function house(whose){
    console.log('My house ' + whose)
}

house("Radhi")
house('Aarudh')

//Scope

const myNa ='aaru'
const myNew = 10

if (true){
    const myNa= 'aarudhh'
    console.log(myNa)
    console.log(myNew)
}

function testNew(){
    const myNew= 1
    console.log(myNew)

}

testNew()