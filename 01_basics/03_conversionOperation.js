

let score = 35
let score1="35"
let score2="35abas"
let score3=true
let score4=false
console.log(typeof score);
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);

let valueInNumber=Number(score)
console.log(valueInNumber);
let valueInNumber1=Number(score1)
console.log(valueInNumber1);
let valueInNumber2=Number(score2)
console.log(valueInNumber2); // if we converting alphaNumeric value to number using Number constructor thn we will get NaN(Not a Number)
let valueInNumber3=Number(score3)
console.log(valueInNumber3);  //if we converting boolean value to number using Number constructor thn we will get 1
let valueInNumber4=Number(score4)
console.log(valueInNumber4);  //if we converting boolean value to number using Number constructor thn we will get 0

// "35" => 33
// "35ada" => NaN
// true => 1 , false => 0

let isLoggedIn =1
let isLoggedIn1=0
let isLoggedIn2="rocky"

let bolleanIsLoggedIn=Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn); // if we converting Numeric value to bollean using Boolean constructor thn we will get true
let bolleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(bolleanIsLoggedIn1);
let bolleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(bolleanIsLoggedIn2); // true

// 1 => true , 0 => false , "rocky" => true

let someNumber = 35

let stringNumber= String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // yeah it's converting number to string 

