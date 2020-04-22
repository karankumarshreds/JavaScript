// ################# USING THENS [OLD WAY] #################### // 
//same function
const moveX = (el, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = el.getBoundingClientRect().right;
		const currLeft = el.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			reject({bodyBoundary, elRight, currLeft})
		}
		else {
			el.style.transform = `translateX(${currLeft+amount}px)`;
			resolve();
		}
		}, delay);
	});
};

const btn = document.querySelector('button');
moveX(btn, 200, 2000)
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.then(()=> moveX(btn, 200, 2000))
	.catch((err) => {
		console.log('ERROR');
		console.log(err);
	});
  
  
  // ############### USING AWAITS ################# // 
  //same function
  const moveX = (el, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = el.getBoundingClientRect().right;
		const currLeft = el.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			reject({bodyBoundary, elRight, currLeft})
		}
		else {
			el.style.transform = `translateX(${currLeft+amount}px)`;
			resolve();
		}
		}, delay);
	});
};

const btn = document.querySelector('button');
const animateRight = async (btn) => {
	try {
		await moveX(btn, 200, 1000)
		await moveX(btn, 200, 1000)
		await moveX(btn, 200, 1000)
		await moveX(btn, 200, 1000)
		await moveX(btn, 200, 1000)
		await moveX(btn, 200, 1000)
		await moveX(btn, 200, 1000)
	} catch(err) {
		console.log('ERROR')
		console.log(err)
	}
}
animateRight(btn)
//OR
animateRight(btn).catch(err) {
	console.log('ERROR')
	console.log(err)
}

  
