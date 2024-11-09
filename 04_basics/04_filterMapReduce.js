let coding=["python","java","react","html","css","sql"]
console.log(coding);
coding.forEach((item)=>{
    console.log(item);
    
})
// filter():

//It is an array higher order method  which is used to fetch the array elements with respect a filter condition.
//ORIGINAL ARRAY REMAINS UNEFFECTED

let myNum=[1,2,3,4,5,6,7,8,9,10]
console.log(myNum);

//wap to print above 4
// filter method accepts a call back function

let newNum=myNum.filter((num) => num > 4)  // using with out braces and return keyword
console.log(newNum);

// wap to print below 5
let newNum1=myNum.filter((num) =>{
    return num < 5                      // using  out braces and return keyword
})  
console.log(newNum1);

// wap to print above 4 inside a new array(with out using filter mathod)
let newNum2=[]
myNum.forEach((num)=>{
    if (num > 4) {
        newNum2.push(num)            // without filter method
    }
     
})
console.log(newNum2);

// wap to print even values and store inside a new array

let newNum3=[]
let myNum2=[1,2,3,4,5,6,7,8,9,10]
myNum2.forEach((num)=>{
    if (num % 2==0) {
        newNum3.push(num)
    }
})
console.log(newNum3);

let book=[
    {
        title:"book One",
        genre:"fiction",
        publish:1981,
        edition:2004
    },
    {
        title:"book Two",
        genre:"Non-fiction",
        publish:1992,
        edition:2008
    },
    {
        title:"book Three",
        genre:"History",
        publish:1999,
        edition:2007
    },
    {
        title:"book Four",
        genre:"Non-fiction",
        publish:1989,
        edition:2010
    },
    {
        title:"book Five",
        genre:"science",
        publish:2009,
        edition:2014
    },
    {
        title:"book Six",
        genre:"fiction",
        publish:1987,
        edition:2010
    },
    {
        title:"book Seven",
        genre:"History",
        publish:1987,
        edition:1996
    },
    {
        title:"book Eight",
        genre:"Science",
        publish:2011,
        edition:2016
    },
    {
        title:"book Nine",
        genre:"Non-fiction",
        publish:1981,
        edition:1989
    },
    {
        title:"book Ten",
        genre:"Romantic",
        publish:2015,
        edition:2024
    }
]
let userBook=book.filter((bk)=>{
   return bk.genre==="Romantic"
})
console.log(userBook);

let userBook1=book.filter((bk)=>{
    return bk.publish >=2000
 })
 console.log(userBook1);

 //    map() :

 // It is an array higher order method which is used to apply some changes / modify the existing elements of an Array.
//Changes will be applicable for every elements in tht given array.
//ORIGINAL ARRAY REMAINS UNEFFECTED

let mynum=[1,2,3,4,5,6,7,8,9,10]

// to add 10 in every elements 
let newNum4=mynum.map((num)=>{
     return num+10
})
console.log(newNum4);

//  to multiply 10 in every elemnt and after that add one

let newNum5=mynum.map((num)=>{
    return num * 10
}).map((num)=>{
    return num + 1
})
console.log(newNum5);

// to multiply 10 in every elemnt and after that add one and after that select above 40 value

let newNum6=mynum.map((num)=>{
    return num * 10
}).map((num)=>{
    return num + 1
}).filter((num)=>{
    return num >= 40
})
console.log(newNum6);

// to multiply 10 in every elemnt and after that add one and after that select above 40 value (but in new array)

let n=[]
let newNum7=mynum.map((num)=>{
    return num * 10
}).map((num)=>{
    return num + 1
}).filter((num)=>{
    if (num >= 60) {
        return n.push(num)
    }
})
console.log(n);


// reduce():
 
// it accepts a one call back function
// it perform the calculation of on the preceding element
// inside the call back function we have to pass two param , one is for to always store initial value, and other one is existing element
// // after the call back function  we have to pass the initial value 

let number=[1,2,3,4,5]
let newNumber=number.reduce((acc,curValue)=>{
    return acc + curValue
},0)
console.log(newNumber);

let shoppingCart=[
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"java",
        price:9999
    },
    {
        itemName:"python",
        price:499
    },
    {
        itemName:"data science ",
        price:8999
    }
]
let pay=shoppingCart.reduce((acc,item)=>{
    return  acc+item.price
},0)
console.log(pay);
