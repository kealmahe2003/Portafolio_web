import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

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
  title: "Kevin Marín — Full Stack Developer",
  description:
    "Desarrollador Full Stack especializado en React y Node.js. Llevo proyectos de cero a producción de forma autónoma.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Colombia"],
  authors: [{ name: "Kevin Alexander Marín", url: "https://github.com/kealmahe2003" }],
  openGraph: {
    title: "Kevin Marín — Full Stack Developer",
    description:
      "Full Stack Developer specialized in React and Node.js. I take projects from zero to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
