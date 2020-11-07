const { gql } = require('apollo-server');
const { getTypeDef } = require('../utils');

// Type defs
const launches = getTypeDef('launches.graphql');
const rockets = getTypeDef('rockets.graphql');
const query = getTypeDef('query.graphql');


const typeDefs = gql`
    ${rockets}
    ${launches}
    ${query}
`;

module.exports = typeDefs;
