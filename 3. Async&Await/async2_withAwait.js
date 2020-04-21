//[USING ASYNC AND AWAIT]
// https://swapi.dev/api/planets/1/
async function getPlanets() {
	try {
		const res = await axios.get('https://swffapi.dev/api/planets/1/');
		console.log(res.data)
	} catch(err) {
		console.log('In catch!!', err)
	}
};

getPlanets();
