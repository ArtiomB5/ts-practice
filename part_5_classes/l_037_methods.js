"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(constr_id) {
        this.id = constr_id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    //methods
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error("The Payment can't be Reversed!");
        }
        else {
            this.status = PaymentStatus.Reversed;
            this.updatedAt = new Date();
        }
    }
}
const payment = new Payment(1);
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log('payment lifetime', time);
payment.unholdPayment();
console.log(payment);
