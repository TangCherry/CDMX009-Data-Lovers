import data from './data/pokemon/pokemon.js';
import { showPokemons, filterByType } from './data.js'; //función que muestra todos los pokemons y para filtrar por tipo

 let pokeCard = document.querySelector(".container2") // imprime todos los pokemons en el contenedor

let kanto = "pokeInfo"									
let kantoPokemons = showPokemons (kanto) 				//variable donde llamaremos a la función
kantoPokemons.forEach(poke=>{							//dentro de esa función contaremos todos los pokemons (por eso el forEach)
	let myArticle = document.createElement ("article");		//creamos un articulo, h2 y una imagen
	let pokemonName = document.createElement ("h2");		
	let photo = document.createElement ("img");				

	pokemonName.textContent = poke.name; 					//agregamos texto a nuestra variable (dentro de la data buscamos el que diga name para obtener el nombre del pokemon)
	photo.src = poke.img; 									//agregamos imagen del pokemon (la obtenemos dentro de la misma data)

	myArticle.appendChild(pokemonName);						//unimos las variables al articulo (appendchild es para agregarle un hijo a nuestro elemento padre)
	myArticle.appendChild(photo);
	pokeCard.appendChild(myArticle);
}) 

 let cards = document.querySelector(".container3") 

let pokemonType= document.querySelectorAll('.item-flex');	//un variable donde me trae todos los elementos con esa clase (iconos de elementos)
for(let i=0; i< pokemonType.length; i++){ 					//va a contar la longitud de cada pokemon
	pokemonType[i].addEventListener('click' ,()=>{ 						//en el click nos muestra la segunda pantalla y los elementos de la función a correr, también ocultamos los resultados de nuestra primera función
		document.getElementById('first').style.display='none';
		document.getElementById('allPokemon').style.display='none';
		document.getElementById('typePokemon').style.display='block';
	let filter = filterByType (pokemonType[i].id); 						//variable que nos trae nuestra función, obtenemos el id de cada pokemon
		filter.forEach(poke=>{ 											//dentro del filtro contaremos cada uno (forEach)
		//console.log (filter);
		let article = document.createElement ("article"); 				//creamos elementos (td=celda de tabla)
		let pokemonName = document.createElement ("h2");
		let number = document.createElement ("p");
		let height = document.createElement ("p");
		let weight = document.createElement ("p");
		let candyCount = document.createElement ("p");
		let egg = document.createElement ("p");

				pokemonName.textContent = poke.name;					//buscamos los elementos dentro de la data (nombre, numero, etc)
				number.textContent = poke.num;
				height.textContent ="Height: " + poke.height;
				weight.textContent ="Weight: " + poke.weight;
				candyCount.textContent ="Candy count: " + poke.candy_count;
				egg.textContent = "You can find it in... " + poke.egg;

				article.appendChild(pokemonName); 						//unimos valores al articulo con el appendchild
				article.appendChild(number);
				article.appendChild(height);
				article.appendChild(weight);
				article.appendChild(candyCount);
				article.appendChild(egg);
				cards.appendChild(article);
			})
		});
	} 

 /* let cards = document.querySelector(".container3") //tambien se usará este modelo de variable para el filtrado, no lo olvides

 let pokemonType= document.querySelectorAll('.item-flex');//un variable donde me trae todos los elementos con esa clase
//let t = "Fire"                        //aquí debe de ir la clase para elegir el id con el evento
let filtrada = filterByType(pokemonType)
//console.log(filtrada)
filtrada.forEach(poke=>{
  let article = document.createElement("article")
  article.innerHTML = "<h2>"+poke.name+"</h2>"
  cards.appendChild(article)
}) */
