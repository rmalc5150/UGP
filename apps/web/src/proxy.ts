import { NextResponse, type NextRequest } from 'next/server';

// Keep the site on the launch page until the storefront is ready.
export function proxy(request: NextRequest) {
  const destination = request.nextUrl.clone();
  destination.pathname = '/';
  destination.search = '';
  return NextResponse.redirect(destination);
}

export const config = {
  matcher: [
    '/((?!$|_next/|favicon\\.ico$|ugp%20logo\\.png$|ugp logo\\.png$|Risograph-Grid\\.png$).*)',
  ],
};
