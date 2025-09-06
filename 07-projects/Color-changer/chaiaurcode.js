const body = document.querySelector('body');
console.log(body);
const allButtons = document.querySelectorAll('.button');
console.log(allButtons);

//by if statement
allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'plum') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'lightblue') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'olive') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'lavender') {
      body.style.backgroundColor = e.target.id
    }

  });
});

//by switch statement
// allButtons.forEach((button)=>{
//   button.addEventListener('click',(e)=>{
//     switch(e.target.id){
//       case 'plum':
//       body.style.backgroundColor = 'plum'
//       break;
//       case 'lightblue':
//       body.style.backgroundColor = 'lightblue'
//       break;
//       case 'olive':
//       body.style.backgroundColor = 'olive'
//       break;
//       case 'lavender':
//       body.style.backgroundColor = 'lavender'
//       break;
//       default:
//       console.log("No matching color")
//     }
//   })
// })

//Separate
//for seperately hold id and apply event and change color for every id seperately

//event delegation
//for this we need to add parent container for all the buttons and need to apply event on that parent container
// const body = document.querySelector('body');
// const buttonContainer = document.querySelector('#color-buttons');

// buttonContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('button')) {
//     body.style.backgroundColor = e.target.id;
//   }
// });
