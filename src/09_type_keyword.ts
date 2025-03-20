// define custom type with type keyword
type stringOrNumber = string | number;
const str: stringOrNumber = "ktz";
// console.log(str);

type Person = {
  name: string;
  age: number;
  status: "active" | "inactive";
};

const personOne: Person = {
  name: "Ktz",
  age: 28,
  status: "active",
};
console.log(personOne);
