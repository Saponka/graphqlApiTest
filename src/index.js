const express = require('express') ;
//import herramienta express-graphql para traerme una function para porder integrar graphql en express
const { graphqlHTTP } = require('express-graphql');
const {schema} = require('./schema'); 
const {root} = require('./resolvers');
//Db
const connection = require('./DB/connection')
//require createChampion
const createChampion = require('./DB/controllers/index')
const app = express();

//middleware de express cuando entre a una ruta va a ser procesada por una herramienta de graphql
//utiliza esta ruta del navegador me devuelve una herramienta: graphiql



app.use('/graphql', graphqlHTTP({
    graphiql:true,
    rootValue:  root ,/* resolvers */
    //rootValue: es una lista con todos nuestros schemas que van a estar disponibles para ser consultados.
    schema:schema
}))

//////Rutas/////

app.get('/',(req,res)=>{
    
    res.json({message:'Hello World'})
});

//ruta crear campeon
app.post('/postNewChampion', async (req, res) => {
    const {name,rarity,faction,rating, type, element,health,attack,defense,criticalRate,criticalDamage,speed,resistance,accuracy} = req.query;
    try {
        await createChampion(name,rarity,faction,rating, type, element,health,attack,defense,criticalRate,criticalDamage,speed,resistance,accuracy);
        res.status(200).send('A New Champion Created ');
    } catch (error) {
        res.status(400).send(error);
    }
});

//conection Db y listen app. port on
const PORT = process.env.PORT || 3001;
const dataBaseName = "GraphQL"

connection.then(() => {
  console.log(`database ${dataBaseName} connected`);
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el port:${PORT}`);
  });

  app.on('error', (e) => {
    console.log(` Server Error is ${e}`);
  });
});
///listenport////
/* app.listen(port,()=> {
    console.log(`Servidor corriendo en el port:${port}`)
});
app.on('error',(error)=>{
    console.log(`Error en el Server :${error}`);
}) */