import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PiFactor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Any additional head content can go here */}</head>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
