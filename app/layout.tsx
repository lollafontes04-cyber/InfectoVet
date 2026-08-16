import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "InfectoVet | Atlas de Enfermidades Infecciosas e Parasitárias Animais",

  description:
    "Atlas digital para estudo e consulta de enfermidades infecciosas e parasitárias animais.",


  openGraph: {
    title:
      "InfectoVet | Atlas de Enfermidades Infecciosas e Parasitárias Animais",

    description:
      "Conhecimento científico sobre enfermidades infecciosas e parasitárias em animais.",

    url: "https://infecto-vet.vercel.app",

    siteName: "InfectoVet",

    images: [
      {
        url: "/images/logo/logo-infectovet.png",
        width: 1200,
        height: 630,
        alt: "InfectoVet - Atlas Veterinário",
      },
    ],

    locale: "pt_BR",

    type: "website",
  },


  twitter: {
    card: "summary_large_image",

    title:
      "InfectoVet | Atlas Veterinário",

    description:
      "Atlas digital de enfermidades infecciosas e parasitárias animais.",

    images: [
      "/images/logo/logo-infectovet.png"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
