

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

export interface UserDataTypes{
    id:string;
    email:string;
    fullname:string;
    password:string; 
    wishlist:ProductTypes[];
    cart:CartProductTypes[];
}

export interface CheckoutFormTypes{
    name:string;
    email:string;
    companyName:string;
    streetAddress:string;
    apartment:string;
    city:string;
    phoneNumber:string;
    paymentOption:string;
}