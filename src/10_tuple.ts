// different types, fix length array
type ColorTuple = [number, number, number];
const redColor: ColorTuple = [255, 0, 0];
const [red, green, blue] = redColor;
console.log(red);

type strNumBoo = [string, number, boolean];
const randomTuple: strNumBoo = ["hello", 9, true];
const [strr, num, boo] = randomTuple;
console.log(strr, num, boo);
