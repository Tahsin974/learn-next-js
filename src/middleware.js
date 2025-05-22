import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const currentCookie = request.cookies.get("next-js-cookie");
  const isAdminDashboard = request.nextUrl.pathname == "/admin-dashboard";
  const isAdmin = true;
  if (isAdminDashboard && !isAdmin) {
    return NextResponse.redirect(new URL("/user-dashboard", request.url));
  }

  return NextResponse.next();
}
