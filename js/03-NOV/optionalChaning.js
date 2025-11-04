// let obj = {
//     profile: {
//         name: "Rohan"
//     }
// }

// console.log(obj.profile.name);
// console.log(obj.profile.city);

// // safe optional chaining
// console.log(obj.info.name);     // undefined.name
// console.log(obj?.info?.name);     // undefined?.name

// console.log("Hello i am line number 13");

// const user = {
//     greet() {
//         console.log("Hello i am a user!");
//     }
// }

// user.greet();
// console.log(user.info?.name)    // safe optional chaining variable access/reference.
// console.log(user.info?.());     // safe optional chaining function call.


let users = [
    {
        name: "govind"
    },
    {},
    null,
    undefined,
    {
        name: "kishan"
    }
]

users.forEach(e => {
    console.log(e?.name);    // govind, undefined, undefined, undefined, kishan
});