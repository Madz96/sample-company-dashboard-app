import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const protectedPrefixes = [
  "/dashboard",
  "/announcements",
  "/tools",
  "/metrics",
  "/requests",
  "/directory",
];

export const demoCredentials = {
  email: process.env.DEMO_USER_EMAIL ?? "admin@company.com",
  password: process.env.DEMO_USER_PASSWORD ?? "ChangeMe123!",
  name: process.env.DEMO_USER_NAME ?? "Operations Admin",
};

const authSecret =
  process.env.AUTH_SECRET ??
  (process.env.NODE_ENV === "development"
    ? "dev-only-auth-secret-change-before-sharing"
    : undefined);

if (!authSecret) {
  throw new Error(
    "Missing AUTH_SECRET. Add AUTH_SECRET to your environment before starting the app.",
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: authSecret,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        if (
          typeof email !== "string" ||
          typeof password !== "string" ||
          email !== demoCredentials.email ||
          password !== demoCredentials.password
        ) {
          return null;
        }

        return {
          id: "company-demo-user",
          name: demoCredentials.name,
          email: demoCredentials.email,
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = Boolean(auth?.user);
      const isProtected = protectedPrefixes.some((prefix) =>
        nextUrl.pathname.startsWith(prefix),
      );

      if (nextUrl.pathname === "/sign-in" && isSignedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      if (isProtected) {
        return isSignedIn;
      }

      return true;
    },
  },
});