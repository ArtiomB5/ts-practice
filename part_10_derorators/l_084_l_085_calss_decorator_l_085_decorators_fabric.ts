interface IUserService084 {
    users: number;
    getUsersInDatabase(): number
}

//реализация декоратора с использованием прототипа метода
function nullUser084(target: Function) {
    target.prototype.users = 0
}

//реализация декоратора с использованием наследования от анонимного класса
function setUserAdvanced084<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        users = 3
    }
}

//сработают если у класса не указано инициализируещее значение у свойсвта users
// @nullUser084
// @setUserAdvanced084 

//сработают даже если у класса указано инициализируещее значение у свойсвта users
// @setUsersFabric(99)
@setUsersAdvancedFabric(777)
class UserService084 implements IUserService084 {
    users: number = 1000;
    getUsersInDatabase(): number {
        return this.users
    }
}

//фабрика декораторов
function setUsersFabric(users: number) {
    return (target: Function) => {
        target.prototype.users = users;
    }
}

//фабрика декораторов
function setUsersAdvancedFabric(users: number) {
    return <T extends {new(...args: any[]): {}}>(constructor: T) => {
        return class extends constructor {
            users = users
        }
    }
}

console.log(new UserService084().getUsersInDatabase());