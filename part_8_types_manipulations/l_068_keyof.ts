//keyof - позволяет извлечь ключи из ласса \ интерфейса \ объекта

interface IUser068 {
    name: string;
    age: number;
}

type KeysOfUser = keyof IUser068;

const key: KeysOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user068: IUser068 = {
    name: 'ivan',
    age: 30
}

console.log(getValue(user068, 'age'));
console.log(getValue(user068, 'name'));
