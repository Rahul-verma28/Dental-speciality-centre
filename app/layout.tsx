import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    default: "Dental Speciality Center",
    template: "%s - Dental Speciality Center",
  },
  description: "Professional dental care for the whole family",
  keywords: [
    "dental",
    "dentist",
    "dental care",
    "family dentist",
    "oral health",
    "teeth whitening",
    "root canal",
    "braces",
    "dental implants",
  ],
  authors: [
    {
      name: "Dental Speciality Center",
      url: "https://www.dentalspecialitycentre.in",
    },
  ],
  creator: "Dental Speciality Center",
  publisher: "Dental Speciality Center",
  openGraph: {
    title: "Dental Speciality Center",
    description: "Professional dental care for the whole family",
    url: "https://www.dentalspecialitycentre.in",
    siteName: "Dental Speciality Center",
    images: [
      {
        url: "https://www.dentalspecialitycentre.in/logo.png",
        width: 800,
        height: 600,
        alt: "Dental Speciality Center Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Speciality Center",
    description: "Professional dental care for the whole family",
    images: [
      {
        url: "https://www.dentalspecialitycentre.in/logo.png",
        width: 800,
        height: 600,
        alt: "Dental Speciality Center Logo",
      },
    ],
    creator: "@dentalspecialitycenter",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/site.webmanifest",
  // themeColor: "#ffffff",
  appleWebApp: {
    capable: true,  
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
