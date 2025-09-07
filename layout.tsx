import "./globals.css";

export const metadata = {
  title: "Num3rik — Outils & Services",
  description: "Offres de création de site, modules et applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}