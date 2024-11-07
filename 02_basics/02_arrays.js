const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

marvel_heros.concat(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
                            // here we will get array inside another array
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);        //  ['thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//spread operator():

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);  // ['thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
                            // it is used to merge the array or to spread the array

 // flat():
 
 const another_array=[1,2,3,[4,5,6,[552,54],[85,65,]]]

 const real_another_array=another_array.flat(Infinity)
 console.log(real_another_array);  //It is used to reduce the depth of an array.

 //isArray():

 console.log(Array.isArray(all_heros));
 console.log(Array.isArray("rocky")); // it checks it is array or not 

 // from() or of():

 console.log(Array.from("rocky"));// it converts string to array

 let score1=100
 let score2=200
 let score3=300
 let score4="pricky"
console.log(Array.of(score1,score2,score3,score4)); // it is also converts string to array

 