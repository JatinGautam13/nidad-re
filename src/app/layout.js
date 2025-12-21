import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "../styles/globals.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialIcons from "@/components/SocialIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Multi-site Blog System",
    template: "%s | Multi-site Blog System",
  },
  description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  openGraph: {
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-site Blog System",
    description: "Reusable Next.js 14 blog template with Prisma, TipTap, and an admin console.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <Header/>
         {children}
        <Footer/>
        <SocialIcons/>
      </body>
    </html>
  );
}