class User039 {
    _login: string;
    password: string;
    createdAt: Date;

    set login(newLogin: string) {
        this._login = `user-${newLogin}`;
        this.createdAt = new Date();
    }

    get login() {
        return `user login is ${this._login}`
    }

    //getter and setter can't be async
    //methods can be async
}

const user039 = new User039();
user039.login = 'myLogin';
console.log(user039);
console.log(user039.login);