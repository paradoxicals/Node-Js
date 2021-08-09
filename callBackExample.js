const fs = require('fs');

//const firstText =  fs.readFile('./files/1.txt','utf8');
//const secondText =  fs.readFile('./files/2.txt','utf8');
//const thirdText =  fs.readFile('./files/3.txt','utf8');

const files = [1, 2, 3].map(number => `./files/${number}.txt`)
                       .map(fileName => fs.readFileSync(fileName, 'utf8'));

console.log(files);


fs.readFile('./files/1.txt','utf8',(err, contents) => {
    console.log(contents);
    fs.readFile('./files/2.txt','utf8',(err, contents) => console.log(contents));
});

fs.readFile('./files/3.txt','utf8',(err, contents) => console.log(contents));