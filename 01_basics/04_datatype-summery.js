// primitive 

// 7 types => string, number, boolean, null, undefined, symbol, bigint

// all the peimitive datatype are stores in stack area
// and it will gives the copies of value

const score = 100
const score1=100.2

const isLoggedIn=false
const outsideTemp=null
let name;

const id=Symbol('1230')
const anothedId=Symbol('1230')

console.log(id==anothedId);// in symbol case if we pass same value for two variable... then also it will not equal, so we will get false

const bigNumber=123456789654n

console.log(typeof isLoggedIn);
console.log(typeof score);
console.log(typeof outsideTemp); // null also object
console.log(typeof name); // indefined
console.log(typeof id); // symbol
console.log(typeof bigNumber);


// non primitive(reference)
// Array, object, Function

// all non primitive data are stores in heap area 
// it will gives the reference

const heros=["ironman","thor","spiderman","batman"]
const details={
    name:"rocky",
    id:2,
    gender:"male"
}
const myFunction=function () {
    console.log("kiran");
    
}
function demo() {
    console.log("rocky");
    
}

console.log(typeof heros); // Object
console.log(typeof details); // object
console.log(typeof myFunction); // function
console.log(typeof demo);


