const fileSystem = require('fs');

exports.save = (people,cb)=>{
    setTimeout(()=>{
    //The default one is async
    fileSystem.writeFile('./data.json',JSON.stringify(people),cb);
    },5000);
}
    
exports.load = () => {
    return JSON.parse(fileSystem.readFile('./data.json','utf8'));
}