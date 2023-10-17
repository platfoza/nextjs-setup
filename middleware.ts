import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: ['/profile', '/login'],
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    let token = request.cookies.get('token');

    if (token && pathname === '/profile') {
      const response = NextResponse.next();
      response.cookies.set('token', token.value);
      return response;
    }
    if(token && pathname === '/login') {
      return NextResponse.redirect("http://localhost:3000/profile");
    }

    if(!token && pathname === '/profile') {
      return NextResponse.redirect("http://localhost:3000/login");
    }
}
