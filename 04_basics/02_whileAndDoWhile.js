// while loop

// it will execute the while loop block if the output condition is true
// it executes the while loop block untill the condition is false
let num=1
while (num<=10) {
    console.log(num);
    num++ 
    // num =num+1  
}

// array
let myArr= ["flash", "ironman", "thor", "batman", "superman"]
let ind=0
while (ind<myArr.length) {
    console.log(myArr[ind]);
    ind++
}

//do-while

//in do-while 1st operation will performed,then checks for the condition 
// hence do-while executes maximum any number of time but minimum one time
let ind1=1
do {
    
    console.log(ind1);
    ind1++
    
} while (ind1<=10);

let ind2=11   
do {
    
    console.log(ind2);   // definately it will execute once 
    ind2++
    
} while (ind2<=10);