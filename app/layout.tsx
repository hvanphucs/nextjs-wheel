import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wheel Maker | Spin the Wheel - Random Picker",
  description:
    "Discover endless possibilities with Spin the Wheel - Random Picker Wheel Maker! Unleash your creativity and design custom spin wheels for any occasion. Whether it's for games, giveaways, or decision-making fun, our user-friendly platform lets you create interactive experiences that engage and entertain. Spin the wheel and make your ideas come to life in a dynamic and exciting way!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
