import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devashish Dhumal | AI & App Developer Portfolio",
  description: "B.Tech Artificial Intelligence student specializing in AI/ML solutions and mobile app development with Flutter & Next.js. View my projects and get in touch.",
  keywords: "AI Developer, Machine Learning, Flutter Developer, Next.js, Portfolio, App Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
