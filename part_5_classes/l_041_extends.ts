type PaymentStatusType = 'new' | 'paid';

class Payment041 {
    id: number;
    status: PaymentStatusType = 'new';

    constructor (paymentId: number) {
        this.id = paymentId;
    }

    pay() {
        this.status = 'paid';
    }
}

const payment041 = new Payment041(1);
console.log('payment041', payment041);

payment041.pay();
console.log('Payment with paid status', payment041);

class PersistedPayment041 extends Payment041 {
    databaseId: number;
    paidAt: Date;

    constructor () {
        const id = Math.random();
        super(id);
        //super в данном случае используется тк происходит переопределение конструктора
        //тут он дает доступ к конструктору класса от которого наследовались
    }

    save () {
        console.log('saved');
    }

    //модификатор override говорит, что происходит переопределение метода pay
    //этот модификатор сообщит нам если в классе от которого наследуемся был удален метод,
    //который мы переопределяем 
    override pay(paymentDate?: Date) {
        super.pay();
        //в данном случае происходит переопределение метода pay
        //super дает доступ к методам класса от которого наследуемся
        //данная запись позволяет выполнить метод pay, что позволит не описывать его повторно

        if (paymentDate) {
            this.paidAt = paymentDate;
        }
    }
}