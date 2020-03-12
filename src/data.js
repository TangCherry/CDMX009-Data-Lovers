import data from './data/pokemon/pokemon.js';


//devuelve otra lista
export function filterByType(type){
  let filter = data.pokemon.filter(poke=>poke.type.includes(type)) 
  return filter;

}