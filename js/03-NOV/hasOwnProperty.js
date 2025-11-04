// let person = {
//     name: "john"            // child property
// }

// person.__proto__.age = 22;  // parent/inherited property


// // for(let key in person) {
// //     console.log(key);
// // }

// // console.log(person.hasOwnProperty("name"));
// // console.log(person.hasOwnProperty("age"));


// console.log("name" in person);
// console.log("age" in person);
// console.log("gender" in person);

// console.log(person);
// console.log(person.age);

// person.age = 30;

// console.log(person);
// console.log(person.age);

// if("name" in person) {
//     console.log(person.name);
// }

let arr = [1, 2, 3];

console.log("length" in arr);