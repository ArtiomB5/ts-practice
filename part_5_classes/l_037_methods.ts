enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(constr_id: number) {
        this.id = constr_id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }

    //methods
    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error("The Payment can't be Reversed!");
        } else {
            this.status = PaymentStatus.Reversed;
            this.updatedAt = new Date();
        }
    }
    //methods
}

const payment = new Payment(1);
console.log(payment);

const time = payment.getPaymentLifeTime();
console.log('payment lifetime', time);

payment.unholdPayment();
console.log(payment);