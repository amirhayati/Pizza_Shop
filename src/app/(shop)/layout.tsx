import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Suspense } from 'react'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
        <Navbar />
          {children}
        <Footer />
      </section>
  )
}


