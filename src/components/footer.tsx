import React from 'react'
import Image from 'next/image'
import footerPic from '../assets/pic/footer.png'

export default function Footer() {
  return (
    <div className='flex flex-row w-full min-h-[30rem] bg-footer'>
      <Image src={footerPic} priority alt='lunch' className='w-1/4 sm:flex hidden'/>
      <div className='w-full sm:w-3/4 grid col-span-3 sm:grid-cols-1 md:grid-cols-3 pt-12 p-16 gap-8'>
        <p className='text-2xl font-bold text-white'>OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</p>
        <div className='flex flex-col gap-4'>
          <p className='text-orange-400 font-bold'>FIND OUR RESTAURANTS</p>
          <p className='text-gray-400 text-sm'>1654 R. Don Road #304.NewYork, 85022(602) 867-1010</p>
          <p className='text-gray-400 text-sm'>1654 R. Don Road #304.NewYork, 85022(602) 867-1010</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-orange-400 font-bold'>WORKING HOURS</p>
          <p className='text-gray-400 text-sm'>MONDAY UNTIL FRIDAY 9:00 - 22:00</p>
          <p className='text-gray-400 text-sm'>SATURDAY - SUNDAY 12:00 - 24:00</p>
        </div>
      </div>
    </div>
  )
}
