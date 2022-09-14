"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const resString = logMiddleware('10');
const resNumber = logMiddleware(10);
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 2, 3]);
