let arr =[5,'rocky','alibha','alisha','sumit','rath']
console.log(arr);

// another way
//  const arr1=new Array(152,85,89,6,8,"rocky")
//  console.log(arr1);
// console.log(arr.length); // we have length method to get how many values are present
//  console.log(arr[0]); // array giving index position ,so based upon index position we can fetch value
//  console.log(arr[1]);
//  console.log(arr[2]);
//  console.log(arr[3]);

 // push() and pop():

arr.push("bikash") //It is used to insert the elements inside the Array block from the last.
arr.push(true,35)
console.log(arr);
arr.pop()      //It is used to remove an element from the Array block from the last.
arr.pop()
console.log(arr);

// unshift() and shift()

let arr1 =[2,5,58,63,29,543,23]
console.log(arr1);

arr1.unshift("rocky")  //It is used to insert the elements inside the Array block from the first.
arr1.unshift("padhy")
arr1.shift()           //It is used to remove an element from the Array block from the first.
arr1.shift()
console.log(arr1);

//slice() and splice()

let arr2=[10, "hello", null , undefined , false , "rocky"]
console.log(arr2);
console.log( arr2.splice(2,3));// the first argument is which number index position to start
                               // second argument is desired length ( the last element not count)
console.log(arr2);              // in splice() the original array will get effected


let arr3=[10, "hello", null , undefined , false , "rocky"]
console.log(arr3);
console.log(arr3.slice(2,3)); // the first argument is starting index position 
                              // the second argument is ending index position
                              //in slice() the original array will get effected
console.log(arr3);

// includes() and reverse()

//This method is used to verify whether the requested element is present in the array or not , 
//if the requested element is present in the array it will return ‘TRUE’, if not present then it will return ‘FALSE’.

let arr4=[10, "hey", null ,23,5, false , "rocky"]
console.log(arr4.includes("hey"));
console.log(arr4.includes(5));
console.log(arr4.includes(635));

let arr5=arr4.reverse()   //This method is used to reverse the order of the array elements.
console.log(arr5);

// indexOf() and lastIndexOf() and toString() 

let arr6=[10, "hey", null ,23,5, false ,23, "rocky"]
console.log(arr6.indexOf("hey"));    //This method is used to get the index position of the element
                                    // it will give the index value only the first occurance
console.log(arr6.indexOf(false));
console.log(arr6.indexOf("kiran"));  //If the requested element is absent in that array it will return the index position as -1.
console.log(arr6.lastIndexOf(23));   // it will give the index value only the last occurance
console.log(arr6.toString());        // To convert the array elements to strings.

// sort() and join()

let arr7 =[2,5,58,63,29,543,23]
console.log(arr7.sort());   // sorting
console.log(arr7.join());  //It is used to convert the array elements into strings values.


// we have keys() , values(), and entries()
// filter(),find(),flat(),map(),fill()
