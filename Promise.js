// promise is an object
//PromiseStatus="pending" until resolved or rejected
const firstPromise = new Promise((resolve, reject)=>{
	const rand = Math.random();
	if(rand < 0.5){
		resolve();
	} else {
		reject();
	}
})
//will run if resolved
firstPromise.then(() => {
	console.log('resolved');
}) //when rejected
firstPromise.catch(() => {
	console.log('rejected');
})
