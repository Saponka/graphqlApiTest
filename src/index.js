const express = require('express') ;
//import herramienta express-graphql para traerme una function para porder integrar graphql en express
const { graphqlHTTP } = require('express-graphql');
//import todo el modulo
const  {schema} = require('./schema'); 
const { resolvers } = require('./resolvers');


const app = express();
const port = 3000;
/////////

//schema//
//permite definir que puedo consultar
//const schema = {};


//middleware de express cuando entre a una ruta va a ser procesada por una herramienta de graphql
//utiliza esta ruta del navegador me devuelve una herramienta: graphiql
//test API
app.use('/graphql', graphqlHTTP({
    graphiql:true,
    rootValue: resolvers,/* root */
    schema:schema
}))


//////Rutas/////
app.get('/',(req,res)=>{
    
    res.json({message:'Hello World'})
});

///listenport////
app.listen(port,()=> {
    console.log(`Servidor corriendo en el port:${port}`)
});
app.on('error',(error)=>{
    console.log(`Error en el Server :${error}`);
})