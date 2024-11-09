let dbPassword = '123'
let pass=prompt('enter password')
let conPass=prompt('enter confirm password')

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