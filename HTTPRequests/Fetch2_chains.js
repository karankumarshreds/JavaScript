//even if the HTTP error if 404 or 500, the fetch will not send
//the error to the .catch, .then will resolve it normally changing
//the status to 'false' instead of 'ok'.
//.catch will only run in case of network failure.

//if you want the fetch to run on failed state such as 404,
//you need to add if(!response.ok) and throw new Error in your catch!
fetch('https://swapi.dev/api/planets/1/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);
		return response.json();
	})
	.then((response)=>{
		const filmURL = response.films[0];
		return fetch(filmURL);
	})
	.then((response)=>{
		if (!response.ok)
			throw new Error(`'Status Code Error:' ${response.status}`);
		return response.json();
	})
	.then((data)=>{
		console.log(data);
	})
	//this runs only in case of network failures
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err); 
	});
