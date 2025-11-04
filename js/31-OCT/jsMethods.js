// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = ["a", "b"];
// let arr4 = [6, "abcd", 7.4];
// let arr5 = [true, () => {}];

// let ans = arr1.concat(arr2, arr3, arr4, arr5);

// console.log(ans);


// let arr = [1, 2, 3, 4, 5];

// arr.reduce((acc, curr) => {
//     console.log(acc + " : " + curr);
//     return acc + curr;
// }, 0);

// let strs = ["a", "b", "c", "d"];

// const rsStr = strs.reduceRight((acc, curr) => {
//     return acc + curr;
// }, "");

// console.log(rsStr);


// 1 way

// let rs = []

// nestedArr.forEach(e => {
    //     rs = [...rs, ...e];
    // })
    
    // console.log(rs);
    


// let nestedArr = [[1, 2], [3, 4], [5, 6]];
    
// // [1, 2, 3, 4, 5, 6]

// const rs = nestedArr.reduceRight((acc, curr) => {
//     console.log(curr);
//     console.log(acc);
    
//     console.log(acc.concat(curr));

//     console.log("================");
//     // return [...acc, ...curr];

//     return acc.concat(curr);    // [1, 2], [3, 4] => [1, 2, 3, 4]
// }, []);

// console.log(rs);


let arr = [2, 4, 6, 8, 9];

function isEven(arr) {
    return arr.every((eachElement) => {            // [true, true, true, true, false]
        return eachElement % 2 == 0;        // 10 % 2 == 0
    });
}

function arePos(arr) {
    return arr.every((eachElement) => eachElement > 0);    // [true, true, true, true, false]
}

function isAtleastOneNeg(arr) {
    return arr.some((eachElement) => eachElement < 0);      // [false, false, false, false, false]
}


let marks1 = [40, 50, 60, 70, 80];   // < 50 -> fail // 1 -> fail -> whole class failed
let marks2 = [50, 50, 60, 70, 80];

function isThePass(marks) {
    return marks.every(eachMark => {
        return eachMark >= 50;
    })
}

console.log(isThePass(marks1));
console.log(isThePass(marks2));