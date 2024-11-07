console.log("rocky")   //string mentioned with double quote and single quote and back tick

console.log(String("rocky"))  // it is used the string constructor

console.log(new String("Kiran")) // it is used the new constructor

// the single quote and double quote the input given only in single line , we can not break the line
//the backtick if you break the line the output not showing any error

// 1) slice(starting index,ending index):-

// it always starts from 0 to n(right to left)
// if we strats from the value left to right then it consider negetive value(like -1 to n)

// slice(starting index,ending index):-

var x = "rocky kiran 14"
console.log(x.slice(2,5))
console.log(x.slice(-5,-1))
console.log(x.slice(5,-5))
console.log(x.slice(-12,10))
console.log(x.slice(-5,4))
console.log(x.slice(8,4))

// substring(starting index,ending index):-

// if we give negetive index thn by default it will consider as 0

var y = "it is impossible"
console.log(y.substring(2,10))
console.log(y.substring(14,8))
console.log(y.substring(-5,8))
console.log(y.substring(10,-8))
console.log(y.substring(-2,-6))

// substr(starting index,string length)

// var x = "my name is kiran kumar khandual"
// console.log(x)
// console.log(x.substr(2,5))
// console.log(x.substr(2,5).length)
// console.log(x.substr(3,6))
// console.log(x.substr(3,6).length)

// length():-

let x1 = "shakalaka boomboom"
console.log(x.length)// it will give the length of the string
console.log(x)

// replace() and replaceAll()

let z = "rocky kiran komar kook"
console.log(x.replace("o","e")) //  it will replace with the first occuring string 
console.log(x.replaceAll("o","e")) //  it will replace with the all string 

// toLowerCase() and toUpperCase()

let x2 = "sGhaKahHSA KAsna"
console.log(x)
console.log(x.toLowerCase()) // convert to lower case
console.log(x.toUpperCase())  // convert to uper case

// includes():

let x3 = "kiran kumar khandual"
console.log(x3)
console.log(x3.includes("h"))  // it will check wheather the given string is present or not
console.log(x3.includes("n"))
console.log(x3.includes("Ga"))
console.log(x3.includes("kiran"))

// trim():

let x4 = "      rocky   "
console.log(x4)
console.log(x4.length)
console.log(x4.trim()) // it will remove all space from both side
console.log(x4.trim().length)
console.log(x4.trimStart())  // it will remove all space from starting
console.log(x4.trimStart().length)
console.log(x4.trimEnd())    //it will remove all space from ending
console.log(x4.trimEnd().length)

// padStart() and padEnd():

let x5 = "man"
console.log(x5)
console.log(x5.padStart(8,"sales"))// salesman
                                 
                                // it is used to join/add some character at the starting 
                                //the first argument is the total length expecting from potput including the length of the original string
                                  //the second argument is string to be added at the starting

console.log(x5.padEnd(7,"ager")) // manager
                              
                               //it is used to join/add some character at the ending 
console.log(x5.padStart(11,"sales"))
console.log(x5.padEnd(9,"ager"))
console.log(x5.padStart(15,"rocky"))

// split():
 
// it is used to convert a string to an array

let x6 = "rockykiran"
console.log(x6)
console.log(typeof x6)  // string 
console.log(x6.split()) // if we not passing anything inside bracket thn the output will show as it is but in array format(because it converting string to aaray)
console.log(typeof x6.split()) // object after split it will convert object type
console.log(x6.split(""))    // if we passing double quote inside bracket thn it will separate all the letters and it will show in array format

let x7 = "rocky kiran"
console.log(x7.split(" ")) // it will separate based upon space

// startsWith() and endsWith():

let x8 = "rockykiran"
console.log(x8.startsWith("roc"))// it will check wheather the string starting with given value or not
console.log(x8.endsWith("ran"))  //it will check wheather the string ending with given value or not
console.log(x8.startsWith("nok"))

// indexOf() and lastIndexOf():

let x9 = "rockykiran"
console.log(x9.indexOf("k"))   // it will return the index of first occurance of given value(if not thn it will give -1) 
console.log(x9.lastIndexOf("k"))// it will return the index of last occurance of given value
console.log(x9.indexOf("z"))