const rockets = require('./rockets');
const launches = require('./launches');


module.exports = {
    Query: {
        ...rockets,
        ...launches,
    }
}