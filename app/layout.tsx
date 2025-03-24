import "./styles/globals.css";
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#10B981" />

        {/* SEO Primary Meta Tags */}
        <meta name="title" content="Instant Username Generator 🚀" />
        <meta name="description" content="Generate viral usernames instantly across 60+ platforms. No signup. 100% free." />
        <link rel="canonical" href="https://instantusername-v2.vercel.app" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://instantusername-v2.vercel.app" />
        <meta property="og:title" content="Instant Username Generator 🚀" />
        <meta property="og:description" content="Generate viral usernames instantly across 60+ platforms. No signup. 100% free." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://instantusername-v2.vercel.app" />
        <meta property="twitter:title" content="Instant Username Generator 🚀" />
        <meta property="twitter:description" content="Generate viral usernames instantly across 60+ platforms. No signup. 100% free." />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Schema.org (Google Rich Snippets) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Instant Username Generator",
              "url": "https://instantusername-v2.vercel.app",
              "description": "Generate viral usernames instantly across 60+ platforms. No signup. 100% free.",
              "image": "https://instantusername-v2.vercel.app/og-image.png",
              "sameAs": [
                "https://www.facebook.com/",
                "https://twitter.com/",
                "https://www.linkedin.com/"
              ]
            }
          `}
        </script>

        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1SZC542XTJ"
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
