//depended sequential requests 
const url = 'https://pokeapi.co/api/v2/pokemon/1';
const getPoke = async () => {
	const poke1 = await axios.get(url);
	const poke1Specie = await axios.get(poke1.data.species.url);
	console.log(poke1Specie.data.habitat);
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	getPoke();
});

//independent parrallel requests can be sent in
//case of no dependancy from await response to
//speed up the process

//slow way of doing using sequential
//because here we are waiting for no reason 
//for the promise to be resolved to move to next
//because of the await keyword
const getPokemons = async () => {
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(poke1.data.name);
	console.log(poke2.data.name);
	console.log(poke3.data.name);
}
getPokemons();

//PARALLEL REQUESTS
const getMorePokemons = async () => {
	const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	//poke1,2&3 won't have values because axios returns a PROMISE!
	//in above example we used await infront of it which resolved 
	//values for us in the variable! 
	const poke1Data = await poke1;
	const poke2Data = await poke2;
	const poke3Data = await poke3;
	//await changes the Promises to Responses  
	console.log(poke1Data.data.name);
	console.log(poke2Data.data.name);
	console.log(poke3Data.data.name);
}
getMorePokemons();
