import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/common/Providers";
import Header from "@/components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>
            <Header />
            {children}
            {modal}
          </main>
        </Providers>
      </body>
    </html>
  );
}
