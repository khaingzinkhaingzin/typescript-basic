let neverData: never;
//neverData = "hello"; // never data type (can not assign any data)

const throwError = (message: string) => {
  throw new Error(message);
}; // never type return

// infinitie loop return null type
