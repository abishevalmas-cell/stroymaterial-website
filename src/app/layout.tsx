import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const play = Play({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Stroymaterial.kz — Закажите стройматериалы через WhatsApp за 30 секунд',
    template: '%s | Stroymaterial.kz',
  },
  description: 'Напишите в WhatsApp или Telegram — AI-помощник мгновенно найдёт лучшие цены от 500+ поставщиков. Понимает сленг, казахский язык, опечатки. Удобная онлайн-оплата.',
  keywords: ['строительные материалы', 'WhatsApp', 'Telegram', 'AI-помощник', 'Казахстан', 'закупки', 'поставщики', 'онлайн-оплата'],
  authors: [{ name: 'Stroymaterial.kz' }],
  creator: 'Stroymaterial.kz',
  publisher: 'Stroymaterial.kz',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: 'https://stroymaterial.kz',
    title: 'Stroymaterial.kz — AI-подбор строительных материалов',
    description: 'Напишите что нужно — AI подберёт лучшие предложения от 500+ поставщиков.',
    siteName: 'Stroymaterial.kz',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stroymaterial.kz — AI-подбор строительных материалов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stroymaterial.kz — AI-подбор строительных материалов',
    description: 'Напишите что нужно — AI подберёт лучшие предложения',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://stroymaterial.kz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/play/v19/6ae-4KCqUqZzRdR6AFw.woff2" type="font/woff2" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1E3A5F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={play.className}>
        <ThemeProvider>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script>

          {/* Yandex.Metrika */}
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(XXXXXXXX, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `}
          </Script>
          <noscript>
            <div><img src="https://mc.yandex.ru/watch/XXXXXXXX" style={{position: 'absolute', left: '-9999px'}} alt="" /></div>
          </noscript>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
