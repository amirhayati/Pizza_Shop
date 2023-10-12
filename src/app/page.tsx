'use client'

import Navbar from '@/components/navbar'
import Slider from '@/components/slider'
import Product from '@/components/product'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Slider />
      <Product />
      <Footer />
    </main>
  )
}
