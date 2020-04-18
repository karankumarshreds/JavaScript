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

