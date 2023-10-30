import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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


