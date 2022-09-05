"use strict";
class User036 {
    constructor(constructors_name_or_age, constructors_age) {
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
}
const user036_1 = new User036("Test User Name 1");
const user036_2 = new User036();
const user036_3 = new User036(33);
const user036_4 = new User036("Test User Name 2", 33);
