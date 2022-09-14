"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    //не статичный метод будет доступен только после инстанцирования класса
    create() {
        console.log('created');
    }
}
UserService.db = 'test db';
//к статичному свойству можно обращаться без создания инстанса класса
console.log(UserService.db);
//при инстанцировании мы теряем доступ ко всем статичным свойствам и методам
const inst = new UserService();
inst.create();
