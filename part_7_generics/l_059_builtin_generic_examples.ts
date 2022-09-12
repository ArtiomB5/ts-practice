const a059: Array<number> = [1, 2, 3];

async function test() {
    const a = await new Promise<number>((resolve, reject) => {
        resolve(1);
    })
}

//позволяет передать словарь с ключем значений - типизация объекта с неограниченым числом строк
const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}