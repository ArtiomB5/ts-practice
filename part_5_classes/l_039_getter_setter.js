var User039 = /** @class */ (function () {
    function User039() {
    }
    Object.defineProperty(User039.prototype, "login", {
        get: function () {
            return "user login is " + this._login;
        },
        set: function (newLogin) {
            this._login = "user-" + newLogin;
            this.createdAt = new Date();
        },
        enumerable: false,
        configurable: true
    });
    return User039;
}());
var user039 = new User039();
user039.login = 'myLogin';
console.log(user039);
console.log(user039.login);
