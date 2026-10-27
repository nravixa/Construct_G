import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'G&J Buildcon | Turnkey Civil RCC & Heavy Rotary Piling Contractors in Pune',
  description:
    'Led by Mr. Umesh Gatkal, G&J Buildcon has delivered over 25+ Lakh sq. ft. of residential towers, commercial corporate hubs, and deep geotechnical foundation piling across Pune. Direct owners of high-torque SANY SR285R & MAT rotary drill rigs.',
  keywords: [
    'G and J Buildcon',
    'Civil Construction Pune',
    'Piling Contractors Pune',
    'SANY Piling Rig Pune',
    'MAT Piling Rig',
    'Deep Foundation Piling Maharashtra',
    'Basalt Rock Socketing',
    'IS 2911 Piling Standard',
    'Umesh Gatkal',
    'GK Associates Construction',
    'SNBP Group Infrastructure',
    'Commercial Business Park Hinjawadi',
    'High Rise RCC Pune',
    'Pimple Saudagar Civil Contractor',
    'Wakad Construction Company',
    'Ravet Residential Towers',
  ],
  authors: [{ name: 'G&J Buildcon', url: 'https://gjbuildcon.com' }],
  creator: 'Mr. Umesh Gatkal',
  publisher: 'G&J Buildcon',
  metadataBase: new URL('https://gjbuildcon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'G&J Buildcon | Civil RCC & Deep Foundation Piling in Pune',
    description:
      'Over 25+ Lakh sq. ft. constructed with 700+ skilled workforce. Direct owners of SANY rotary rigs partnering with GK Associates, SNBP, and GS Builders.',
    url: 'https://gjbuildcon.com',
    siteName: 'G&J Buildcon',
    images: [
      {
        url: '/images/hero_architecture.jpg',
        width: 1200,
        height: 675,
        alt: 'G&J Buildcon Architecture & Civil Construction',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G&J Buildcon | Civil Construction & Piling Experts Pune',
    description:
      'Over 25+ Lakh sq. ft. delivered across Pune. Heavy rotary drilling rigs & high-rise civil superstructures.',
    images: ['/images/hero_architecture.jpg'],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'G&J Buildcon',
  alternateName: 'G and J Buildcon',
  founder: {
    '@type': 'Person',
    name: 'Mr. Umesh Gatkal',
    jobTitle: 'Founder & Managing Director',
  },
  description:
    'Turnkey civil RCC infrastructure and heavy geotechnical foundation piling contractor in Pune, Maharashtra. Over 25+ Lakh sq. ft. delivered with 700+ skilled workforce.',
  url: 'https://gjbuildcon.com',
  telephone: '+919168777272',
  email: 'gjconstruction111@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat No-3, B Wing, Ganga Park',
    addressLocality: 'Pimple Saudagar',
    addressRegion: 'Pune',
    postalCode: '411027',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5913,
    longitude: 73.7847,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Pune',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Pimpri-Chinchwad',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Maharashtra',
    },
  ],
  priceRange: '₹₹₹₹',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Civil Construction & Geotechnical Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Turnkey Civil RCC High-Rise Construction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Heavy Rotary Basalt Piling (SANY SR285R & MAT Rigs)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Tech Parks & Institutional Campuses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Temple Sanctuaries & Heritage Basalt Stone Architecture',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ebe5dd" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
