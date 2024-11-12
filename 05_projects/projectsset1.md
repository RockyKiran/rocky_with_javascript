# Projects related to DOM

## project link
 
 [click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 # Solution Code

 ## Project 1 solution

 ```javascript
console.log(" rocky1....");

let btn=document.querySelectorAll(".button")
console.log(btn)
let bdy= document.querySelector('body')


btn.forEach((btn)=>{
  console.log(btn)
  btn.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id==='blue'){
      bdy.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
      bdy.style.backgroundColor=e.target.id
    }
    if(e.target.id==='grey'){
      bdy.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      bdy.style.backgroundColor=e.target.id
    }
    
  })
})


 ```

 ## Project 2 solution

 ```javascript
 console.log("rocky2...")

 let form=document.querySelector('form')
// console.log(form)

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let height=  parseInt(document.getElementById("height").value) 
  console.log(height)
  let weight=  parseInt(document.getElementById("weight").value) 
  console.log(weight)
  let result=document.getElementById("results")
  console.log(result)

  if(height=="" || height < 0 || isNaN(height)){
    result.innerHTML="please enter a valid height"
  }else if(weight=="" || weight < 0 || isNaN(weight)){
    result.innerHTML="please enter a valid weight"
  }
  else{
    let bmi= (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML= `<span>${bmi}</span>`

    if(bmi < 18.6){
      result.innerHTML +=" <p>Under Weight = Less than 18.6</p>"
    }
    else if(bmi >18.6 && bmi < 24.9){
      result.innerHTML +="<p>Normal Range = 18.6 and 24.9</p>"
    }
    else{
      result.innerHTML +="<p>Overweight = Greater than 24.9</p>"
    }
  }
})

 ```
 
 ## Project 3 Solution

 ```javascript
 console.log("rocky3...");

 let clock = document.getElementById("clock")
console.log(clock)

setInterval(()=>{
  let date=new Date()
  // console.log(date)
  let date1=date.toLocaleTimeString()
  console.log(date1)
  clock.innerHTML=date1
},1000)
 
 ```

 ## Project 4 Solution

 ```javascript
 console.log("rocky4...");

 let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

 
 ```