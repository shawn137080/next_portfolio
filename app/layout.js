import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "./providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "pokeshawn.com",
  description: "Shawn Pan's personal portfolio website, a front-end developer specializing in React, Next.js and Tailwindcss.",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "cyan" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript","Full Stack Developer","Shawn Pan"],
  authors: [{ name: "Shawn Pan" }],
  creator: "Shawn Pan",
  openGraph: {
    title: "pokeshawn.com",
    description: "Shawn Pan's personal portfolio website, a front-end developer specializing in React, Next.js and Tailwindcss.",
    authors: ["Shawn", "Pan"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  languages: {
    'en-US': '/en-US',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-200 dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
