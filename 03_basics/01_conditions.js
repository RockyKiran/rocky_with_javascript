// if

// if the condition is true the block of element is going to be executed
let val=30
if (val=30) {
    console.log(`it's executed = ${val}`);
    
}

if (true) 
    console.log(`it's executed = ${val}`);  // we can write this type also 
                                            // if the condition is true thn the first line of statement will execute, if braces is not there
  // if-else
  
  // whenever we get two set of operation but we expecting one set of operation to be output, thn we use if-else
  //if the condition is false the control will go to the else statement and ececute the else block
  
  let val1=100;
  if (val1<50) {
    console.log(`this value ${val1} was less than 50`);
    
  } else {
    console.log(`this value ${val1} was more than 50`); 
  }

  let val2=100;
  if (val2<50) 
    console.log(`this value ${val2} was less than 50`);   // we can write without braces also posible(but it will count the first line)
   else 
    console.log(`this value ${val2} was more than 50`); 
  
// else-if ladder

//whenever we need to perform any one set of operation outs of many sets of operation , thn we use else-if ladder
//if all the conditions are false thn it will execute else block
// if a perticular blocks will execute , thn it will not checks the further blocks
// maximum one block will execute , but minimum zero
// else block is optional

function daytranslator(day)
{
    if(day=='monday')
    {
        return 'somabar'
    }
    else if(day=='tuesday')
    {
        return 'mangalabar'
    }
    else if(day=='wednesday')
    {
        return 'budhubar'
    }
    else if(day=='thursday')
    {    
        return 'gurubar'
    }
    else if(day=='friday')
    {
        return 'shukrubar'
    }
    else if(day=='saturday')
    {
        return 'shanibar'
    }
    else if(day=='sunday')
    {
        return 'ravibar'
    }
    else
    {
        return 'please entered proper day'
    }

}
console.log(daytranslator("sunday"))

// switch :

// if we have multiple set of operation and among them if we want to execute one or more operation , it's better to go with switch
// it will first check the equality between switch expression and case value, if match thn it will execute the case block
//to terminate the execution of switch we have to use the statement called break


function daytranslator(day)
{
    switch(day)
    {
        case 'monday': console.log("somabar");
                    //    break;                  //  here we will get two value like two mondays 
        case 'tuesday':  console.log("mangalabar");
                     break;
        case 'wednesday':  console.log("budhubar");
                       break;
        case 'thursday':  console.log("gurubar");
                       break;
        case 'monday':  console.log("shukrubar");
                        break;
        case 'sataurday':  console.log("sanibar");
                         break;
        case 'sunday':  console.log("ravibar");
                        break;
        default:  console.log("please entered proper day");

    }
}
daytranslator('monday');

//      OR
function daytranslator1(day)
{
    switch(day)
    {
        case 'monday': return 'somabar';
        case 'tuesday': return 'mangalabara';
        case 'wednesday': return 'budhubara';
        case 'sunday': return 'gurubar';
        case 'friday': return 'shukrubar';
        case 'sataurday': return 'shanibar';
        case 'sunday': return 'ravibar';
        default: return 'please entered proper day'


    }
}
console.log(daytranslator1("sunday"))
