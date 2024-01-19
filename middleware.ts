import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (req.nextUrl.pathname.startsWith('/auth') && !token) {
    return;
  }

  if (req.nextUrl.pathname === '/auth' && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/auth'],
};
