interface Role071 {
    name: string;
}

interface IPermission {
    endDate: Date;
}

interface User071 {
    name: string;
    roles: Role071[];
    permission: IPermission;
}

const user071: User071 = {
    name: 'Username',
    roles: [],
    permission: {
        endDate: new Date(),
    }
}

const name071 = user071['name'];
//Работа с кодом JS

type rolesType1 = User071['roles'];
//Работа с типами

//typeof конвертирует объект в его тип
//только использая typeof можно обратиться к типу через переменную
//если roles будет объявлен через let без указания типа
//то работать не будет т.к.
//при использовании let roles будет иметь тип string
//при использовании const roles будет иметь тип string literal - 'roles'
//типизация roles объявленного через let: let roles: 'roles' = 'roles';
const rolesExample = 'roles'
type rolesType2 = User071[typeof rolesExample]

//способ вытащить тип из массива 
type roleType = User071['roles'][number];
type dateType = User071['permission']['endDate'];

//создание юнион типа конвертированием в константу
//и использованием [number]
const roles = ['user', 'admin', 'supersuer'] as const;
type rolesType3 = typeof roles[number];

