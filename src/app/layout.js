import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Restaurante Exemplo | Cardápio Digital',
  description: 'Conheça nossos pratos, personalize seu pedido e fale com a gente pelo WhatsApp.',
  applicationName: 'Cardápio Digital',
  keywords: ['cardápio digital', 'restaurante', 'pedidos', 'gastronomia'],
  openGraph: {
    title: 'Restaurante Exemplo | Cardápio Digital',
    description: 'Sabor, cuidado e praticidade em poucos toques.',
    type: 'website',
    locale: 'pt_BR',
    images: ['/images/boteko-da-vila.webp'],
  },
}

export const viewport = { themeColor: '#8f1d1d', colorScheme: 'light' }

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
