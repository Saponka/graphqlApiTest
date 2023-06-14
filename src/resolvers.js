//creamos funciones
//resolvers nos dicen que vamos a hacer cuando se consulte algo
//let root ={}
 const resolvers = {
    
  
    hello: () => {
        return 'Hello world Mother Fucker!';
      },

     greet(root){
      console.log(root);
      console.log(root.name);
    
       return `Hola ${root.name}`
     }

    

 };
module.exports = {
    resolvers
}