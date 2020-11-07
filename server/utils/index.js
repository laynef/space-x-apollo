const fs = require('fs');
const path = require('path');

const getTypeDef = (filePath) => 
    fs.readFileSync(path.join(__dirname, '..', 'typeDefs', filePath));

module.exports = {
    getTypeDef,
};
