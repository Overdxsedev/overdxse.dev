import './globals.css'

export const metadata = {
  title: 'overdxse.dev',
  description: 'Transfem developer specializing in JS, HTML, CSS & Electron apps',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
