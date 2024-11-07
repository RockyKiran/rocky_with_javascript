
  
    // function:-
    // **********

    //       First id or first citizen in js
    //       object in js
    //             1)function ddclaration/general function/pure function
    //             2)function expression
    //             3)function programming
    //                         i)HOF(high order function)
    //                         II)CBF(call back function)
    //            4)arrow function
    //            5)nested function
    //                        i)lexical scope
    //                        ii)clousure
    //            6)IIFE(imideately invoking function expression)
    // 1)function declaration
    // **********************

    // it is a block of code or set of instruction used to perform a specific operation 
    // it can be hoisted(hoisted means we call the function before we declared the function)

    // adv:-
    // *****
    //      code reusability(write once and call multiple function)
    //      if u write once we can use and call the anywhere in within the function
    //      fuction are the highest priority of the java script

    // note:-
    // *****     
    // a function declaration statement can be hoisted(call the function before function declaration)

    // syntax:-
    // *****

    // function function_name(){//with in the bracket we pass the parameter , and the parameter it is a identifier,and the function name is a
      
    //   statements.....
    //   statements......
    // }
    // function_name()//with in the barcket we can pass the arguments or values

    // ex-1:-
    // *****
 console.log(Demo)//it will give print the body of the entire function
function Demo(){
  console.log("hellow world");
}
console.log(Demo())// it is give the proper output
console.log(Demo)//it will give the body print of the entire function

// ex-2:-
// *****
console.log(Demo1)//it will give the body print of the entire function
function Demo1(a,b){
  let c;
  c=a+b;
  return c;
}
let result=(Demo1(10,20))// it is give the proper output
console.log(result);

console.log(Demo1)//it will give the body print of the entire function

// return:-
//     *******
//         return it is a keyword
//          it stops the execution of function and controller gives to the caller
//          after  the return keyword whatever we write it can not be execute

// 2)function expression:-
// ***********************
//     it is a ussed to asssign the function has a value to one variable is called function expression 
//     it is a also ussed to performing a specific task 
//     in function expression hoisting is not possible

// syntax:-
// *******
let demo2=function (a,b){
  let c;
  c=a+b;
  return c;
}
console.log(demo2(10,20))


// note:-
// *****
//    hoisting is not possible here 
//    those function have without a name it is called a anonymous function
//    if we invoking the anonymous function first we store the function inside a variable as a value
//    using the variable we can invoke the function 


// 3)function programming:-
// ************************
//                             i)HOF(high order function)
//                             II)CBF(call back function)
   
//   it is used to perform a multiple task(Generic task)    
//   it can be created by using function ddclaration, function expression, arrow function
                       
//            i)HOF(high order function):-
//            ****************************
//               a function which will accept function as a argument
//            II)CBF(call back function) 
//            ***************************
//               a function which is passed as a argument to a function

//   4)arrow function:-
//   *******************
//   is introduced by ES6 in 2015
//   hoisting is not possible in arrow function
//   it is used to reduce a syntax(numbers of lines of code)
//   it is a anonymous function 
//   it is a two types of returns:
//                       i)implicit return Arrow function
//                              return keyword is not mandatory
//                              ()=>clg('hello')
//                                 or                           // here braces is not mandatory
//                              _=>clg('hello')
//                       ii)explicit return Arrow function
//                               return keyword is mandatory
//                              let a= ()=>{
//                                 return 'hello'                        // here braces is mandatory
//                                    }
//                                    clg(a())  
