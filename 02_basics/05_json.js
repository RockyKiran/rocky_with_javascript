// how to create JSON

[ {
    "name":"rocky",
    "id":1,
    "rollNo":[10,20,30],
  },
  {
     "name":"kiran",
     "id":2,
    "rollNo":[40,50,60],
  }
]

let obj={
    name:"rocky",
    id:1,
    branch:"CSE",
    yop:2023
  }
console.log(obj);

// convert object to JSON

let obj2=JSON.stringify(obj)
console.log(obj2);

// convert JSON to object

let obj3=JSON.parse(obj2)
console.log(obj3);

