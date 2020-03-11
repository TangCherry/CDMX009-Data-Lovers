import data from './data/pokemon/pokemon.js';

//1.- devuelve otra lista
export function filterByType(tipo){
  let filter = data.pokemon.filter(poke=>poke.type.includes(tipo)) 
  return filtrada
}

/*export function filterByType (allPokemons, byType) {
  for (let i = 0; i < allPokemons.lenght; i++) {
    for (let n = 0; n < allPokemons[i].type.lenght; n++){
      if (allPokemons[i].type[n] === byType)
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
<<<<<<< HEAD
import data from './data/pokemon/pokemon.js';
=======
>>>>>>> 04ab35a81c3b42cdcda70389a4847a73e3b14c54
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo

// export const pokemon = () => {
//   return 'pokemon';
// };

// export const pokemon = () => {
//   fetch('http swapi.co/api/planets/1/')
//   .then(response => response.json)
//   .then(json => console.log (json));
// }
//export function showPokemon(pokemon)  { //funcion para buscar pinches pokemones

  //buscamos el valor de los cosos de los pinches pokemon
/*  pokemonName.textContent = pokemons[i].name;
  height.textContent = "Height: " + pokemons[i].height;
  weight.textContent = "Weight: " + pokemons[i].weight;
  candyCount.textContent = "Candy count: " + pokemons[i].candy_count;
  egg.textContent = "Egg: " + pokemons[i].egg;
  spawnChance.textContent = "Spawn chance: " + pokemons[i].spawn_chance;
  avgSpawns.textContent = "Avg spawn: " + pokemons[i].avg_spawn;
  spawnTime.textContent = "Spawn time: " + pokemons[i].spawn_time;
  multipliers.textContent = "Multipliers: " + pokemons[i].multipliers;
  number.textContent = "Number: " + pokemons[i].number;
  //nextEvolution.textContent = "Evolutions: ";
  //weaknesses.textContent = "Weaknesses: ";
} */
/* export function filterByType (allPokemons, byType) {
  for (let i = 0; i < allPokemons.lenght; i++) {
    for (let n = 0; n < allPokemons[i].type.lenght; n++){
      if (allPokemons[i].type[n] === byType)
    }
  }
 } 

*/
