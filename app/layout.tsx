import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import StyledComponentsRegistry from '@/lib/registry'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aweshalom Cleaning Service Lagos | Home, Office & Pest Control',
  description:
    'Professional cleaning and pest control services in Lagos. Serving Yaba, Lekki, Victoria Island & across Lagos Island and Mainland. Call 0805 607 4310.',
  keywords:
    'cleaning service Lagos, pest control Lagos, office cleaning Lagos, deep cleaning Yaba, fumigation Lagos',
  openGraph: {
    title: 'Aweshalom Cleaning Service',
    description: "Lagos's most trusted cleaning and pest control specialists.",
    url: 'https://agscleaning.com',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aweshalom Cleaning Service',
  image: '',
  telephone: '+2348056074310',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '314 Herbert Macaulay Way, Sabo Yaba',
    addressLocality: 'Lagos',
    postalCode: '100231',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.5095,
    longitude: 3.3816,
  },
  url: 'https://agscleaning.com',
  priceRange: '₦₦',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '66',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: 'Lagos, Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
            background-color: #F1F1F1;
            color: #1A1A2E;
            -webkit-font-smoothing: antialiased;
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #F1F1F1; }
          ::-webkit-scrollbar-thumb { background: #1E3A8A; border-radius: 3px; }
        `}</style>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
