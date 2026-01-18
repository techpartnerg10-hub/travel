import type { Metadata } from 'next'
import '../styles/globals.css'
// CSS 파일들을 직접 import
import '../styles/css/bootstrap.min8a54.css'
import '../styles/css/boxicons.min8a54.css'
import '../styles/css/font-awesome.min8a54.css'
import '../styles/css/remixicon8a54.css'
import '../styles/css/owl.carousel.min8a54.css'
import '../styles/css/owl-theme-default-min8a54.css'
import '../styles/css/fancybox8a54.css'
import '../styles/css/magnific-popup.min8a54.css'
import '../styles/css/aos8a54.css'
import '../styles/css/odometer.min8a54.css'
import '../styles/css/main8a54.css'
import '../styles/css/responsive8a54.css'
import '../styles/css/dark-theme8a54.css'
import '../styles/theme.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'OurTrip',
  description: 'Travel, Tour, Visa, Hotel, Flight, Car, Cruise Company and Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('clim_theme');
                  if (theme === 'theme-dark') {
                    document.documentElement.className = 'theme-dark';
                  } else {
                    document.documentElement.className = 'theme-light';
                  }
                } catch (e) {
                  document.documentElement.className = 'theme-light';
                }
              })();
            `,
          }}
        />
        <link rel="icon" href="/logo.svg" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Gowun+Batang:wght@400;700&family=Nanum+Myeongjo:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
