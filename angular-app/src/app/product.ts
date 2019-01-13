import { DbProduct } from './dbProduct';

export class Product {
    id: number;
    name: string;
    category: string;
    price: number;
    details: string;
    img: string;
    fav: boolean;
    cart: boolean;

    constructor(dbProduct: DbProduct, fav: boolean, cart: boolean) {    
        this.id = dbProduct.id;
        this.name = dbProduct.name;
        this.category = dbProduct.category;
        this.price = dbProduct.price;
        this.details = dbProduct.details;
        this.img = dbProduct.img;
        this.fav = fav;
        this.cart = cart;
    }
  }