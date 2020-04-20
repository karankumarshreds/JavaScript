const btn = document.querySelector('button');

//callbacks are functions as arguments
function moveX(el, amount, secs, callback){
	const boundary 		= document.body.clientWidth;
	const elRight 		= btn.getBoundingClientRect().right;
	const currentLeft 	= btn.getBoundingClientRect().left;
	if(elRight + amount > boundary){
		console.log('cannot go further right!')
	}else {
		setTimeout(() => {
			el.style.transform = `translateX(${amount+currentLeft}px)`;
			if (callback) callback();
		}, secs);
	}
};
					//callback
moveX(btn, 100, 1000, ()=>{
	moveX(btn, 100, 1000, ()=>{
		moveX(btn, 100, 1000, ()=>{
			moveX(btn, 100, 1000, ()=>{
				moveX(btn, 100, 1000, ()=>{
					moveX(btn, 100, 1000);
				});
			});
		});
	});
});
