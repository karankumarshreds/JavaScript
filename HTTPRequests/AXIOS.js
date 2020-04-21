//theres even a better way of fetching 
//data and that is by using a library called 'axios'
//you won'nt need to parse the data into json 

url = 'https://swapi.dev/api/films/1rrr/'
axios.get(url)
	.then((res)=>{
		console.log(res.data);
	})
	.catch((err)=>{
		console.log('Getting an error');
	})
//catch here in case of axios takes care 
//of the 404 or 500 status unlike fetch
