import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Note Hub Home Page",
  description: "An application for managing notes to control and accomplish daily tasks",
  openGraph: {
    title: "Note Hub",
    description: "An application for managing notes to control and accomplish daily tasks",
    url: "https://07-routing-nextjs-blond.vercel.app/",
    images: [
              {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                width: 1200,
                height: 630,
                alt: "Not Found",
              }
            ]
  }
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
        <Header />
          <main>
            {children}
            {modal}
          </main>
        <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
