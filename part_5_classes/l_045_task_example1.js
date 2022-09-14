"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CartFI_Products, _CartFI_Delivery;
class CartFI {
    constructor() {
        _CartFI_Products.set(this, []);
        _CartFI_Delivery.set(this, null);
    }
    addProduct(productId, productName, productPrice) {
        __classPrivateFieldSet(this, _CartFI_Products, [
            ...__classPrivateFieldGet(this, _CartFI_Products, "f"),
            { id: productId, product: productName, price: productPrice },
        ], "f");
    }
    removeProduct(productId) {
        __classPrivateFieldSet(this, _CartFI_Products, __classPrivateFieldGet(this, _CartFI_Products, "f").filter((p) => p.id !== productId), "f");
    }
    getProductsSumPrice() {
        let summ = 0;
        __classPrivateFieldGet(this, _CartFI_Products, "f").forEach((p) => (summ = summ + p.price));
        return summ;
    }
    setDelivery(deliveryDescription) {
        __classPrivateFieldSet(this, _CartFI_Delivery, deliveryDescription, "f");
    }
    checkout() {
        return __classPrivateFieldGet(this, _CartFI_Products, "f").length > 0 && __classPrivateFieldGet(this, _CartFI_Delivery, "f") !== null;
    }
    getProductsList() {
        return __classPrivateFieldGet(this, _CartFI_Products, "f");
    }
    getDeliveryData() {
        return JSON.stringify(__classPrivateFieldGet(this, _CartFI_Delivery, "f"));
    }
}
_CartFI_Products = new WeakMap(), _CartFI_Delivery = new WeakMap();
const testCart = new CartFI();
console.log("products list", testCart.getProductsList());
testCart.addProduct(111, "Product111", 111);
testCart.addProduct(222, "Product222", 222);
testCart.addProduct(333, "Product333", 333);
testCart.addProduct(444, "Product444", 444);
testCart.setDelivery({ date: new Date(), address: "test address" });
console.log("products list", testCart.getProductsList());
console.log("cart price sum", testCart.getProductsSumPrice());
testCart.removeProduct(444);
console.log("products list", testCart.getProductsList());
console.log("cart price sum", testCart.getProductsSumPrice());
console.log("delivery data", testCart.getDeliveryData());
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(date, shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products = [...this.products, product];
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Корзина пуста');
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки');
        }
        return { success: true };
    }
}
const newCart = new Cart();
newCart.addProduct(new Product(1, 'Cookie', 10));
newCart.addProduct(new Product(2, 'Cake', 30));
newCart.addProduct(new Product(3, 'Chocolate', 20));
newCart.deleteProduct(1);
newCart.setDelivery(new HomeDelivery(new Date(), 'home address'));
console.log(newCart.getSum());
console.log(newCart.checkOut());
