let obj = {
    name: "sanjay", // read-only
    age: 25
}

// control the write/update operation
Object.defineProperty(obj, 'name', {
    writable: false
});

obj.name = "govind";    // silent not allowed

console.log(obj);

// restricts you to delete the name property from the obj
Object.defineProperty(obj, 'name', {
    configurable: false
});

delete obj.name;

console.log(obj);

// should not be able to iterate over it
Object.defineProperty(obj, 'age', {
    enumerable: false
});

for(let key in obj) {
    console.log(key);
}