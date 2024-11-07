// object literal

let sym=Symbol("key1")
let obj={
      name:"rocky",
      [sym]:"this is symbol",   // this will show like symbol
      id:2,
      Boolean:true,
      null:null,
      arr:[10,20,30],
      BigInt:10n,
      obj1:{
        designation:"developer"
      },
      demo:function(){
        console.log("hello")
      }
    }
    console.log(obj);
    
// console.log(obj.name);
// console.log(obj.obj1.designation);
// console.log(obj.demo());
// console.log(obj["arr"]); // we can get value usingvlike this also
// console.log(obj.obj1["designation"]);
console.log(obj[sym]);

let obj1={
    name:"rocky",
    id:1
}
console.log(obj1);

// updating existing value

obj1.id=2;
console.log(obj1);

// add a new key and value pair

obj1.email="rocky@gmail.com"
console.log(obj1);

// delete key and value pair

delete obj1.email
console.log(obj1);

//concat or merge two object

let obj2={
    age:22,
    location:"odisha"
}
let obj4={
    gender:"male"
}
let obj3=Object.assign(obj1,obj2,obj4)
console.log(obj3);
console.log(obj3==obj1);

// keys() and values() and entries()

let obj5=Object.keys(obj3)
console.log(obj5);        // it will give the only keys
                          // and it will return array format
let obj6=Object.values(obj3)                          
console.log(obj6);        // it will give the only values
                          // and it will return array format
let obj7=Object.entries(obj3)
console.log(obj7);        // it will give the both keys and values
                          // and it will return array format
 
 // seal(): 

let obj8={
    name:"kiran",
    id:5
}
Object.seal(obj8)
console.log(Object.isSealed(obj8)); // it will check wheather the object is sealed or not, if sealed thn true else false

obj8.lastName="kumar"
console.log(obj8); // the new key and value can not be updated or added inside the object
obj8.name="Priyu"
console.log(obj8);   // the existing key and value can be updated inside the object

// freeze():

let obj9={
    name:"kiran",
    loc:"odisha",
    age:22
}
Object.freeze(obj9)
console.log(Object.isFrozen); // it will check wheather the object is freeze or not, if freeze thn true else false
obj9.lastName="alibha"
console.log(obj9);      //  the new key and value can not be updated or added inside the object
obj9.age=20
console.log(obj9);     //the existing key and value also can not be updated

// hasOwn() and hasOwnProperty():
// both working process are similiar
let emp={
             name:'rocky',
            id:1,
            gender:'male',
            yop:2023,
            sal:20000,
        }
console.log(emp);
console.log(Object.hasOwn(emp,"name"));  //hasOwn method is used ,if the user want to check that key(properties) are persent or available in the given object or not
console.log(Object.hasOwn(emp,"dno"));   //if not present it give output as false otherwise it give true

//is():

// it compare given two key values are similiar or not
let e1={
        name:'rocky',
        eid:'e1',
        sal:2000,
        job:'manager'
    }
 let e2={
        name:'alibha',
        eid:'e2',
        sal:5000,
        job:'clerk'
    }
let e3={
        name:'kiran',
        eid:'e3',
        sal:2000,
        job:'manager'
    }
console.log(Object.is(e1.job,e2.job)); // false
console.log(Object.is(e1.job,e3.job));// true
console.log(Object.is(e3.sal,e1.sal));// true

// defineProperty() and defineProperties():

// to add a single key and value pair inside the existing object
let user={
                 name:'rocky',
                id:1,
                gender:'male',
                yop:2023,
                sal:20000,
            }
    console.log(user)
Object.defineProperty(user, 'property1', {
  value: 42,
});
console.log(user);
