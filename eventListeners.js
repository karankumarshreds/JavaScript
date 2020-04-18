//onclick //
const button = document.querySelector('button');
button.onclick = function() {
  alert('You clicked');
}
//if it's repeated
const button = document.querySelector('button');
button.onclick = function() {
  alert('You clicked again'); // <-- Only this will run
}           // because onclick property got overwritten


//addEventListener
const button = document.querySelector('button');
button.addEventListener('click', function(){
  alert('Clicked once');
});
//if it's repeated
const button = document.querySelector('button');
button.addEventListener('click', function(){
  alert('Clicked twice'); // <-- You get both alerts
});
//mouseover and mouseout
const button = document.querySelector('button');
button.addEventListener('mouseover', function(){
  button.innerText = "Don't Touch";
});
button.addEventListener('mouseout', function(){
  button.innerText = "Click me";
});

