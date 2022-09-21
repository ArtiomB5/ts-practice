const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
}

const success072: HTTPResponse<'success'> = {
    code: 200,
    data: 'done',
}

const error072: HTTPResponse<'failed'> = {
    code: 200,
    data: new Error(),
}

//пример функции с перегрузкой без conditional types
class User072 {
    id: number;
    name: string;
}

class UserPersistend072 extends User072 {
    dbId: string;
}

function getUser072(id: number): User072;
function getUser072(dbId: string): UserPersistend072;
function getUser072(dbIdOrId: string | number): User072 | UserPersistend072 {
    if (typeof dbIdOrId === 'number') {
        return new User072();
    } else {
        return new UserPersistend072();
    }
};
//пример функции с перегрузкой без conditional types


type UserOrUserPersistend<T extends string | number> = T extends number ? User072 : UserPersistend072;

function getUser0722<T extends string | number>(id: T): UserOrUserPersistend<T> {
    if (typeof id === 'number') {
        return new User072() as UserOrUserPersistend<T>;
    } else {
        return new UserPersistend072() as UserOrUserPersistend<T>;
    }
}

const testGetUser0722number = getUser0722(1);
const testGetUser0722string = getUser0722('test string');


