import type { Metadata } from "next";
import "./globals.css";
import Sidenav from "@/components/sidenav/sidenav";
import Header from "@/components/sidenav/header/header";
import { NextAuthProvider } from "@/components/sidenav/nextauthprovider/nextauthprovider";


export const metadata: Metadata = {
  title: "Project Manager",
  description: "Manage your projects with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <main className='ml-64 py-20 px-6'>
          <Sidenav />
          <Header />
          {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
