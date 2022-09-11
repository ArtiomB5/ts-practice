abstract class Logger050 {
    abstract log(message: any): void

    printDate(date: Date) {
        this.log(date)
    }
}

class RealLogger extends Logger050 {
    log(message: any): void {
        console.log(message);
    }

    logWithDate(message: string) {
        this.printDate(new Date())
        this.log(message)
    }
}

const testLogger = new RealLogger()
testLogger.logWithDate('test msg')