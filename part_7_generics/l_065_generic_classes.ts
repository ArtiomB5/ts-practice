class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        this.data = data;
        this.error = error;
    }
}

const res = new Resp<string, number>('data', 0);

class HTTPResp<F> extends Resp<string, number> {
    code: F;

    setCode(code: F) {
        this.code = code;
    }
}