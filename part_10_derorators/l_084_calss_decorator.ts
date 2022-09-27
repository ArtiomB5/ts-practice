interface IUserService084 {
    users: number;
    getUsersInDatabase(): number
}

//реализация декоратора с использованием прототипа метода
function nullUser084(target: Function) {
    target.prototype.users = 0
}

//реализация декоратора с использованием наследования от анонимного класса
function nullUserAdvanced084<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        users = 3
    }
}

// @nullUser084
@nullUserAdvanced084
class UserService084 implements IUserService084 {
    users: number = 1000;
    getUsersInDatabase(): number {
        return this.users
    }
}

console.log(new UserService084().getUsersInDatabase());