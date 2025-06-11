import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Directory - Discover the Best AI Tools in One Place',
    template: '%s | AI Tools Directory'
  },
  description: 'Find, compare, and choose from hundreds of curated AI tools across all categories. From AI agents to design tools, discover what works best for your needs.',
  keywords: ['AI tools', 'artificial intelligence', 'AI directory', 'AI software', 'machine learning tools'],
  authors: [{ name: 'AI Tools Directory' }],
  creator: 'AI Tools Directory',
  publisher: 'AI Tools Directory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aitoolsdirectory.com',
    title: 'AI Tools Directory - Discover the Best AI Tools in One Place',
    description: 'Find, compare, and choose from hundreds of curated AI tools across all categories.',
    siteName: 'AI Tools Directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Directory - Discover the Best AI Tools in One Place',
    description: 'Find, compare, and choose from hundreds of curated AI tools across all categories.',
    creator: '@aitoolsdirectory',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://aitoolsdirectory.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Google Analytics - Replace with your tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Tools Directory",
              "description": "Find, compare, and choose from hundreds of curated AI tools across all categories.",
              "url": "https://aitoolsdirectory.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aitoolsdirectory.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
