import Nav from "@/component/Nav/Nav";
import "./globals.css";
import "aos/dist/aos.css";
import { MyProvider } from "@/context/MyContext";
import SmoothScroll from "@/component/SmoothScroll/SmoothScroll";

export const metadata = {
  title: "PiFactor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className=" ">
        <SmoothScroll />
        <MyProvider>
          <Nav />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
