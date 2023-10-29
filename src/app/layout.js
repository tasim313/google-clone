import { Inter } from 'next/font/google'
import './globals.css'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Google Clone',
//   description: 'For education To Learn Next js',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

