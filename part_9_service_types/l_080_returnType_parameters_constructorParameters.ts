class User080 {
    constructor(public id: number, public name: string) {

    }
}

function getData080(id:number): User080 {
    return new User080(id, 'User Name')
}


//получения типа функции
type RT080 = ReturnType<typeof getData080>

//получения типа параметров функции функции в виде кортежа
type PT080 = Parameters<typeof getData080>

//получения типа параметров конструктора класса в виде кортежа
type CP080 = ConstructorParameters<typeof User080>

