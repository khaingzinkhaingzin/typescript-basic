// highest priority
let anyAnnotation: any = 123;
anyAnnotation = true;
anyAnnotation = "Something";
anyAnnotation.nothingMethod(); // can call no exist method

// can disable strict type checking
let anyData: any = "hello";

// (use unknown insted of any for safe-type)
let unknownData: unknown;
unknownData = true;
unknownData = 42;
// can not call no exist method and property
