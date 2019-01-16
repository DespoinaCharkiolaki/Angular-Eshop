import { DbProduct } from './mock-products';

export class Product {
    id: number;
    name: string;
    category: string;
    price: number;
    details: string;
    img: string;
    isFavorite: boolean;
    inCart: boolean;

    constructor(dbProduct: DbProduct, isFavorite: boolean, inCart: boolean) {
        this.id = dbProduct.id;
        this.name = dbProduct.name;
        this.category = dbProduct.category;
        this.price = dbProduct.price;
        this.details = dbProduct.details;
        this.img = dbProduct.img;
        this.isFavorite = isFavorite;
        this.inCart = inCart;
    }
  }
