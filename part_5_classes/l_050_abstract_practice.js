"use strict";
class Logger050 {
    printDate(date) {
        this.log(date);
    }
}
class RealLogger extends Logger050 {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const testLogger = new RealLogger();
testLogger.logWithDate('test msg');
