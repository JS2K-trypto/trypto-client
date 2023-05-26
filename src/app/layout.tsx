import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/common/Providers";
import BottomNav from "@/components/common/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Trypto",
  description: "Make & Share your Plan!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
