// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
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

//console.log(data);
export function showPokemon(pokemons)  {
  const pokemon = pokemons['pokemon'];

 for(let i = 0; i < pokemon.length; i++) {
  const myArticle = document.createElement('article');
  const pokemonName = document.createElement('h2');
  const height = document.createElement('p');
  const weight = document.createElement('p');
  const candyCount = document.createElement('p');
  const egg = document.createElement('p');
  const spawnChance = document.createElement('p');
  const avgSpawns = document.createElement('p');
  const spawnTime = document.createElement('p');
  const multipliers = document.createElement('p');
  const number = document.createElement('p');
  const nextEvolution = document.createElement('ul');
  const weaknesses = document.createElement('ul');

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

  const evolutions = pokemon[i].next_evolution;
  for(let j = 0; j < evolutions.length; j++) {
    const listItem = document.createElement('li');
    listItem.textContent = evolutions[j];
    nextEvolution.appendChild(listItem);
  }

  const weaknessesByType = pokemon[i].weaknesses;
  for(let n = 0; n < weaknesses.length; n++) {
    const listItem = document.createElement('li');
    listItem.textContent = weaknesses[n];
    weaknesses.appendChild(listItem);
  }

  myArticle.appendChild(pokemonName);
  myArticle.appendChild(height);
  myArticle.appendChild(weight);
  myArticle.appendChild(candyCount);
  myArticle.appendChild(egg);
  myArticle.appendChild(spawnChance);
  myArticle.appendChild(avgSpawns);
  myArticle.appendChild(spawnTime);
  myArticle.appendChild(multipliers);
  myArticle.appendChild(number);
  myArticle.appendChild(nextEvolution);
  myArticle.appendChild(weaknesses);

  document.getElementById("pokemonCard").appendChild(myArticle);
}
}

