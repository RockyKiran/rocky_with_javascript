// for of
// ["","",""]
//[{},{},{}]
let number=[1,2,3,4,5,6]
for (const num of number) {
    console.log(num);       // here we can iterate the array elements using for-of
}

// using map

let map = new Map()    // it stores the data in key and value pair
                      // it stores the only unique key(key not repeated nut value can be repeated)  
                      // if we store the duplicate key , thn the value will be replaced by the new one                    
                       // inside the map object we have so many mathods do perform some specific opearation
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('UK',"United KingDom")
// map.set('IN',"India")   // we cant store duplicate key
console.log(map);

// using for-of to iterate map object

for (const [key,value] of map) {
    console.log(key +" => "+value);   
}

//iterate normal object using for-of 

let student={
    name:"rocky",
    id:1,
}

// for (const stu of student) {
    // console.log(stu);        // here we can't iterate the normal object using for-of loop
    
// }
// here we can't iterate the normal object using for-of loop to overcome this we using for-in loop to iterate normal object

// for-in loop  :
// using for-in iterate normal object  below


let user={
    name:"rocky",
    id:1,
    age:25,
    gender:"male"
}
console.log(user);

for (const key in user) {
        console.log(key);   // here we will get only keys of the object
        
}

for (const key in user) {
    console.log(user[key]);  // and here we will get only values of the object
    
}

// can we iterate array using for-in loop

let arr=["java","python","html","css","sql"]

for (const key in arr) {
   console.log(key);     //here we will get the index values  
   console.log(arr[key]);
    
}
// using for-in loop iterate the map object

let map1 = new Map()
map1.set('IN',"India")
map1.set('USA',"United States Of America")
map1.set('Fr',"France")
map1.set('UK',"United KingDom")
console.log(map1);

for (const key in map1) {
    console.log(key);    // here we can't iterate the map object using for-in loop to overcome this we using for-in loop
  
}

let coding=["rocky","sumit","pricky","rath", "alibha"]
console.log(coding);
coding.forEach(function(val) {       // here foreach accepts one call back function
    console.log(val);
    
})

// using arrow function inside foreach

let coding1=["rocky","sumit","pricky","rath"]
console.log(coding1);
coding1.forEach((val,ind,arr)=>{
       console.log(val, ind,arr);
       
}) 
// using multiple objects inside array (foreach)

let myCoading=[
    {
        name:"rocky",
        lang:"odia"
    },
    {
        name:"niks",
        lang:"english"
    },
    {
        name:"pricky",
        lang:"telugu"
    }
]

console.log(myCoading);
myCoading.forEach((item)=>{
    console.log(item);
    console.log(item.name);
    console.log(item.lang);
    
    
    
})