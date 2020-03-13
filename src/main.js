import data from './data/pokemon/pokemon.js';
// HEAD
import { showPokemon, filterByType } from './data.js'; //perra función para mostrar todos los pinches pokemones



 let pokeType= document.querySelectorAll('.item-Flex');//un variable donde me trae todos los elementos con esa clase
 for(let i=0; i< pokeType.length; i++){
     pokeType[i].addEventListener('click' , ()=>{
         document.getElementById('first').style.display='none';
         document.getElementById('typeSection').style.display='block';
         console.log(pokeType[i])
     });
 }
 //document.getElementById("boton1").onclick = function () {pantalla2(); };

 let cards = document.querySelector('#pokeCards')

 let t = "Fire"
 let filtrada = filterByType(t)
 console.log(filtrada)
 filtrada.forEach(poke=>{
   let div = document.createElement('div')
   div.innerHTML = " <p>"+poke.name+"</p> "
   cards.appendChild(div)
 })


  creamos los pinches cosos donde meter la pinche información de los pinches pokemones
  const allPokemons = data.pokemon
  const pokemons = data.pokemon; // constante donde unimos el pinche data con el coso de pokemon
  for(let i = 0; i <= pokemons.length; i++) {
  pokemons.forEach(element => {
    
  });
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
    //const nextEvolution = document.createElement('ul');
    //const weaknesses = document.createElement('ul');
   
    const evolutions = pokemons[i].next_evolution;
    for(let j = 0; j < evolutions.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = evolutions[j];
      nextEvolution.appendChild(listItem);
    } 
   
    const weaknessesByType = pokemons[i].weaknesses;
    for(let n = 0; n < weaknesses.length; n++) {
      const listItem = document.createElement('li');
      listItem.textContent = weaknesses[n];
      weaknesses.appendChild(listItem);
    }

    pokemonName.textContent = "Name: " + pokemons[i].name;
    height.textContent = "Height: " + pokemons[i].height;
    weight.textContent = "Weight: " + pokemons[i].weight;
    candyCount.textContent = "Candy count: " + pokemons[i].candy_count;
    egg.textContent = "Egg: " + pokemons[i].egg;
    spawnChance.textContent = "Spawn chance: " + pokemons[i].spawn_chance;
    avgSpawns.textContent = "Avg spawn: " + pokemons[i].avg_spawns;
    spawnTime.textContent = "Spawn time: " + pokemons[i].spawn_time;
    multipliers.textContent = "Multipliers: " + pokemons[i].multipliers;
    number.textContent = "Number: " + pokemons[i].num;

    
    pegamos los valores de los pinches pokemones en las pinches cosas de lo que creamos en los pinches cosos
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
   
    pegamos todo el desmadre en el section y me la pela el sireno
    document.getElementById("pokemonCard").appendChild(myArticle);
 } 




