const { gql } = require('apollo-server');
const { getTypeDef } = require('../utils');

// Type defs
const rockets = getTypeDef('rockets.graphql');


const typeDefs = gql`
    ${rockets}
`;

module.exports = typeDefs;
