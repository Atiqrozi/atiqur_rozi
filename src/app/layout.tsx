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
  metadataBase: new URL("https://atiqur-rozi.vercel.app"),
  title: "Atiqur Rozi | AI & Machine Learning Engineer Portfolio",
  description: "Professional portfolio of Atiqur Rozi, AI & Machine Learning Engineer. Specializing in computer vision (Batik Vision), NLP (CV Screening), and tabular ML models (Lung AI).",
  keywords: [
    "Atiqur Rozi",
    "Atiqrozi",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "MLOps",
    "Portfolio",
    "Batik Vision",
    "CV Screening"
  ],
  authors: [{ name: "Atiqur Rozi", url: "https://atiqur-rozi.vercel.app" }],
  creator: "Atiqur Rozi",
  publisher: "Atiqur Rozi",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Atiqur Rozi | AI & Machine Learning Engineer Portfolio",
    description: "Explore advanced deep learning, computer vision, and NLP projects built by Atiqur Rozi.",
    url: "https://atiqur-rozi.vercel.app",
    siteName: "Atiqur Rozi Portfolio",
    images: [
      {
        url: "/profil diri.png",
        width: 1200,
        height: 1200,
        alt: "Atiqur Rozi Profile Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atiqur Rozi | AI & Machine Learning Engineer Portfolio",
    description: "Explore advanced deep learning, computer vision, and NLP projects built by Atiqur Rozi.",
    images: ["/profil diri.png"],
    creator: "@Atiqrozi",
  },
  verification: {
    google: "d902baba7ddd7148",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Atiqur Rozi",
              "alternateName": "Atiqrozi",
              "url": "https://atiqur-rozi.vercel.app",
              "image": "https://atiqur-rozi.vercel.app/profil%20diri.png",
              "jobTitle": "AI & Machine Learning Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "sameAs": [
                "https://github.com/Atiqrozi",
                "https://www.linkedin.com/in/atiqur-rozi-28a84a258/",
                "https://www.instagram.com/rob.yft/"
              ],
              "description": "AI & Machine Learning Engineer specializing in Computer Vision, NLP, and tabular predictive models.",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Natural Language Processing",
                "MLOps",
                "Deep Learning",
                "PyTorch",
                "TensorFlow"
              ]
            }),
          }}
        />
      </head>
      <body className="bg-bg text-text font-body antialiased min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
