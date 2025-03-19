enum Role {
  USER,
  ADMIN,
}

const userRole = Role.USER;
const adminRole = Role.ADMIN;
console.log(userRole);
console.log(adminRole);

enum Permission {
  CREATE = "CREATE",
  READ = "READ",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}
const readPermission = Permission.READ;
console.log(readPermission);
