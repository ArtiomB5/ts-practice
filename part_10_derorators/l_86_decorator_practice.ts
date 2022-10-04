interface IUserService {
    users: number;
    getUsersInDataBase(): number;
}

@setCreatedAtDateFabric()
class UserService086 implements IUserService {
    users: number = 1000;

    getUsersInDataBase(): number {
        return this.users
    }   
}

function setCreatedAtDateFabric() {
    return <T extends {new(...args: any[]): {}}>(constructor: T) => {
        return class extends constructor {
            createdAt = new Date()
        }
    }
}

const now: Date = new Date()
console.log(new UserService086());
