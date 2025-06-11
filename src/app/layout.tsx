import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://aitoolsdirectory.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        {/* Google Analytics - Replace with your tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 -z-10" />
          
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>
          
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
        
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
