// object destructuring

// converting variable into value

let emp={
    eid:'e1',
    ename:'rocky',
    sal:10000,
    job:'manager'
}

let {eid,sal:s}=emp
console.log(eid);
console.log(s);

let {job,loc="location not found"}=emp
console.log(job);
console.log(loc);

// array destructuring

let arr=[10,20,30,40,50,60]
console.log(arr);

let [a,b,c]=arr
console.log(a);//10
console.log(b);//20
console.log(c);//30


