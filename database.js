const fileSystem = require('fs');

exports.save = (people)=>{
    fileSystem.writeFileSync('./data.json',JSON.stringify(people));
}
    
exports.load = () => {
    return JSON.parse(fileSystem.readFileSync('./data.json','utf8'));
}