//require un buildSchema de graphql
const { buildSchema } = require('graphql');
//require resolvers de resolvers.js
//const resolvers = require('./resolvers');

// Definir el squema de GraphQL 
//schema: es una instancia del GraphQLSchema de GraphQL. 
//Aquí es donde estructuramos la información que vamos a solicitar.

const schema = buildSchema(`
 
 type Query {

    hello: String
    greet(name:String!): String

    champion(name: String!): Champion
		allChampion(name: [String!]):[Champion]
   
  }
  
  type Champion {
		id: ID!
		name: String!
		rarity: String
		faction: String
		rating: Int!
		type: String
		element: String
    health: Int!
		attack: Int!
		defense: Int!
		criticalRate: Int!
		criticalDamage: Int!
		speed: Int!
		resistance: Int!
		accuracy: Int!
	}
	
	
	
  
`);
// (name:String!): String    
// String! si no hay name tirame un error


module.exports = {
    schema,
    /* resolvers */
    /* root ,*/
}
