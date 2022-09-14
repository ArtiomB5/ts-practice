"use strict";
const data = [
    { id: 2, name: 'Petia' },
    { id: 1, name: 'Vasia' },
    { id: 3, name: 'Nadia' },
];
const sort = (data, isIncSort) => {
    return data.sort((pv, nv) => isIncSort ? pv.id - nv.id : nv.id - pv.id);
};
console.log(sort(data, true));
