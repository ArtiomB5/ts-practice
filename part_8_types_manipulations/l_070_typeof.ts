let strOrNum: string | number;

if (Math.random() > 0.5) {
    strOrNum = 0.5
} else {
    strOrNum = 'str'
}

//использование typeof в рантайме для сужения типов
if (typeof strOrNum === 'string') {
    console.log('string', strOrNum);
} else {
    console.log('number', strOrNum);
}

//использование typeof для описания типов (типизации)
let str20rNum: typeof strOrNum; //string / number

const user070 = {
    name: 'User Name'
};

type keyOfUser = keyof typeof user070; //keyof не работает c объектами

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction;