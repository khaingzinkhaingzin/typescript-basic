let stringOrNumber: number | string = "Hello";

// common used (literal union)
//literal 's priority is lower than primitive
let orderStatus: "pending" | "delivered" | "success" = "pending";

console.log(orderStatus);
