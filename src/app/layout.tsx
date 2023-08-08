import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-bs-theme="dark">
        <div id="__next">
          <Navbar />
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
