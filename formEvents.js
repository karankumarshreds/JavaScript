// ################## JavaScript ################### //

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector("#terms");
const veggieSelector = document.querySelector("#veggie");

const sub = document.querySelector('#submit-form');
sub.addEventListener('submit', function(e){
	//prevents refreshing the page
	e.preventDefault();
	console.log('cc', creditCardInput.value);
	console.log('terms', termsCheckbox.checked);
	console.log('veggieSelect', veggieSelector.value);
})

// ################# HTML ################# // 

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
  <input type="text" id="cc" placeholder="credit card">
  <label>
    I agree !
    <input type="checkbox" id="terms">
  </label> 
  <form id="submit-form">
  <select id="veggie">
    <option value="eggplant">Eggplant</option>
    <option value="asparagus">Asparagus</option>
    <option value="carrot">Carrot</option>
  </select>
  <input type="submit">
</form>

</div>
  <script src="app.js"></script>
</body>

</html>
