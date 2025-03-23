import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instant Username Generator 🚀",
  description:
    "Generate viral usernames instantly across 60+ platforms. No signup. 100% free. Start building your digital identity now!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Instant Username Generator 🚀" />
        <meta
          property="og:description"
          content="Generate viral usernames instantly across 60+ platforms. No signup. 100% free."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://instant-username-live.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://instant-username-live.vercel.app" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1SZC542XTJ`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1SZC542XTJ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
