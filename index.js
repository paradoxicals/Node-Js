const red = require('ansi-red');
const Person = require('./people');
const Database = require('./database');

console.log("Hello world from Turkey");
//D:

const add = (num1 , num2) => num1 + num2;

console.log(add (3,5));

console.log(red("The End"));



const serkan = new Person('Serkan','29');
const diego = new Person('Diego',30);

const learners = [serkan, diego];

Database.save(learners);

const loadedFile = Database.load();

console.log(loadedFile[0]);