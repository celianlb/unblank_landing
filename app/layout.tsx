import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnBlank - Un espace pour tout ce que vous découvrez",
  description:
    "UnBlank est un gestionnaire de favoris nouvelle génération. Organisez, partagez et retrouvez vos liens web facilement grâce à des tags automatiques et un partage ultra-simple.",
  keywords: [
    "gestionnaire de favoris",
    "bookmarks",
    "organisation",
    "tags automatiques",
    "partage de liens",
    "inspiration",
    "productivité",
  ],
  authors: [{ name: "UnBlank" }],
  creator: "UnBlank",
  publisher: "UnBlank",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://unblank.app",
    siteName: "UnBlank",
    title: "UnBlank - Un espace pour tout ce que vous découvrez",
    description:
      "Organisez vos découvertes en ligne avec UnBlank. Capturez tout le web, utilisez des tags automatiques et partagez facilement vos collections.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UnBlank - Gestionnaire de favoris intelligent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnBlank - Un espace pour tout ce que vous découvrez",
    description:
      "Organisez vos découvertes en ligne avec UnBlank. Capturez tout le web, utilisez des tags automatiques et partagez facilement.",
    images: ["/og-image.jpg"],
    creator: "@unblank",
  },
  alternates: {
    canonical: "https://unblank.app",
  },
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wgb3eql.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
