"use strict";
class User042 {
    constructor() {
        this.name = 'user042';
        console.log(this.name);
    }
}
class Admin042 extends User042 {
    constructor() {
        super();
        this.name = 'admin042';
        console.log(this.name);
    }
}
//Хронология операций при вызове new Admin042()
//1 - инициализируется свойство name исходного класса
//2 - затем вызывается конструктор класса User042
//3 - инициализируется свойство name класса Admin042
//4 - вызывается конструктор класса Admin042
new Admin042();
class HTTPError extends Error {
    constructor(message, code) {
        super(message);
    }
}
