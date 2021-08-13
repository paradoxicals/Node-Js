const fs = require('fs');

//const firstText =  fs.readFile('./files/1.txt','utf8');
//const secondText =  fs.readFile('./files/2.txt','utf8');
//const thirdText =  fs.readFile('./files/3.txt','utf8');

const files = [1, 2, 3].map(number => `./files/${number}.txt`);
                      // .map(fileName => fs.readFileSync(fileName, 'utf8'));


// fs.readFile('./files/1.txt','utf8',(err, contents) => {
//     console.log(contents);
//     fs.readFile('./files/2.txt','utf8',(err, contents) => console.log(contents));
//  });

// // fs.readFile('./files/3.txt','utf8',(err, contents) => console.log(contents));



const readFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if(err) return reject(err);
            resolve(contents);
        });
    });
}

// readFile(files[0])
//     .then(() => readFile(files[1]))
//     .then(() => readFile(files[2]))
//     .then(console.log("It's finished"));

const main = async () => {

    const contents1 = await readFile(files[0]);
    console.log(contents1);
    const contents2 = await readFile(files[1]);
    console.log(contents2);
    const contents3 = await readFile(files[2]);
    console.log(contents3);
    console.log("It's finished")
}

main();
