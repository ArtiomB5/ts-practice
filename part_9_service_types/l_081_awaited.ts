type A081 = Awaited<Promise<string>>
type A2081 = Awaited<Promise<string>>

interface IMenu {
    name: string;
    url: string;
}

async function getMenu081(): Promise<IMenu[]> {
    return [{name: 'Name string', url: 'Url string'}]
}

type R = Awaited<ReturnType<typeof getMenu081>>

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x]
}