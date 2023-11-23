import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { CartProvider } from '../context/CartContext'
import { Suspense } from 'react'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

export const metadata: Metadata = {
  title: 'pizza shopping',
  description: 'pizza shopping',
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
          <Suspense fallback>
            {children}
          </Suspense>
        </CartProvider>
      </body>
    </html>
  )
}
