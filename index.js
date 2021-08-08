const red = require('ansi-red');
const Person = require('./person');
const Database = require('./database');

console.log("Hello world from Turkey");


const add = (num1 , num2) => num1 + num2;

console.log(add (3,5));

console.log(red("The End"));



const serkan = new Person('Serkan','29');
const diego = new Person('Diego',30);

const learners = [serkan, diego];

Database.save(learners,(err)=>{
    console.log(err);
});

const loadedPersons = Database.load();

//Casting as a object
const firstPerson = new Person(loadedPersons[0].name, loadedPersons[0].age);

const secondPerson = Person.create(loadedPersons[1]);

firstPerson.sayName();
secondPerson.sayName();

//Use map function on objects
//Get an array, apply the logic and return an array
const convertedPersons = loadedPersons.map(Person.create);

convertedPersons.forEach(element => {
    element.sayName();
});