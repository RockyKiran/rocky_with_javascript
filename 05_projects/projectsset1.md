# Projects related to DOM

## project link
 
 [click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 # Solution Code

 ## Project 1

 ```javascript
console.log(" rocky1....);

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