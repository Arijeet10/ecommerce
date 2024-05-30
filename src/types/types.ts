

export interface RatingTypes{
    count:number;
    rate:number;
}

export interface ProductTypes{
    category:string;
    description:string;
    id:number; 
    image:string;
    price:number;
    rating: RatingTypes;
    title:string;
}

export interface CartProductTypes{
    product:ProductTypes;
    productCount:number;
}