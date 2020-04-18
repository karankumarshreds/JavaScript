//################ onclick #####################//
const button = document.querySelector('button');
button.onclick = function() {
  alert('You clicked');
}
//if it's repeated
const button = document.querySelector('button');
button.onclick = function() {
  alert('You clicked again'); // <-- Only this will run
}           // because onclick property got overwritten


//############## addEventListener ################//
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


//############## using 'this' #################//
const colors = ['red', 'orange', 'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];
const printColor = function() {
  //'this' is the item that has been clicked
  //or the element to which eventListener is added to
  //also, it's automatically passed as an event object
  console.log(this.style.backgroundColor);
};
const boxes = document.querySelector('#boxes')
for(let color of colors){
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  boxes.appendChild(box);
  box.addEventListener('click', printColor)
}
