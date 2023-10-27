export { default } from "next-auth/middleware"

// import { getToken } from "next-auth/jwt"
// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"
// import { getSession } from "next-auth/react"

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req })
//     const session = await getSession()
//     const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register")

//     if (token) {
//       console.log("token", token)
//       return NextResponse.redirect(new URL("/dashboard", req.url))      
//     }

//     if (!session) {
//       console.log("session", session)
//       let from = req.nextUrl.pathname;
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search;
//       }

//       return NextResponse.redirect(
//         new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
//       );
//     }
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true
//       },
//     },
//   }
// )

// export const config = {
//   matcher: ["/dashboard", "/login", "/register"],
// }