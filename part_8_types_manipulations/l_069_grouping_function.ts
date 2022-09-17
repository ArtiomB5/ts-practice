interface Data069 {
    group: number;
    name: string;
}

const data069: Data069[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'}
]

function group069 <T, K extends keyof T>(data: T[], groupingBy: K) {
    const sortingParamsArray = new Set(data.map((i: T) => i[groupingBy]));
    const sortedData: {[key: string]: T[]} = {}
    for (let key of sortingParamsArray) {
        sortedData[key as keyof typeof sortedData] = []
    }
    data.forEach(i => sortedData[String(i[groupingBy])].push(i))
    return sortedData
}

console.log(group069(data069, 'group'));

interface IGroup<T> {
    [key: string]:T[] 
}

type KeyType069 = string | number | symbol;

function group069a <T extends Record<KeyType069, any>>(array: T[], key: keyof T): IGroup<T> {
    return {}
}