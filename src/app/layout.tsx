import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import type { Metadata } from 'next'
import { ThemeProvider } from "~/components/pb/theme-provider"
import Header from '~/components/pb/header'
import Footer from '~/components/pb/footer'
import { Toaster } from "~/components/ui/toaster"
import { Analytics } from '~/components/pb/analytics'
import { Suspense } from 'react'
import Loading from '~/components/pb/loading'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Posterboard.io - A better way to find a job',
  description: 'Posterboard.io - A better way to find a job',
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Header />
              <TRPCReactProvider headers={headers()}>
              <Suspense fallback={<Loading />}>
                {children}
                  </Suspense>
                </TRPCReactProvider>
              <Toaster />
            <Analytics />
          <Footer />
          </ThemeProvider>  
        </body>
      </html>
    </>
  );
}
