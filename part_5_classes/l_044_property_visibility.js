"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        //модификатор указывает, что это приватное свойство - можно изменить только изнутри
        //приватное свойтсво будет только  в конкретном классе - наследниик не смогут его менять
        //приватность работает только в typescript
        this.damages = [];
        //модификатор # из JS и сделает свойство приватным как в TS так и в JS
        _Vehicle_price.set(this, void 0);
    }
    set model(vehicleModel) {
        this._model = vehicleModel;
    }
    get model() {
        return this._model;
    }
    //приватные свойства доступны для сравнения между собой
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f");
    }
    addDamage(damage) {
        this.damages = [...this.damages, damage];
    }
}
_Vehicle_price = new WeakMap();
const vehicleTest = new Vehicle();
vehicleTest.model = 'test model';
vehicleTest.addDamage('test damage1');
vehicleTest.addDamage('test damage2');
console.log(vehicleTest);
console.log(vehicleTest.model);
class EuroTrack extends Vehicle {
    setRun(km) {
        this.run = km / 0.62;
    }
}
const testEuroTrack = new EuroTrack();
testEuroTrack.setRun(1000000);
console.log(testEuroTrack);
