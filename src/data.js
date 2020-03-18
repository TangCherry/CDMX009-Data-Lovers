import data from './data/pokemon/pokemon.js';

//funcion para mostrar todos los pokemones
export function showPokemons (pokemon) {
  let allPokemons = data.pokemon
  for (let i = 0; i <= allPokemons.length; i++){
  }
  return allPokemons;
} 



//funcion para filtrar por tipo
export function filterByType(type){
  let filter = data.pokemon.filter(poke=>poke.type.includes(type)) 
  return filter;
}

