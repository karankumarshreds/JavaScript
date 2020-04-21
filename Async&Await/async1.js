// [NORMAL WAY OF PROMISES]
function add(x,y) {
	if (typeof x === 'number' && typeof y === 'number'){
		const sum = x + y;
		return Promise.resolve(sum);
	} else {
		return Promise.reject('ERROR');
	}
}

add(10,10).then((res)=>{
	console.log(res);
})
.catch((err)=>{
	console.log(err);
})

//[OR SIMPLY USE ASYNC]
const funcC = async () => {
	const rand = Math.random();
	if (rand < 0.5) {
		return 'Success! '
	} else {
		throw 'FAILED!'
	}
}

funcC().then((res)=>{
	console.log(res);
})
.catch((err)=>{
	console.log(err);
});
