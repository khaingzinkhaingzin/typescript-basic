"use strict";
// highest priority
var anyAnnotation = 123;
anyAnnotation = true;
anyAnnotation = "Something";
anyAnnotation.nothingMethod(); // can call no exist method
// can disable strict type checking
var anyData = "hello";
// (use unknown insted of any for safe-type)
var unknownData;
unknownData = true;
unknownData = 42;
// can not call no exist method and property
