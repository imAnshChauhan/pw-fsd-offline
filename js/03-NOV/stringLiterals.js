// let name = "adarsh";
// let age = 22;

// console.log("My name is", name, " - and my age is", age);

// console.log('My name is' + name);

// // back tick -> string literals
// console.log(`my name is ${name} - and my age is ${age}`);

let key = "user";

let obj = {
    [`${key}_id`]: 1,
    [`${key}_name`]: "govind"
}

console.log(obj);