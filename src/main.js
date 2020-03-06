import data from './data/pokemon/pokemon.js';
import { showPokemon } from './data.js';

//console.log(showPokemon);

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








