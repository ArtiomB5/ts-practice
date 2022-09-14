const data = [
    {id: 2, name: 'Petia'},
    {id: 1, name: 'Vasia'},
    {id: 3, name: 'Nadia'},
]

interface ID {
    id: number
}

const sort = <T extends ID>(data: T[], isIncSort: boolean = true): T[] => {
    return data.sort((pv, nv) => {
        if (isIncSort) {
            return pv.id - nv.id
        } else {
            return nv.id - pv.id
        }
    })
}

console.log('isIncSort = true', sort(data))
console.log('isIncSort = false', sort(data, false))
