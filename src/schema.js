//importamos desde graphql-tools la herramienta makeExecutableSchema
//crea un  new schema y une nuestros resolvers y los typeDefs
const { buildSchema } = require('graphql');
//import { makeExecutableSchema } from 'graphql-tools';
//import resolvers de resolvers.js
const resolvers = require('./resolvers');

// Definir el esquema GraphQL
const schema = buildSchema(`
 
 type Query {

    hello: String
    greet(name:String!): String
  }
   
  
`);
// (name:String!): String    
// ! si no hay name tirame un error


/* let root = {
    hello: () => {
      return 'Hello world!';
    },
  }; */
module.exports = {
    schema,
    resolvers
    /* root ,*/
}
