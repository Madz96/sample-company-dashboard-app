import { auth } from "@/auth";

export const proxy = auth;

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/announcements/:path*",
    "/tools/:path*",
    "/metrics/:path*",
    "/requests/:path*",
    "/directory/:path*",
    "/sign-in",
  ],
};