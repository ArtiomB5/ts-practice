interface User {
    name: string;
    age?: number;
    email: string;
}

type partial078 = Partial<User>
const partialTest078: partial078 = {}

type required078 = Required<Readonly<User>>
const requiredTest078: required078 = {
    name: 'name string',
    age: 0,
    email: 'email string'
}

