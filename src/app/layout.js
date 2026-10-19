import './globals.css'

export const metadata = {
  metadataBase: new URL('https://overdxse.dev'),
  title: 'Lantern · Player alerts for VRChat',
  description: 'A shared VRChat watchlist of known troublemakers and predators. Lantern lets you know when one of them joins your instance.',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: { title: 'Lantern', description: 'A shared VRChat watchlist of known troublemakers and predators. Lantern lets you know when one of them joins your instance.', images: ['/og.png'] },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
