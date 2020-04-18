//######################## JavaScript ############################//

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

window.onload = setTimeout(timer, 10000);
let score = 0;
const h1 = document.createElement('h1');

function timer(){
	document.querySelector('div').appendChild(h1);
};


const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e){
	if (e.key === 'ArrowDown'){
		//sending the current pos
		const currTop = extractPos(avatar.style.top);	
		avatar.style.top = `${currTop + 50}px`;
		avatar.className = '';
	}
	else if(e.key === 'ArrowUp'){
		const currTop = extractPos(avatar.style.top);	
		avatar.style.top = `${currTop - 50}px`;
		avatar.className = '';
	}
	else if(e.key === 'ArrowRight'){
		const currLeft = extractPos(avatar.style.left);	
		avatar.style.left = `${currLeft + 50}px`;
		avatar.className = '';
	}
	else if(e.key === 'ArrowLeft'){
		const currLeft = extractPos(avatar.style.left);	
		avatar.style.left = `${currLeft - 50}px`;
		avatar.className = 'left';
	};
	if(isTouching(avatar, coin)){
		moveCoin();
		score = score + 1;
		h1.innerHTML = 'Your Score : '+`${score}`
		h1.style.justifyContent= 'center';
		h1.style.alignItems= 'center';
	};
});

//return trim 'px' from pos
const extractPos = (pos) => {
	if (!pos) return 0;
	return parseInt(pos.split('px')[0]);
	// return parseInt(pos.slice(0,-2));
};

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight-100);
	const x = Math.floor(Math.random() * window.innerWidth-100);
	console.log(y);
	console.log(x);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};
//so that coin is somewhere random 
//whenever the window loads
moveCoin();



//############################### HTML #####################################//

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Coin Game Starter</title>
  <link rel="stylesheet" href="app.css">
</head>

<body>
  <div class="container">
  <img id="player" src="https://cdn.clipart.email/25e8a097523753f1b1384771f2cb088b_running-dog-gifs-get-the-best-gif-on-giphy_464-480.gif" alt="">
  <img id="coin" src="https://i.gifer.com/1PwK.gif" alt="">
</div>
  <script src="app.js"></script>
</body>

</html>


//########################### CSS ###############################//

img{
	width: 150px;
	position: absolute;
	top: 50px;
	left: 10px;
}

#coin{
	width: 300px;
	position: absolute;
	top: 20px;
	left: 25px;
}

.left{
	-webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}


