import { Kodchasan } from "next/font/google";
import "./globals.css";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio Nicolas ",
  description: "Portfolio de Nicolas Lestrez",
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