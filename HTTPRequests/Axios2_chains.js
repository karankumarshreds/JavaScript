//theres even a better way of fetching 
//data and that is by using a library called 'axios'
//you won'nt need to parse the data into json 

url = 'https://swapi.dev/api/films/1/'
axios.get(url)
	.then((res)=>{
		return res.data.planets[0];
	})
	.then((url)=>{
		return axios.get(url);
	})
	.then((data)=>{
		console.log(data.data);
	})
	.catch((data)=>{
		console.log('getting an errror');
	})
//catch here in case of axios takes care 
//of the 404 or 500 status unlike fetch
