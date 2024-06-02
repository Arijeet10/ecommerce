import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })|| request.cookies.get('token')?.value || '';
  const path = request.nextUrl.pathname
  const isAuthPath = path === '/login' || path === '/signup'
  const isProfilePath=path==='/profile'
  const isCheckoutPath=path==='/cart/checkout'


  if(isAuthPath && token){
    return NextResponse.redirect(new URL("/",request.url))
  }

  if(isProfilePath&&!token){
    return NextResponse.redirect(new URL("/signup",request.url))
  }

  if(isCheckoutPath&&!token){
    return NextResponse.redirect(new URL("/signup",request.url))
  }

  if(!isAuthPath && !token){
    return NextResponse.redirect(new URL("/",request.url))
  }

  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/signup", "/login","/profile","/cart/checkout"],
};
