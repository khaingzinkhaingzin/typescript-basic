"use strict";
// arrow function
var addFn = function (a, b) {
    return a + b;
};
console.log(addFn(1, 2));
// normal function
function normalAddFun(a, b) {
    return a + b;
}
console.log(normalAddFun(2, 2));
var addFn1 = function (a, b) {
    return a + b;
};
var result = addFn1(2, 3);
console.log(result);
// function with void
var printFn = function (msg) {
    console.log(msg);
};
printFn("This is void function.");
// implementation
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Invalid arguments");
}
var resultNumber = add(3, 3);
var resultString = add("Hello", "World");
console.log(resultNumber);
console.log(resultString);
