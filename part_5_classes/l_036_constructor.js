var User036 = /** @class */ (function () {
    function User036(constructors_name_or_age, constructors_age) {
        if (typeof constructors_name_or_age === "string") {
            this.name = constructors_name_or_age;
        }
        else if (typeof constructors_name_or_age === "number") {
            this.age = constructors_name_or_age;
        }
        if (typeof constructors_age === "number") {
            this.age = constructors_age;
        }
    }
    return User036;
}());
var user036_1 = new User036("Test User Name 1");
var user036_2 = new User036();
var user036_3 = new User036(33);
var user036_4 = new User036("Test User Name 2", 33);
