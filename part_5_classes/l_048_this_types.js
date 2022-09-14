"use strict";
class UserBuilder {
    setName(newName) {
        this.name = newName;
        return this;
    }
    //Это тайпгард, который проверяет является ли объект, с которым мы работаем, админ билдером
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const resUser = new UserBuilder().setName('Test User Name');
console.log(resUser);
const resAdmin = new AdminBuilder().setName('Test Admin Name');
console.log(resAdmin);
const user048 = new UserBuilder();
if (user048.isAdmin()) {
    console.log(user048);
}
else {
    console.log(user048);
}
