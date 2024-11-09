// for loop:

// in for loop 1st vd(variable declartion) and vi execute once and then checks for the condition ,if the condition output is true , thn it perform the iteration and letter perform updation
// once the updation over , it repeat the process to perform many iteration untill the output condition false
// condition , operation,updation

// print 1 to 10
for (let i = 1; i < 10; i++) {
    const element = i;
    console.log(element);  
}
//console.log(element); // we can't access the local variable in outside

// inner loop

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
    //    console.log(`inner loop value : ${j} and inner loop ${i}`);
        console.log(i + "*" + j + "=" + i*j);     
    }
}

// array

let myArr=["batman", "flash", "ironman", "thor"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element); 
}

// break and continue

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        break // after getting the our expection value , it will go to the outside loop(break)
    
    }
    console.log(element);
}
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        console.log(i +" skipped");
        
      continue   // if we using continue keyword , thn it will skip once (here it skipped 5)
    }
    console.log(element);
}
//  5 times rocky printing
for (let i = 1; i < 10; i++) {
   
    console.log("rocky");  
}