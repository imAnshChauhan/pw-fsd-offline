// let user = {
//     name: "govind",
//     age: 22,
//     skills: ["coding", "gaming"],
//     config: {

//     }   
// }

// const key = "age";

// let user = {};
// user.name = "govind";   // static

// user[key] = 22;       // dynamic 

// user.func = function() {
//     console.log("greet!");
// }

// console.log(user);
// user.func();

// // delete user.name;
// // delete user.func;
// // delete user[key];

// // console.log(user);

// console.log("======== START =========");
// for(let key in user) {      // for in loop
//     console.log("key : " + key);
    
//     console.log("user[key] : " + user[key]);
//     console.log("user.key : " + user.key);

//     console.log("===============")
// }

let fName = "greet";
let key = "age";

let student = {
    [key]: 22,
    name: "Riya",
    marks: {
        math: 85,
        science: 92,
        english: 88
    },
    [fName]: function() {
        console.log("Hello!");
    }
}

console.log(student);

student.greet();    // name -> static -> .
student[fName];     // variable -> dynamic -> []