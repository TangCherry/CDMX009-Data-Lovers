import data from './data/pokemon/pokemon.js';


let pokemonType= document.querySelectorAll('.item-Flex');//un variable donde me trae todos los elementos con esa clase
for(let i=0; i< pokemonType.length; i++){
	pokemonType[i].addEventListener('click' , ()=>{
		document.getElementById('first').style.display='none';
		document.getElementById('typeSection').style.display='block';
	});
}