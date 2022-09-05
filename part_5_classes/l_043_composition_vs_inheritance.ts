//класс доменной области "Пользователь"
class User043 {
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }
}

class UsersList {
    users: User043[] = [];

    push(user: User043) {
        this.users = [...this.users, user]
    }
}

const user1 = new User043('User1');
const user2 = new User043('User2');

const users = new UsersList();
users.push(user1);
users.push(user2);

console.log(users);

//класс доменной области "Платеж"
class Payment043 {
    date: Date = new Date();
}

//composition
class UserWithPayment {
    user: User043;
    payment: Payment043;

    constructor(newUser: User043, newPayment: Payment043) {
        this.user = newUser;
        this.payment = newPayment;
    }
}

const userWithPaymentTest = new UserWithPayment(new User043('test user 043'), new Payment043);
console.log(userWithPaymentTest);


//Наследование используется в рамках одной доменной области
//При переходе - взоимодействии более чем с одной доменной областью следут использовать композицию