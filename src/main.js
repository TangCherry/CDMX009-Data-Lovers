import data from './data/pokemon/pokemon.js';
import { filterByType } from './data.js'; //función para filtrar por tipo


let cards = document.querySelector('.container3') //tambien se usará este modelo de variable para el filtrado, no lo olvides

let t = "Water"                        //aquí debe de ir la clase para elegir el id con el evento
let filtrada = filterByType(t)
//console.log(filtrada)
filtrada.forEach(poke=>{
  let article = document.createElement("article")
  article.innerHTML = "<h2>"+poke.name+"</h2>"
  cards.appendChild(article)
})  

/*let pokemonType= document.querySelectorAll('.item-Flex');//un variable donde me trae todos los elementos con esa clase
for(let i=0; i< pokemonType.length; i++){
	pokemonType[i].addEventListener('click' , ()=>{
		document.getElementById('first').style.display='none';
		document.getElementById('typeSection').style.display='block';
	});
} */