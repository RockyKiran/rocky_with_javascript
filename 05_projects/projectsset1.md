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
 console.log("rocky2...)

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