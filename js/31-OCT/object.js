"use strict";

// function defination
function func() {

}

// function expression
const func = function() {

}

const annonymous = () => {
    
}

const arrowFunc = () => {

}


// let user = {
//     name: "anand",
//     age: 22,
//     height: 5.7,
//     hobbies: ["reading", "chess", "cooking"],
//     education: {
//         graduation: true,
//         postGraduation: true
//     },
//     introduce: function() {
//         console.log("Hi my name is ", this.name);
//     }
// }

// const key = "height";

// let user = {};

// user.name = "anand";
// user["age"] = 22;       // dynamic
// user["height"] = 5.7;
// user.introduce = function() {
//     console.log("Hello!");
// }
// user.isMarried = false;

// console.log(user);

// delete user.age;
// delete user["introduce"];

// console.log(user.name);

// for(let key in user) {
//     console.log(key, " : ", user[key]);
// }

// let arrOfKeys = Object.keys(user);
// let arrOfValues = Object.values(user);
// let arrOfEachKeyValue = Object.entries(user);   // [["name", "anand"], ["age", 22], ["height", 5.7]]
// console.log(arrOfKeys);
// console.log(arrOfValues);
// console.log(arrOfEachKeyValue);

// console.log(user.isMarried);

let key = "nameabcd";

// if(user["isMarried"] != undefined) {        // false
//     console.log("property exists - value : ", user["isMarried"]);
// } else {
//     console.log("property does not exists!");
// }

// console.log(user);

// if(key in user) {
//     console.log("property exists - value : ", user[key]);
// } else {
//     console.log("property does not exists!");
// }

let keyOfIntroduction = "introduce";

let user = {
    name: "anand",
    age: 22,
    height: 5.7,
    hobbies: ["reading", "chess", "cooking"],
    education: {
        graduation: true,
        postGraduation: true
    },
    [keyOfIntroduction]: function() {
        console.log("Hi my name is ", this.name);
    }
}

console.log(user);