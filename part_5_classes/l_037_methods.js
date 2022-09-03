var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment(constr_id) {
        this.id = constr_id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    //methods
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.createdAt.getTime();
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status === PaymentStatus.Processed) {
            throw new Error("The Payment can't be Reversed!");
        }
        else {
            this.status = PaymentStatus.Reversed;
            this.updatedAt = new Date();
        }
    };
    return Payment;
}());
var payment = new Payment(1);
console.log(payment);
var time = payment.getPaymentLifeTime();
console.log('payment lifetime', time);
payment.unholdPayment();
console.log(payment);
