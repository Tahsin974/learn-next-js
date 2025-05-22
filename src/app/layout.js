import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const poppines = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next App",

    template: "%s | Next App",
  },
  description: "Learning Next Js",
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black  ${poppines.className} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
