// const input = document.getElementById('button')

// function buttonClicked() {
//     alert('button clicked');
// }

// input.addEventListener('click', buttonClicked)



// const input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });


// // function addingEventListener(){

// input.addEventListener('click', function() {
//     alert('I was clicked');
// });
const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('click', addingEventListener);
}


