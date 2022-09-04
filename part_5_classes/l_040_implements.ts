interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    console.log(...args);
  }
}

interface IPayment {
    pay(paymentID: number): void;
    price?: number;
}

class UserPayment implements IPayment {
    pay(paymentID: number): void {
        throw new Error("Method not implemented.");
    }
    price?: number | undefined;
}