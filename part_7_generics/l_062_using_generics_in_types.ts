function getSplitedHalf062<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

const split: <T2>(data: Array<T2>) => Array<T2> = getSplitedHalf062;

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}

const logLine: ILogLine<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1
    },
}