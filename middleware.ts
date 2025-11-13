// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si ya empieza con /es o /en, no hacemos nada
  if (locales.some((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`)) {
    return NextResponse.next();
  }

  // No redirigir archivos estáticos ni _next
  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Redirigimos al idioma por defecto (es)
  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
