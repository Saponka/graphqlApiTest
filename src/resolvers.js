//creamos funciones
//resolvers nos dicen que vamos a hacer cuando se consulte algo
//let root ={}
const {getChampion,getAllChampions}= require('../src/DB/controllers/index')

 const root = {
    
    hello: () => {
        return 'Hello world Mother Fucker!';
      },

     greet(root){
      console.log(root);
      console.log(root.name);
    
       return `Hola ${root.name}`
     },
      
     champion: getChampion,
     allChampion: getAllChampions,
    

 };

module.exports = {
    root
}