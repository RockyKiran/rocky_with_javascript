      //         number

let x = 10
let y = 20
let z = "10" // those value are present inside the quote they are string.
             // if we adding something then the value displayed in concating number 
 let z1 = 10
console.log(z,typeof(z))

const value=new Number(100)
console.log(value);  // [Number: 100]


//toStrong():

const value1=new Number(100)
console.log(value1.toString());  //converting numeric values to strings. This value is only used for numbers.
console.log(value1.toString().length);//(it already converteed to string , so inside string we have length method)

// toFixed():

const value2=new Number(400)
console.log(value2.toFixed(1));
console.log(value2.toFixed(3));//Number of digits after the decimal point.
                           // Must be in the range 0 - 20, inclusive.
                           
//toPrecision():   

const value3=23.8
console.log(value3.toPrecision(3)); //	Returns a number written with a specified length
const value4=23323.83536
console.log(value4.toPrecision(3))

//toLocalString():

const value5=1000000
console.log(value5.toLocaleString('en-IN')) // it will show u like some different like it adding comma

// 1) isNaN():-
let value6 =50  // isNaN only consider the string value , if the given value is string then it is true, if the given value is not a string they given are pure number then it is false
const num=new Number(10)
console.log(num);

let value7 = "rocky"
let value8 = "locky"
console.log(isNaN(value6))
console.log(isNaN(value7))
var value9=60
console.log(isNaN(value9))

// 2)isFinite():-
var r = 2525 // those value are we can count or finite then it is true , if not then false 
var o = 10/0
console.log(isFinite(r))
console.log(isFinite(o))

//3)Number.isIntger
var c = 35
var k = "kiran"
console.log(Number.isInteger(c))// it will check wheather the given value is integer or not
console.log(Number.isInteger(k))

// parseInt() and parseFloat() are two method , it convert strings to number

                     //math//

let x1=199.68
console.log(x1)
console.log(Math.round(x1))

//cill():
let a=199.8
let b=199.3
console.log(a)
console.log(b)
console.log(Math.ceil(a))// given value rounded up to its nearest integer
console.log(Math.ceil(b))

//floor():
let c1= 299.6
let d= 299.1
console.log(c1)
console.log(d)
console.log(Math.floor(c))  //given value rounded down to its nearest integer
console.log(Math.floor(d))

// trunc():
let e=599.9
let f=599.1
console.log(e)
console.log(Math.trunc(e)) //599
console.log(Math.trunc(f)) //599

//sqrt():
let g=4
console.log(g)
console.log(Math.sqrt(g))

//cbrt():
let h=27
console.log(h)
console.log(Math.cbrt(h))

//pow():
console.log(Math.pow(2,3))
console.log(Math.pow(4,5))

//random():
console.log(Math.random())// if we not passing anything thn it by default it will give number between 0 to 1
console.log((Math.random()*10)+1) // it will show the output above 1

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min); // it will give the output between 10 to 20 


