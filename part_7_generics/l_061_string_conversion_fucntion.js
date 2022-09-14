"use strict";
function toString(param) {
    if (Array.isArray(param)) {
        return param.toString();
    }
    switch (typeof param) {
        case 'string':
            return param;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return param.toString();
        case "object":
            return JSON.stringify(param);
        default:
            return undefined;
    }
}
console.log(typeof toString(1));
console.log(typeof toString(true));
console.log(typeof toString(['a', 'b']));
console.log(typeof toString({ a: 1 }));
