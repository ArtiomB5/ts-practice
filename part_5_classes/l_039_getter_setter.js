"use strict";
class User039 {
    set login(newLogin) {
        this._login = `user-${newLogin}`;
        this.createdAt = new Date();
    }
    get login() {
        return `user login is ${this._login}`;
    }
}
const user039 = new User039();
user039.login = 'myLogin';
console.log(user039);
console.log(user039.login);
