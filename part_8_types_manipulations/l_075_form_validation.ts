interface IForm {
    name: string
    password: string
    age: number
}

const form075: IForm = {
    name: 'User Name',
    password: '123',
    age: 20
}

// type FormValidationType<T> = {
//     [Prop in keyof T]: {isValid: boolean, errorMessage?: string}
// }

type ValidationType<T> = {
    [K in keyof T]: {isValid: true} | {isValid: false, errorMessage: string}
}

const formValidation:ValidationType<IForm>  = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Must be longer than 5 symbols'},
    age: {isValid: true},
}
