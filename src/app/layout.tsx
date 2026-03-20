import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Leslie Bookkeeping | Professional Bookkeeping Services for Small Businesses",
  description:
    "Leslie Bookkeeping offers professional bookkeeping, cleanup, and administrative services for small businesses and farms. QuickBooks and Ambrook certified. Get organized and confident with your finances.",
  metadataBase: new URL("https://lesliebookkeeping.com"),
  alternates: {
    canonical: "https://lesliebookkeeping.com",
  },
  openGraph: {
    title: "Leslie Bookkeeping | Professional Bookkeeping Services for Small Businesses",
    description:
      "Expert bookkeeping, cleanup, and administrative services for small businesses and farms. QuickBooks and Ambrook certified.",
    type: "website",
    url: "https://lesliebookkeeping.com",
    siteName: "Leslie Bookkeeping",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Leslie Bookkeeping logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Leslie Bookkeeping | Professional Bookkeeping Services",
    description:
      "Expert bookkeeping, cleanup, and administrative services for small businesses and farms. QuickBooks and Ambrook certified.",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Leslie Bookkeeping",
              description:
                "Professional bookkeeping, cleanup, and administrative services for small businesses and farms.",
              url: "https://lesliebookkeeping.com",
              logo: "https://lesliebookkeeping.com/images/logo.png",
              image: "https://lesliebookkeeping.com/images/logo.png",
              email: "lesliebookkeepingllc@gmail.com",
              sameAs: [
                "https://www.facebook.com/profile.php?id=100088005292186",
              ],
              priceRange: "$$",
              serviceType: [
                "Bookkeeping",
                "Cleanup Bookkeeping",
                "Administrative Work",
                "Small Projects",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
