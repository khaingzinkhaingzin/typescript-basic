// use for type combine
// type TypeA = { name: string };
// type TypeB = { age: number };

// type CombinedType = TypeA & TypeB;

type People = {
  name: string;
  age: number;
};
type AdminRole = {
  role: "admin";
};
type Admin = People & AdminRole;
const admin: Admin = {
  name: "ktz",
  age: 28,
  role: "admin",
};

console.log(admin);
