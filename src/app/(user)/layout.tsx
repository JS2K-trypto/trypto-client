import { Metadata } from "next";
import BottomNav from "@/components/common/BottomNav";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "Home | Trypto",
  description: "Make & Share your Plan!",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <BottomNav />
    </>
  );
}
