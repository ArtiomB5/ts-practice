class UserService {
    static db: any = 'test db';

    static getUser(id: number) {
        return UserService.db.findById(id);
    }

    //не статичный метод будет доступен только после инстанцирования класса
    create() {
        console.log('created');
    }
}

//к статичному свойству можно обращаться без создания инстанса класса
console.log(UserService.db)

//при инстанцировании мы теряем доступ ко всем статичным свойствам и методам
const inst = new UserService();
inst.create();