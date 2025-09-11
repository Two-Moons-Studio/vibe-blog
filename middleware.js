import { NextResponse } from '@vercel/edge';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Remove problematic headers that cause VPN blocking
  response.headers.delete('content-disposition');
  response.headers.delete('accept-ranges');
  response.headers.delete('access-control-allow-origin');
  
  // Ensure proper content type for HTML pages
  if (request.nextUrl.pathname.startsWith('/posts/') || 
      request.nextUrl.pathname === '/' ||
      request.nextUrl.pathname.startsWith('/about') ||
      request.nextUrl.pathname.startsWith('/archive')) {
    response.headers.set('content-type', 'text/html; charset=utf-8');
  }
  
  return response;
}

export const config = {
  matcher: '/(.*)',
}