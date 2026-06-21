import { Kodchasan } from "next/font/google";
import "./globals.css";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-nicolas-sigma.vercel.app"),

  title: "Nicolas Lestrez | Développeur Web Freelance",
  description:
    "Portfolio de Nicolas Lestrez. Création de sites web modernes, UX/UI, Next.js et WordPress.",

    verification: {
  google: "a-yRKzuFYEDAOfJnst_VwWyRWCgKC5XSEaDYJAJWvgg",
},

  authors: [{ name: "Nicolas Lestrez" }],
  creator: "Nicolas Lestrez",

  openGraph: {
    title: "Nicolas Lestrez | Développeur Web Freelance",
    description:
      "Découvrez mes réalisations et mes compétences en développement web, UX/UI et WordPress.",
    url: "https://portfolio-nicolas-sigma.vercel.app",
    siteName: "Portfolio Nicolas Lestrez",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Nicolas Lestrez",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nicolas Lestrez | Développeur Web Freelance",
    description:
      "Portfolio de Nicolas Lestrez. Création de sites web modernes, UX/UI et WordPress.",
    images: ["/opengraph-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className={`${kodchasan.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}