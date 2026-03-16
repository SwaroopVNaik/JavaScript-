## project 1 

```JavaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});


```


## Project 2 

```JavaScript
const form = document.querySelector('form')
// This usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value) 
form.addEventListener('submit',(event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value); 
  // value => to hold/store the user input

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
  }else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    // Show the result
    results.innerHTML = `<span>${BMI}</span>`
  }

});

```
