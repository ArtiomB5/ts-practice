interface IUserService083 {
    users: number;
    getUsersInDatabase(): number
}

class UserService083 implements IUserService083 {
    users: number = 1000;
    getUsersInDatabase(): number {
        return this.users
    }
}

function nullUser(obj: IUserService083) {
    obj.users = 0
    return obj
}

function logUsers(obj: IUserService083) {
    console.log(obj.users);
    return obj
}

console.log(new UserService083().getUsersInDatabase());
console.log(nullUser(new UserService083()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserService083())).getUsersInDatabase());
console.log(logUsers(logUsers(new UserService083())).getUsersInDatabase());


