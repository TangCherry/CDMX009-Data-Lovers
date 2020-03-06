// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from "./data/pokemon/pokemon.js";
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

export function showPokemon(pokemon)  {
  const pokemon = pokemons['pokemon'];

  pokemonName.textContent = pokemon[i].name;
  height.textContent = "Height: " + pokemon[i].height;
  weight.textContent = "Weight: " + pokemon[i].weight;
  candyCount.textContent = "Candy count: " + pokemon[i].candy_count;
  egg.textContent = "Egg: " + pokemon[i].egg;
  spawnChance.textContent = "Spawn chance: " + pokemon[i].spawn_chance;
  avgSpawns.textContent = "Avg spawn: " + pokemon[i].avg_spawn;
  spawnTime.textContent = "Spawn time: " + pokemon[i].spawn_time;
  multipliers.textContent = "Multipliers: " + pokemon[i].multipliers;
  number.textContent = "Number: " + pokemon[i].number;
  nextEvolution.textContent = "Evolutions: ";
  weaknesses.textContent = "Weaknesses: ";
}

