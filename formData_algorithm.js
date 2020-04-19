// ########## JavaScript ########### // 

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector("#terms");
const veggieSelector = document.querySelector("#veggie");

const formData = {};
// <input type="text" id="cc" placeholder="credit card">
for(let input of [creditCardInput, termsCheckbox, veggieSelector]){
	//destructuring the onject to only target
	input.addEventListener('input', ({target}) => {
		//destructuriing target further
		const {name, value, checked, type} = target;
		//key will be 'name' parameter of object 
		//value will be 'checked' if checkbox ie. (type=checked)
		//otherwise value will be value typed/selected
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
};


// ############ HTML ############## // 

<form id="submit-form">
    <input name="creditCard" type="text" id="cc" placeholder="credit card">
    <label>
    I agree !
    <input name="checked" type="checkbox" id="terms">
    </label>  
    <select name="veggieName" id="veggie">
      <option value="eggplant">Eggplant</option>
      <option value="asparagus">Asparagus</option>
      <option value="carrot">Carrot</option>
    </select>
    <input type="submit">
</form>
