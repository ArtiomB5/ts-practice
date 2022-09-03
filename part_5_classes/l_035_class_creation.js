var User = /** @class */ (function () {
    function User(constructors_name) {
        this.name = constructors_name;
    }
    return User;
}());
var user = new User('Test User Name');
console.log(user);
user.name = 'Peter';
console.log(user);
