import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Best Dental Clinic in Delhi | Dental Speciality Center - Expert Dental Care",
    template: "%s | Dental Speciality Center - Premier Dental Care in Delhi",
  },
  description: "Leading dental clinic in Delhi offering comprehensive dental care including implants, orthodontics, root canal, teeth whitening & pediatric dentistry. Book appointment today!",
  keywords: [
    "best dentist in delhi",
    "dental clinic delhi",
    "dental implants delhi",
    "orthodontist delhi",
    "root canal treatment delhi",
    "teeth whitening delhi",
    "pediatric dentist delhi",
    "dental speciality center",
    "affordable dental care delhi",
    "emergency dental care delhi",
    "cosmetic dentistry delhi",
    "oral surgery delhi"
  ],
  authors: [{ name: "Dr. Priyanka Goswami" }],
  creator: "Dental Speciality Center",
  publisher: "Dental Speciality Center",
  metadataBase: new URL("https://www.dentalspecialitycentre.in"),
  alternates: {
    canonical: "https://www.dentalspecialitycentre.in",
  },
  openGraph: {
    title: "Best Dental Clinic in Delhi | Dental Speciality Center",
    description: "Expert dental care in Delhi. Specializing in implants, orthodontics, root canal & cosmetic dentistry. Experienced doctors, modern equipment.",
    url: "https://www.dentalspecialitycentre.in",
    siteName: "Dental Speciality Center",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Speciality Center - Premier Dental Clinic in Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Delhi | Dental Speciality Center",
    description: "Expert dental care in Delhi. Book your appointment today!",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ad465a019500f8d1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dental Speciality Center",
              "image": "https://www.dentalspecialitycentre.in/logo.png",
              "telephone": "+91-11-35619736",
              "email": "info@Support@dentalspecialitycentre.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "E-792 Chittaranjan Park",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110019",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.5355",
                "longitude": "77.2503"
              },
              "url": "https://www.dentalspecialitycentre.in",
              "priceRange": "₹₹",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "areaServed": "Delhi, India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dental Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dental Implants"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Orthodontics"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Root Canal Treatment"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}