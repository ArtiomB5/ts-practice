"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
//абстрактные классы нельзя инстанциировать
//не получиться использовать new Controller()
//абстрактные классы блокируют инстанциирование
//можно инстанциировать только тех кто от него наследуется
//абстрактные методы говорят нам, что необхадимо
//в наследнике описать одноименный метод в соотвествии
//с сигнатурой родительского класса
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const user049 = new UserController();
user049.handleWithLogs('test req');
