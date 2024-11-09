let dbPassword = '123'
let pass="rocky"
let conPass="rockyu"

console.log("rocky");

// && operator
// if we need to satisfy multiple condition , mandatory to perform logical and(&&) operator between the condition
// if all the condition is true, thn only it entered to the block
if(pass==dbPassword && conPass==dbPassword)
{
    console.log('log in successfully')

}
else
{
    console.error('you have entered inncorrect password')
}

// || operator

// if the operations demands any one of the condition is satisfied, thn we will use logical or(||) between the condition
if(pass==dbPassword || conPass==dbPassword)
    {
        console.log('log in successfully')
    
    }
    else
    {
        console.error('you have entered inncorrect password')
    }

// we have one another operator 

//Nullish Coalescing Operator(??) : based upon null or undefined

let value ;
value=null ?? 10
console.log(value);

value=undefined ?? 15 ?? 20     // here initilize happen alwaysin first position
console.log(value); 


// Ternary Operator

// condition ? true : false  

let num =100 
num<50 ? console.log("less than 50") : console.log("more than 50");

