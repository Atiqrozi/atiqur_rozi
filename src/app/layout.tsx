import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Atiqur Rozi — AI & Machine Learning Engineer Portfolio",
  description: "Professional portfolio of Atiqur Rozi, AI & Machine Learning Engineer. Specializing in computer vision, natural language processing, and tabular prediction models.",
  authors: [{ name: "Atiqur Rozi" }],
  openGraph: {
    title: "Atiqur Rozi — AI & Machine Learning Engineer Portfolio",
    description: "Explore advanced deep learning, computer vision, and NLP projects built by Atiqur Rozi.",
    images: [{ url: "/public/profil diri.png" }],
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
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-bg text-text font-body antialiased min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
