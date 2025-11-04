let arr = [1, 2, 3, 4, 5];

let firstThree = arr.slice(0, 3);

console.log(firstThree);

console.log(arr);

let copyArr = arr.slice(0); // end: by default with be n (size of the array)

console.log(copyArr);
console.log(arr);

let copyArr2 = arr.slice(); // start: by default 0, end: n

console.log(copyArr2);


console.log(arr.slice(2));

console.log(arr.slice(-2));

console.log(arr.slice(1, -1));

console.log(arr.slice(2, -2));

// start: 2, end: 3


console.log(arr);

let removedArr = arr.splice(-2, 2);  // 

// n - 2 -> start = 3, end = 2

console.log(removedArr);    // 4, 5
console.log(arr);           // 1, 2, 3

