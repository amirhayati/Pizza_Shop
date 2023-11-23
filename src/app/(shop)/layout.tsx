import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Spinner from '@/components/spinner'
import { Suspense } from 'react'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
        <Navbar />
        <Suspense fallback={<Spinner/>}>
          {children}
        </Suspense>
        <Footer />
      </section>
  )
}


