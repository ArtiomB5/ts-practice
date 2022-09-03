class User {
    name: string;

    constructor (constructors_name: string) {
        this.name = constructors_name;
    }
}

const user = new User('Test User Name');
console.log(user);

user.name = 'Peter';
console.log(user);

class Admin {
    role: number;
    // "strictPropertyInitialization": false,             
    /* Check for class properties that are declared but not set in the constructor. */
}
const admin = new Admin();
admin.role = 1;
console.log(admin);