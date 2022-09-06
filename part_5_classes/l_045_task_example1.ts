class Cart {
    #Products: {id: number, product: string, price: number}[] = [];
    #Delivery: {date: Date, address: string} | {date: Date, shopId: number} | null = null;

    addProduct(productId: number, productName: string, productPrice: number) {
        this.#Products = [...this.#Products, {id: productId, product: productName, price: productPrice}]
    }

    removeProduct(productId: number) {
        this.#Products = this.#Products.filter(p => p.id !== productId)
    }

    getProductsSumPrice() {
        let summ = 0;
        this.#Products.forEach(p => summ = summ + p.price);
        return summ
    }

    setDelivery(deliveryDescription: {date: Date, address: string} | {date: Date, shopId: number}) {
        this.#Delivery = deliveryDescription;
    }

    checkout() {
        return this.#Products.length > 0 && this.#Delivery !== null
    }

    getProductsList() {
        return this.#Products
    }

    getDeliveryData() {
        return JSON.stringify(this.#Delivery)
    }
}

const testCart = new Cart();
console.log('products list', testCart.getProductsList());

testCart.addProduct(111, 'Product111', 111)
testCart.addProduct(222, 'Product222', 222)
testCart.addProduct(333, 'Product333', 333)
testCart.addProduct(444, 'Product444', 444)
testCart.setDelivery({date: new Date(), address: 'test address'})
console.log('products list', testCart.getProductsList());
console.log('cart price sum', testCart.getProductsSumPrice());

testCart.removeProduct(444)
console.log('products list', testCart.getProductsList());
console.log('cart price sum', testCart.getProductsSumPrice());
console.log('delivery data', testCart.getDeliveryData());