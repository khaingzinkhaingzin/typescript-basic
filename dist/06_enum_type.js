"use strict";
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
})(Role || (Role = {}));
var userRole = Role.USER;
var adminRole = Role.ADMIN;
console.log(userRole);
console.log(adminRole);
var Permission;
(function (Permission) {
    Permission["CREATE"] = "CREATE";
    Permission["READ"] = "READ";
    Permission["UPDATE"] = "UPDATE";
    Permission["DELETE"] = "DELETE";
})(Permission || (Permission = {}));
var readPermission = Permission.READ;
console.log(readPermission);
