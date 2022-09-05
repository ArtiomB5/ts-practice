"use strict";
class User {
    constructor(constructors_name) {
        this.name = constructors_name;
    }
}
const user = new User('Test User Name');
console.log(user);
user.name = 'Peter';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
console.log(admin);
