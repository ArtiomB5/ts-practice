class Vehicle {
    //явное указание с помощью модификатора, что это публичное свойство - равносильно записи make: string
    //свойство доступно из вне
    public make: string;

    //модификатор указывает, что это приватное свойство - можно изменить только изнутри
    //приватное свойтсво будет только  в конкретном классе - наследниик не смогут его менять
    //приватность работает только в typescript
    private damages: string[] = [];
    private _model: string;

    //данный модификатор позволяет изменять свойство изнутри, но в отличии от модификтаора protected это может делать
    //метод объекта, который унаследовался от этого класса
    protected run: number;

    //модификатор # из JS и сделает свойство приватным как в TS так и в JS
    #price: number;

    set model(vehicleModel: string) {
        this._model = vehicleModel
    }

    get model() {
        return this._model
    }

    //приватные свойства доступны для сравнения между собой
    isPriceEqual(v: Vehicle) {
        return this.#price === v.#price
    }

    addDamage(damage: string) {
        this.damages = [...this.damages, damage]
    }
}

const vehicleTest = new Vehicle()
vehicleTest.model = 'test model'
vehicleTest.addDamage('test damage1')
vehicleTest.addDamage('test damage2')

console.log(vehicleTest);
console.log(vehicleTest.model);

class EuroTrack extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62
    }

    // setDamages() {
    //     this.damages - error
    // }
}

const testEuroTrack = new EuroTrack();
testEuroTrack.setRun(1000000);
console.log(testEuroTrack);
