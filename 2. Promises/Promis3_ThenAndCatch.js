//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/about' : 'This is the about page!',
				'/users/5': {
					'name': 'Esmerelda',
					'Age': '26',
					'Gender': 'female',
					'postId': 12,
				},
				'/posts/12' : {
					'content': 'This is the 12th post!'
				}
			};
			//selecting which data to respond
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res)=>{
		//returns 5 
		const id = res.data[1].id;
		//returns to next then
		return fakeRequest(`/users/${id}`);
	})
	.then((res)=>{
		//returns 12
		const postId = res.data.postId;
		return fakeRequest(`/posts/${postId}`)
	})
	.then((res)=>{
		//returns 'this is the 12th post'
		console.log(res.data.content);
	})	//only one catch for all
	.catch((err)=>{
		console.log(err);
	})
