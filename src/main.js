import data from './data/pokemon/pokemon.js';
import {/* showPokemons, */  filterByType } from './data.js'; //función para filtrar por tipo

/* let pokeCard = document.querySelector(".container2") // imprime todos los pokemons en el contenedor 

let kanto = "name, num"
let kantoPokemons = showPokemons (kanto)
kantoPokemons.forEach(poke=>{
	let myArticle = document.createElement ("article");
	let pokemonName = document.createElement ("h2");
	let height = document.createElement ("td");
	let weight = document.createElement ("td");
	let candyCount = document.createElement ("td");

	pokemonName.textContent = poke.name;
	height.textContent ="Height: " + poke.height;
	weight.textContent ="Weight: " + poke.weight;
	candyCount.textContent ="Candy count: " + poke.candy_count;

	myArticle.appendChild(pokemonName)
	myArticle.appendChild(height)
	myArticle.appendChild(weight)
	myArticle.appendChild(candyCount)
	pokeCard.appendChild(myArticle)
})  */

/* let cards = document.querySelector(".container3") 

let pokemonType= document.querySelectorAll('.item-flex');//un variable donde me trae todos los elementos con esa clase
for(let i=0; i< pokemonType.length; i++){
	pokemonType[i].addEventListener('click' ,()=>{
		document.getElementById('first').style.display='none';
		document.getElementById('typePokemon').style.display='block';
	let filter = filterByType (pokemonType[i].id);
		//console.log (pokemonType);
	});
		let myArticle = document.createElement ("article");
		let pokemonName = document.createElement ("h2");
		let number = document.createElement ("td");
		let height = document.createElement ("td");
		let weight = document.createElement ("td");
		let candyCount = document.createElement ("td");
		let egg = document.createElement ("td");
	/*	let nextEvolution = document.createElement ("ul");

			let evolution = pokemonType[i].next_evolution;
				for (let n=0; n <evolution.length; n++){
					let listItem = document.createElement("li");
					listItem.textContent = evolution[n];
					nextEvolution.appendChild(listItem);
				} 
				pokemonName.textContent = pokemonType.name;
				number.textContent = pokemonType.num;
				height.textContent ="Height: " + pokemonType.height;
				weight.textContent ="Weight: " + pokemonType.weight;
				candyCount.textContent ="Candy count: " + pokemonType.candy_count;
				egg.textContent = "You can find it in... " + pokemonType.egg;

				myArticle.appendChild(pokemonName);
				myArticle.appendChild(number);
				myArticle.appendChild(height);
				myArticle.appendChild(weight);
				myArticle.appendChild(candyCount);
				myArticle.appendChild(egg);
				//myArticle.appendChild(nextEvolution);
				cards.appendChild(myArticle);
}  */
 let cards = document.querySelector(".container3") //tambien se usará este modelo de variable para el filtrado, no lo olvides

 let pokemonType= document.querySelectorAll('.item-flex');//un variable donde me trae todos los elementos con esa clase
//let t = "Fire"                        //aquí debe de ir la clase para elegir el id con el evento
let filtrada = filterByType(pokemonType)
//console.log(filtrada)
filtrada.forEach(poke=>{
  let article = document.createElement("article")
  article.innerHTML = "<h2>"+poke.name+"</h2>"
  cards.appendChild(article)
}) 
