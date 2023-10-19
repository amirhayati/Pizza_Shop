import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { CartProvider } from '../contex/CartCotext'

export const metadata: Metadata = {
  title: 'Booking Hostel',
  description: 'Booking Hostel',
}

const font = Nunito ({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
