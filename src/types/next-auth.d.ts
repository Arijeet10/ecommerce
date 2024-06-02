import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth'{
    interface User{
        id?:string;
        email:string;
        fullname:string;
        password:string;
        wishlist:string[];
        cart:string[];
    }
    interface Session{
        User:{
            id?:string;
            email:string;
            fullname:string;
            wishlist:string[];
            cart:string[];
        }&DefaultSession['user']
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        User:{
            id?:string;
            email:string;
            fullname:string;
            wishlist:string[];
            cart:string[];
        }&DefaultSession['user']
    }
}