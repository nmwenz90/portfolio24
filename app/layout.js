import "@css/bootstrap.min.css";
import "@css/coloring.css";
import "@css/plugins.css";
import "@css/style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

import { Inter } from "next/font/google";
import Preloader from "@/layouts/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DJ LUBABA",
  description: "DJ Lubaba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
