class CartFI {
  #Products: { id: number; product: string; price: number }[] = [];
  #Delivery:
    | { date: Date; address: string }
    | { date: Date; shopId: number }
    | null = null;

  addProduct(productId: number, productName: string, productPrice: number) {
    this.#Products = [
      ...this.#Products,
      { id: productId, product: productName, price: productPrice },
    ];
  }

  removeProduct(productId: number) {
    this.#Products = this.#Products.filter((p) => p.id !== productId);
  }

  getProductsSumPrice() {
    let summ = 0;
    this.#Products.forEach((p) => (summ = summ + p.price));
    return summ;
  }

  setDelivery(
    deliveryDescription:
      | { date: Date; address: string }
      | { date: Date; shopId: number }
  ) {
    this.#Delivery = deliveryDescription;
  }

  checkout() {
    return this.#Products.length > 0 && this.#Delivery !== null;
  }

  getProductsList() {
    return this.#Products;
  }

  getDeliveryData() {
    return JSON.stringify(this.#Delivery);
  }
}

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
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(date: Date, public shopId: number) {
    super(new Date());
  }
}

type DeliveryType = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryType;

  public addProduct(product: Product): void {
    this.products = [...this.products, product];
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    return this.products
        .map((p: Product) => p.price)
        .reduce((p1: number, p2: number) => p1 + p2)
  }

  public setDelivery(delivery: DeliveryType): void {
    this.delivery = delivery;
  }

  public checkOut() {
    if (this.products.length === 0) {
        throw new Error('Корзина пуста')
    }
    if (!this.delivery) {
        throw new Error('Не указан способ доставки')
    }
    return { success: true};
  }
}

const newCart = new Cart();
newCart.addProduct(new Product(1, 'Cookie', 10))
newCart.addProduct(new Product(2, 'Cake', 30))
newCart.addProduct(new Product(3, 'Chocolate', 20))
newCart.deleteProduct(1)
newCart.setDelivery(new HomeDelivery(new Date(), 'home address'))
console.log(newCart.getSum())
console.log(newCart.checkOut())