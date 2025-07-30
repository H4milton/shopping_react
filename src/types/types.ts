export interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  stock: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

// // Esto también funcionaría perfectamente
// export type Product = {
//   image: { /* ... */ };
//   name: string;
//   category: string;
//   price: number;
// }
