// arrow function
const addFn = (a: number, b: number): number => {
  return a + b;
};
console.log(addFn(1, 2));

// normal function
function normalAddFun(a: number, b: number): number {
  return a + b;
}
console.log(normalAddFun(2, 2));

// function type decleration
type AddFn = (a: number, b: number) => number;
const addFn1: AddFn = (a, b) => {
  return a + b;
};
const result = addFn1(2, 3);
console.log(result);

// function with void
const printFn = (msg: string): void => {
  console.log(msg);
};
printFn("This is void function.");

// function overloading
//signature
function add(a: number, b: number): number;
function add(a: string, b: string): string;
// implementation
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Invalid arguments");
}
const resultNumber = add(3, 3);
const resultString = add("Hello", "World");
console.log(resultNumber);
console.log(resultString);
