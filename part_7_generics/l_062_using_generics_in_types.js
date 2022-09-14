"use strict";
function getSplitedHalf062(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
const split = getSplitedHalf062;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    },
};
