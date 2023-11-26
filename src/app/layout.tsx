import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Suspense } from 'react'
import { ReduxProvider } from '@/redux/provider'

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
        <ReduxProvider>
          <Suspense fallback>
            {children}
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  )
}
