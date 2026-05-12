import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhiasmi International — Premium Home Textiles | Paliwal Group",
  description:
    "Exquisite bath mats, rugs, throws & curtains crafted with generations of artisanal expertise. Export-quality home textiles from the Paliwal Group.",
  keywords: "home textiles, bath mats, rugs, throws, curtains, export, India, premium",
  openGraph: {
    title: "Abhiasmi International — Premium Home Textiles",
    description: "Woven with tradition. Crafted for the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 text-charcoal-800 antialiased">{children}</body>
    </html>
  );
}
