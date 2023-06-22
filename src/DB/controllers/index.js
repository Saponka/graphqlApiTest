const Champion = require("../model/championModel");


const createChampion = async (name, rarity,faction,rating, type, element,health,attack,defense,criticalRate,criticalDamage,speed,resistance,accuracy)=>{

    try {
        return await Champion.create({name, rarity,faction,rating, type, element,health,attack,defense,criticalRate,criticalDamage,speed,resistance,accuracy})
    } catch (error) {
        console.log(error);
    }
};


const getChampion = (query) => {
	return Champion.findOne({ name: query.name })
};

const getAllChampions = (query) => {

	let queryName = query.name && query.name.map(champion => {
		let obj = { name: "" };
		obj.name = champion;
		return obj;
	});
	
	let filter = queryName && { $or: queryName }

	return Champion.find(filter)	
};


module.exports = {
    getChampion,
    getAllChampions,
    createChampion,
  
}