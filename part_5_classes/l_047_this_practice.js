"use strict";
class Payment047 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment047();
const user047 = {
    id: 1,
    //тк метод getDate сформирован с использованием this то 
    //this, формирующий getDate в строке 13, ссылается на сам объект user047 - контекст класса потерян
    //это можно исправить с помощью bind - передав туда объект, контекст которого следует использовать
    paymentDate: p.getDate.bind(p),
    //в данном случе не испольхзуется bind тк при реализации методов через стредочные функции
    //контекст класса всегда привязан к методу, реализованному таким образом - см троку 8
    paymentDateArrow: p.getDateArrow,
};
console.log(p.getDate());
console.log(user047.paymentDate());
console.log(user047.paymentDateArrow());
class PaymentPersistent extends Payment047 {
    save1() {
        return super.getDate();
        //return super.getDateArrow() работать не будет
    }
    save2() {
        return this.getDateArrow();
    }
}
console.log(new PaymentPersistent().save1());
console.log(new PaymentPersistent().save2());
